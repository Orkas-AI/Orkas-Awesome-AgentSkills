# Physics Question Patterns

Use this reference when the user's smallest learning unit is a physics concept, problem, lab explanation, or error diagnosis. Keep the Socratic three-segment contract from `SKILL.md`: ask first, hint second, give the learner one next action.

Do not use this reference to create full study plans, long-term progress tracking, engineering certification, research audit, or numerical-solver implementation plans.

## First classification

Classify the physics request into one of these modes:

| Mode | User signal | Tutoring move |
|---|---|---|
| Concept understanding | "I do not understand induction / entropy / wave function..." | Build intuition first, then connect the formula meaning, then ask a small check question |
| Problem guidance | User gives a problem and wants hints | Ask for the model, diagram, knowns, target, and candidate principle |
| Error diagnosis | User gives their work or answer | Find the first physics or algebra step where the model diverges |
| Experiment explanation | User asks why an experiment behaves a certain way | Identify measured quantity, controlled variables, uncertainty, and physical mechanism |

## General physics heuristics

Before giving a hint, try to make the learner do one of these:

- Draw or describe the diagram: free-body diagram, field direction, ray diagram, circuit diagram, process graph, or energy-level diagram.
- List variables with units: known quantities, unknown target, constants, and sign conventions.
- Check dimensions: does the expression have the unit of velocity, force, energy, charge, etc.?
- Identify conservation laws: energy, momentum, angular momentum, charge, mass flow, or probability normalization.
- Check limiting cases: zero friction, very large mass, small angle, high/low frequency, long-time equilibrium, or extreme resistance.
- Split the process: before/after collision, approach/leave, compression/release, charge/discharge, initial/final state, measurement/interpretation.
- Choose a representation: equation, graph, diagram, table, or verbal mechanism.

## Mechanics

Typical guiding questions:

- "Have you drawn the free-body diagram? Which force direction are you least sure about?"
- "Is this asking for acceleration, velocity, displacement, force, work, or energy?"
- "Which coordinate direction did you choose, and what sign convention follows from it?"
- "Is there an impulse/collision stage and a motion stage that should be separated?"
- "Would energy conservation or Newton's second law be the cleaner first model here? Why?"
- "For rotation, what is the axis, and what torque is causing angular acceleration?"

Safe hints:

- "Start by isolating the object and drawing all external forces."
- "Check whether the quantity you need is easier from force/time or energy/position."
- "For circular motion, ask what supplies the centripetal acceleration; do not invent an extra centripetal force."

Next actions:

- "Draw the free-body diagram and label the force directions."
- "Write the known variables with units."
- "State which conservation law, if any, you think applies."

## Electromagnetism and circuits

Typical guiding questions:

- "For Lenz's law, which flux is changing, and in what direction is the induced field trying to oppose that change?"
- "What is the direction of the electric field or magnetic field at the point you care about?"
- "Is this a series/parallel circuit simplification problem, or a transient charging/discharging problem?"
- "Which quantity is continuous across this boundary: voltage, current, field component, or flux?"
- "If the source were removed, what would the capacitor or inductor try to keep unchanged?"

Safe hints:

- "For induction, do not start with current direction. Start with magnetic flux change."
- "For circuits, simplify topology before substituting numbers."
- "For fields, use symmetry before doing algebra."

Next actions:

- "Mark the direction of changing flux, then predict the induced field direction."
- "Redraw the circuit with equivalent series/parallel parts."
- "Write which law you plan to use: Ohm, Kirchhoff, Faraday, Gauss, or Ampere."

## Thermodynamics and fluids

Typical guiding questions:

- "What is the system boundary, and what crosses it: heat, work, mass, or none?"
- "Is this an isothermal, adiabatic, isobaric, or isochoric process?"
- "Which state variables are known initially and finally?"
- "Are you using gauge pressure or absolute pressure?"
- "If the fluid is incompressible, what continuity relationship follows?"

Safe hints:

- "Start with the first law as a bookkeeping statement, then decide the signs of heat and work."
- "For fluids, draw the two cross-sections and label pressure, height, speed, and area."
- "For entropy, separate 'heat transfer over temperature' from everyday disorder language."

Next actions:

- "Define the system and write the sign convention for heat and work."
- "List initial and final state variables."
- "Draw the two fluid points before writing Bernoulli or continuity."

## Waves, optics, and quantum

Typical guiding questions:

- "Is the wave behavior controlled by boundary conditions, superposition, or a medium change?"
- "For interference, what is the path difference and how does it relate to wavelength?"
- "For lenses or mirrors, which sign convention are you using?"
- "Have you written the normalization condition for the wave function?"
- "Is the question asking for probability, expectation value, energy level, or qualitative interpretation?"

Safe hints:

- "For optics, draw the principal rays before using the equation."
- "For standing waves, identify the nodes and antinodes from the boundary conditions."
- "For quantum problems, ask whether the wave function is normalized before interpreting probabilities."

Next actions:

- "Draw the ray or wave diagram."
- "Mark nodes/antinodes or path difference."
- "Write the normalization or boundary condition before calculating."

## Error diagnosis checklist

When checking a learner's physics solution, locate the first meaningful issue:

- Wrong physical model: used energy when nonconservative work matters, or used constant acceleration when acceleration varies.
- Missing force or interaction: forgot tension, normal force, drag, buoyancy, induced emf, or constraint.
- Sign convention drift: mixed coordinate directions, current directions, pressure reference, or heat/work signs.
- Unit/dimension mismatch: expression cannot have the target unit.
- Formula copied outside its conditions: small-angle approximation, ideal gas, point charge, thin lens, frictionless surface, steady flow, etc.
- Algebra correct but interpretation wrong: final value has impossible sign, magnitude, or limiting behavior.

Always ask the learner to repair the first key issue before reviewing later steps.

## Examples of compliant guidance

Free fall from height `h`, no air resistance:

- Ask: "Which quantity is conserved if no air resistance does work?"
- Hint: "Compare initial gravitational potential energy with final kinetic energy; do not solve the algebra yet."
- Next action: "Write the energy relationship with `m`, `g`, `h`, and `v`, then check whether the final unit is velocity."

Lenz's law:

- Ask: "When the magnet approaches the coil, is the magnetic flux through the coil increasing or decreasing?"
- Hint: "The induced current creates a magnetic field that opposes the change in flux, not necessarily the original field itself."
- Next action: "State the direction of the changing flux first; then predict the induced field direction."
