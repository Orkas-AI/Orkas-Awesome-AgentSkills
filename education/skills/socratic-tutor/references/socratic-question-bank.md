# Socratic Question Template Bank

> Reference for generating segment 1, "Think first".
> Look up by scenario and sticking-point type so questions do not have to be invented from scratch each time.

---

## Six general question types

| Type | Template | Trigger |
|---|---|---|
| Restatement check | "Can you restate what the problem is asking in your own words?" | The user misreads the problem or skips keywords |
| Known-condition inventory | "What conditions do you already know? Which are given by the problem, and which did you derive?" | The user confuses given information with self-derived information |
| Target clarification | "What exactly do you need to produce: a value, an expression, a proof, or a conclusion?" | The user drifts away from the target while working |
| Analogy transfer | "How is this similar to, or different from, something you have learned before?" | The user is stuck because the problem feels unfamiliar |
| Reverse reasoning | "If the conclusion were already true, what prerequisite would you need?" | The user cannot make progress forward |
| Boundary challenge | "If condition X were removed or changed to Y, would the conclusion still hold?" | The user memorizes a theorem mechanically without understanding it |

---

## Subject-specific templates

### Mathematics (calculus / linear algebra / probability)

- "What substitution does the structure of this expression suggest?"
- "How do the denominator's zeros relate to the interval of integration?"
- "The theorem has three conditions. Does your problem satisfy all of them? Which one is most worth questioning?"
- "What intuition can the eigenvalues of this matrix give you?"
- "Are the expectation and variance of this distribution the same thing as the 'mean' the problem asks for?"

### Physics (mechanics / electromagnetism / quantum)

- "Have you drawn the free-body diagram? Which force direction are you least sure about?"
- "Between conservation of energy and conservation of momentum, which should be used first here, and why?"
- "In Lenz's law, which quantity is the 'change' being opposed?"
- "Have you written the normalization condition for the wave function psi?"

### Computer science (algorithms / data structures / operating systems / networks)

- "What are the worst-case, average-case, and best-case time complexities of this algorithm?"
- "Which of the five red-black tree properties has been violated?"
- "Is this process I/O-bound or CPU-bound? How should that affect the scheduling policy?"
- "What would go wrong if TCP's three-way handshake had one fewer step?"

### Economics / management

- "Is this a marginal-analysis problem or an equilibrium-analysis problem?"
- "Have you accounted for opportunity cost? Is sunk cost something you should ignore here?"
- "If demand elasticity is greater than 1 or less than 1, what does that imply for the firm's pricing?"

### Academic argument / thesis paragraph

- "What is the core claim of this paragraph? Summarize it in one sentence."
- "Does this citation support your argument, or is it only decorative?"
- "After reading this paragraph, what is the next question a reader would ask? Have you answered it?"
- "Can your experimental figure be understood without reading the main text?"

---

## Sticking-point type x question depth

### Type A: the user does not understand the problem statement

Guidance granularity: finest; unpack the wording.

- "In the problem statement, is XXX a mathematical definition or an everyday-language phrase?"
- "Is the problem asking for a sufficient condition, a necessary condition, or a necessary and sufficient condition?"
- "Does the problem say at least, at most, or exactly?"

### Type B: the user knows the general direction but is stuck at one step

Guidance granularity: medium; point toward that step.

- "You reached [the user's last step]. The next move usually needs... (name the tool, do not expand it)."
- "What is the purpose of this transformation? What should the target form look like?"

### Type C: the user has no idea where to start

Guidance granularity: coarse; find an entry point first.

- "What type of problem is this: integration, proof, contradiction, construction, or something else?"
- "Is there a similar textbook example? Think about how that example starts."

### Type D: the user has an answer but does not trust it

Guidance granularity: verification mode.

- "Can you substitute a special value back in to check it?"
- "Do the units make sense? Does the order of magnitude match your intuition?"
- "If the problem statement changed slightly, how would your answer change?"

---

## Academic argument topics

### S1 Topic idea comparison

- "What do your supervisor group's three most representative recent works focus on? Do you want to extend that direction or open a new one?"
- "If your idea worked, what figure or table would it produce? What topic does that imply when you design backward?"
- "Would this topic still matter three years from now?"

### S2 Literature review

- "What do you want the literature review to convince the reader of?"
- "Among these 30 papers, which 10 could you remove so the review becomes more focused?"
- "Which organizing principle fits your paper better: method evolution timeline or problem taxonomy?"

### S3 Proposal

- "After reading the problem statement, can the reader restate what you are solving and why it is hard?"
- "Are your research objectives and research questions actually the same thing?"

### S4 Argument writing

- "Which sentence is the topic sentence of this paragraph? If you delete it, can the paragraph still stand?"
- "How many lines do you give to supporting evidence, and how many to counter-evidence?"

### S5 Revision feedback

- "What is the reviewer really asking: is the method wrong, or is the explanation unclear?"
- "For the logical gap between these two paragraphs, will you use a definition, an example, or evidence to bridge it?"

---

## Anti-patterns

- Do not ask yes/no questions such as "Can you do it?" or "Do you understand?"
- Do not ask a question that requires the learner to state the full answer, such as "So what is the answer?"
- Do not ask more than three questions in one segment; that causes cognitive overload.
- Do not make questions independent of each other; they should build progressively.
- Do not disguise a hint as a question, such as "Shouldn't you use substitution u = x - 1/x?" That is the answer, not a question.

---

## Template selection decision tree

```text
Step 1: Which sticking-point type is the user in: A/B/C/D?
  - A: does not understand the problem -> use the finest granularity, starting with restatement check + known-condition inventory
  - B: stuck at a step -> use medium granularity, target clarification + analogy transfer
  - C: no idea where to start -> use coarse granularity, analogy transfer + reverse reasoning
  - D: does not trust the result -> use verification mode, boundary challenge
Step 2: What subject area is this? Look up the subject-specific templates.
Step 3: Is this an academic argument context? Look up S1-S5.
Step 4: Combine 1-3 questions and make sure they progress logically.
```
