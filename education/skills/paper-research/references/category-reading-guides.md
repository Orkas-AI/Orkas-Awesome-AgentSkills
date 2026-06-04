# Category Reading Guides

Use the closest category. If a paper spans categories, pick the category that best matches the paper's main contribution.

## agent_systems

Covers AI agent systems, tool use, planning, memory, multi-agent coordination, agent evaluation, embodied/navigation agents, browser/search/deep-research agents, and MCP/skill-like interfaces.

Record:

- Agent architecture, modules, roles, inputs, outputs, and coordination.
- Tool selection and tool interface design.
- Memory and state management.
- Multi-agent communication, if present.
- Benchmarks, metrics, success criteria, and failure modes.
- Differences from existing agent frameworks.
- Limitations such as token cost, latency, prompt dependence, narrow scenarios, and brittle planning.

## benchmark

Covers new datasets, tasks, evaluation environments, and benchmark frameworks.

Record:

- Domain and capability being measured.
- Dataset/task scale, environment, and one concrete example.
- Similar benchmarks and how this one differs.
- Metrics, baselines, model/agent results, and failure analysis.
- Whether the paper also proposes a method, and what is new about it.

## inference_accelerate

Covers inference efficiency, model compression, KV cache optimization, speculative decoding, batching, serving, kernels, hardware-aware methods, and deployment acceleration.

Record:

- Target model/task and core bottleneck: memory-bound, compute-bound, or communication-bound.
- Technical mechanism: quantization, pruning, distillation, parallel decoding, kernel fusion, KV cache, scheduler, hardware co-design, or similar.
- Baselines and key differences.
- Latency, throughput, memory, speedup, and hardware setup.
- Accuracy-speed tradeoff and deployment cost.

## llm_training

Covers pretraining, fine-tuning, instruction tuning, RLHF/DPO/PPO, alignment, data engineering, scaling, LoRA/adapters, safety alignment, and long-context training.

Record:

- Training paradigm and method.
- Loss functions, optimization details, update strategy, and hyperparameters when available.
- Data sources, scale, filtering, mixing, and sampling.
- Benchmarks, SOTA comparisons, and ablations.
- Innovation, limitations, and reproducibility constraints.

## multimodal

Covers VLMs, MLLMs, image/video/audio-language models, multimodal generation, grounding, retrieval, and multimodal agents.

Record:

- Modalities and alignment method.
- Visual/audio/text encoders, language model, connector, and fusion design.
- Training stages and data.
- Generation quality or perception/reasoning benchmark results.
- Grounding, retrieval, or agent behavior when relevant.
- Efficiency, model size, and deployment notes.

## rag_and_retrieval

Covers retrieval-augmented generation, information retrieval, embedding models, vector search, document parsing/chunking, reranking, query rewriting, hybrid retrieval, and long-document processing.

Record:

- Retrieval architecture and end-to-end RAG flow.
- Retriever/generator roles and interaction.
- Indexing, parsing, chunking, and knowledge source handling.
- Query rewriting, routing, iterative retrieval, or reranking.
- Metrics such as relevance, faithfulness, answer quality, latency, and index size.
- Reusable engineering lessons and limitations.

## technique_report

Covers long model or agent technical reports from labs or companies.

Record:

- Model/version, release context, parameter scale, and positioning.
- Architecture and key changes.
- Pretraining, mid-training, SFT, post-training, RLHF/DPO, and safety alignment pipeline.
- Data scale, quality control, filtering, and mixing strategy.
- Evaluation suite, main results, ablations, and limitations.
- Engineering lessons and reproducibility constraints.

## general

Use when the paper does not clearly fit the categories above.

Record:

- One-sentence summary.
- Research problem.
- Core method.
- Main result.
- Potential value.
- Most useful follow-up reading direction.
