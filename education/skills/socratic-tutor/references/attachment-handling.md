# Attachment Handling Constraints

> Users may provide problem screenshots, PDF chapters, lecture notes in Markdown, or document excerpts.
> This skill's stance: accept text only; do not perform OCR or PDF parsing.

---

## Accept vs reject

| Input type | Accept? | Handling |
|---|---|---|
| Plain text problem pasted by the user | Yes | Proceed directly to intent classification |
| Markdown / TXT file path | Yes | Read the file and truncate to <= 100k characters |
| OCR text already converted by the user | Yes | Treat as pasted text |
| Problem screenshot / image | Soft allow | Prefer OCR first; if the host model has vision, use it only for assisted recognition -> ask the user to restate and confirm -> then proceed |
| PDF file | No | Ask the user to extract and paste the most relevant text fragment |
| URL | No | Ask the user to copy the main body text |
| Video / audio | No | Out of scope |

---

## Friendly fallback scripts

Principle: the purpose of refusing an attachment format is not to push the user away, but to get them more accurate guidance with less effort.
Each fallback should contain: one empathetic sentence, why this is better for them, and one smallest executable action that takes about 30 seconds or less.
When refusing, do not start with "I cannot". Prefer a collaborative tone such as "this will be more reliable".

### Screenshot / image

Preferred path: ask the user to use system-level OCR to convert the image to text. This has learning value too, because typing or checking the problem is the first read-through.

```text
I see you sent a screenshot. Reading directly from the image can make me misread symbols or subscripts, which would send the guidance in the wrong direction.
Please take 30 seconds to convert it to text so the guidance is much more accurate:
  - iPhone: long-press the text in the image -> "Copy Text"
  - Android: use the gallery text-recognition feature, Google Lens, or WeChat text recognition
  - Desktop: use your screenshot tool's text recognition if available
Paste the text back here. Typing the problem by hand also counts as the first read-through and often helps.
```

Vision fallback: if the user refuses OCR or says they cannot convert it now, and the host model has vision capability, image recognition is allowed, but confirmation by the user is mandatory.

```text
I can take a first look, but subscripts, Greek letters, and formula boundaries are easy to misread, so this is only my initial guess:

I think the problem says roughly:
> "XXX" (mark low-confidence parts with ?)

Please do one thing: restate the problem in one sentence, or type only the parts I marked with ?. Once you confirm I did not misread it, we will start the three-segment guidance.
```

Hard constraints for the vision fallback:

- Without user confirmation, do not enter the three-segment guidance.
- If formula, subscript, Roman numeral, or handwritten-symbol recognition has low confidence, expose the uncertainty explicitly.
- If the user's restatement conflicts with the recognition result, trust the user's restatement. Never insist that the AI recognition is correct.
- After confirmation, store the recognized problem as internal `user_attempt` context and proceed normally.

### PDF

```text
I do not read the PDF directly because formula, table, and caption positioning can be lost.
Please copy the section you are stuck on, or paste the problem statement plus the step where you got stuck. Then I can continue the guidance.
```

### URL

```text
I do not fetch the web page directly because sidebars, ads, and comments can introduce noise.
Please select and paste the main body text. I can continue the guidance from there.
```

### Video / audio

```text
I do not process video or audio content directly. If it is a recorded lecture:
  - paste the subtitle or slide text for the 30 seconds you did not understand
  - or say in one sentence: "The teacher was explaining X, and I got stuck at Y"
That gives us a more precise entry point.
```

---

## Text attachment length limits

```python
MAX_PASTED_TEXT_CHARS = 100_000  # about 30k Chinese characters
MAX_MARKDOWN_CHARS = 200_000     # long Markdown document
```

If the input is too long:

- Reject processing the whole document.
- Ask the user: "This is too long. Please paste only the section, page, or problem you are most stuck on."

---

## Multiple attachments

| Count | Handling |
|---|---|
| 0 | Do not invent content; if a problem is needed, ask "please paste the problem" |
| 1 | Process it directly |
| 2-3 | Ask which one is the main problem and which are references |
| > 3 | Reject batch processing and ask the user to focus on 1-2 items |

---

## Attachment handling prohibitions

- Do not invent screenshot content. Exception: vision-assisted recognition is allowed only after the user confirms the content.
- In the vision fallback, do not hide low confidence. Mark uncertain parts and ask the user to type or confirm them.
- In the vision fallback, do not skip user confirmation before entering three-segment guidance.
- Do not parse PDFs with PyMuPDF or similar tools, even if technically possible.
- Do not fetch URLs directly.
- Do not increase the attachment length limits; doing so harms context quality.
- Do not lecture when the attachment is insufficient. Ask for the missing minimum information instead.

---

## Parsed information structure

```python
attachment = {
    "source": "pasted_text" | "markdown_path" | "txt_path" | "vision_assisted",
    "char_count": 1234,
    "preview": "...",  # first 200 characters
    "main_section": "...",  # the section marked by the user as important, or the whole text
    "user_attempt": "...",  # the learner's attempted steps; very important
    "vision_confirmed": True | False,  # required for source=vision_assisted; False means guidance is forbidden
}
```

`user_attempt` is the key signal for guidance granularity:

- If the user gives an attempt, start from "where did you get stuck?" with medium granularity.
- If the user gives no attempt, start from "restate the problem / inventory the knowns" with fine granularity.
