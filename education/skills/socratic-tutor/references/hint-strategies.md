# Hint Strategies (Hints, Not Answers)

> Reference for generating segment 2, "Hint (not the answer)".
> Core constraint: give clues, not conclusions.

---

## Six compliant hint shapes

### 1. Name the tool, do not expand the derivation

```text
Good: "This needs the Lagrange mean value theorem."
Bad: "By the Lagrange mean value theorem, f(b) - f(a) = f'(xi)(b - a)." (expanded)
```

### 2. Give an analogy, not the mapping

```text
Good: "This state transition is similar to the climbing-stairs problem, where each move can span 1 or 2 steps."
Bad: "So dp[i] = dp[i-1] + dp[i-2]." (direct mapping = answer)
```

### 3. Give a range, not a specific value

```text
Good: "A zero of this fraction lies inside [0, pi]."
Bad: "It is at x = pi/2."
```

### 4. Give direction, not steps

```text
Good: "Try dividing numerator and denominator by x^2 and see whether (x - 1/x) appears."
Bad: "Let u = x - 1/x, du = (1 + 1/x^2)dx, so the integral becomes integral du / (u^2 + 2)."
```

Common drift: writing a hint like "if u = X, what is the relationship between du = Y and the numerator?" looks like a question, but du has already been computed. The correct move is to let the user compute du.

### 5. Give a contrast point so the learner transfers the idea

```text
Good: "Structurally, this is similar to the integration-by-parts problem you did earlier; the difference is the extra trigonometric factor."
Bad: "So use the integration-by-parts formula integral u dv = uv - integral v du."
```

### 6. Give why, not exactly how

```text
Good: "Why consider a substitution here? Because we want to connect the denominator x^4+1 with the numerator x^2+1."
Bad: "After substituting u = x - 1/x..."
```

---

## Hint density control

| Learner level | Hints per turn | Hint precision |
|---|---|---|
| beginner | 3 hints, with more analogies | direction + analogy + one contrast point |
| intermediate (default) | 2-3 hints | method name + direction |
| advanced | 1-2 hints, focused on the key turn | method name + why |

---

## Hint strategies for academic argument contexts

### Topic selection stage

Good: give an evaluation frame.

- "Topic triangle: real problem, method novelty, and sufficient resources."
- "Reverse design: first imagine what experimental figure or table you could produce."

Bad: give a concrete topic.

- "You should work on 'CLIP-based few-shot image classification'."

### Literature review stage

Good: give organization dimensions.

- "You can organize by method evolution timeline, by problem difficulty, or by dataset/evaluation setup."

Bad: give a paragraph outline.

- "The first paragraph writes the background, the second paragraph writes method 1..." (ghostwriting)

### Argument stage

Good: give diagnostic entry points.

- "Where is the topic sentence?"
- "Where is the counterargument?"
- "Where is the logical leap?"

Bad: give the rewritten sentence.

- "You can rewrite it as '...'"

---

## Hint self-check checklist

After writing each hint, check:

- [ ] Does the learner still need to think one step before using this hint?
- [ ] Does the hint give a new angle rather than a disguised answer?
- [ ] If the learner follows this hint, must the final closure still be done by the learner?
- [ ] Does the hint avoid complete formulas, complete proofs, and complete paragraphs?

Only keep the hint if all four are yes. If any answer is no, rewrite it.

---

## Anti-patterns

- Giving a complete formula, proof, or paragraph inside the hint.
- Giving the final value or conclusion inside the hint.
- Hiding the answer inside the third hint.
- Giving hints that are unrelated to the user's actual problem.
- Repeating the same idea in three different hints.

---

## Extreme case: the user repeatedly demands the answer

After N repetitions (default N=5), simplify the guidance but do not remove it.
Compress three hints into the single most important hint, while still requiring the user to do the final step.

```text
Template:
"I understand you are in a hurry. Let's compress this to the shortest useful version: the entry point is {name only the method or observation direction; do not give the key intermediate expression}.
Your single move: write the first transformation that comes to mind and send it back."
```
