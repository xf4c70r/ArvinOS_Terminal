const commands = {
    // Help 
    help: () => 
`
                              
        List of available commands              

  PROFILE
  ───────
  whoami                    who am i?
  about                     my background & interests
  contact                   get in touch

  EXPERIENCE
  ──────────
  ls experience/         list all experience
  cat experience/aseec.txt  ASEEC role
  cat experience/aiea.txt   AIEA role
  cat experience/ucds.txt   UCD role
  cat experience/elite.txt  Elite role

  PROJECTS
  ────────
  ls projects/              list all projects
  cat projects/gameboi.txt     GameBoi
  cat projects/stocksense.txt  StockSense
  cat projects/blockchain.txt  Blockchain

  SKILLS & EDUCATION
  ──────────────────
  cat skills.json           tech stack & skills
  cat education.txt         academic background

  PUBLICATIONS
  ────────────
  ls publications/                   list all publications
  cat publications/isqed2025.txt     ISQED 2025
  cat publications/mlcad2025.txt     MLCAD 2025

  LINKS
  ─────
  open github               github.com/xf4c70r
  open linkedin             linkedin profile
  open resume               résumé PDF

  UTILITY
  ───────
  ls                        list root contents
  ls /                      list all directories
  clear                     clear the terminal
  history                   command history
`,

    // Profile Info
    whoami: () =>
`Arvind Sudarshan
Software Engineer | MS Computer Science, UC Davis
2+ years of experience building full-stack AI-integrated applications.
`,

    about: () =>
`About Me
────────
I recently completed my Masters in Computer Science at UC Davis.
I'm a software engineer focused on building and shipping full-stack
AI-integrated applications with real-world impact.

At UC Davis's ASEEC lab (CHEST), I built and deployed a containerized
LLM inference service, LLM-based tools, and co-authored two peer-reviewed
papers on the use of LLMs for hardware design (ISQED 2025, MLCAD 2025).

Stack: Python, React, Flask, Django, SQL, MongoDB, Docker, AWS/GCP,
       PyTorch, RAG, LangChain, Streamlit
`,

    contact: () =>
`Contact
───────
Email:    arvindsudarshan18@gmail.com
Phone:    +1 (408) 888-4326
LinkedIn: https://www.linkedin.com/in/arvind2848b41b5/
GitHub:   https://github.com/xf4c70r
`,

    // Experience
    'ls experience/': () =>
`experience/
├── aseec.txt
├── aiea.txt
├── ucds.txt
└── elite.txt
`,

    'cat experience/aseec.txt': () =>
`Software Engineer — ASEEC Lab (CHEST), UC Davis
August 2024 – Present
────────────────────────────────────────────────
- Configured GitHub Actions CI/CD pipeline and pre-commit checks to
  standardize the lab's development workflow.
- Built and deployed a containerized LLM inference service using Docker
  to support researcher workflows.
- Developed automated pipelines that validated, processed and converted
  10,000 samples from GitHub, HuggingFace, and frontier AI models
  (OpenAI, Anthropic, DeepSeek) into structured datasets for training.
- Implemented LLM-based hardware test pattern generation, improving
  structured code generation by 15% and compilation success from 20%→60%.
- Co-authored two peer-reviewed publications on ML-driven hardware
  fuzzing (ISQED 2025) and benchmarking LLMs for RTL design (MLCAD 2025).
`,

    'cat experience/aiea.txt': () =>
`Software Developer — AIEA Lab, UC Santa Cruz
August 2024 – September 2025
──────────────────────────────────────────────
- Deployed and maintained a full-stack web app on AWS EC2, managing
  end-to-end delivery from development to production.
- Built using React, Flask, and MongoDB with RESTful APIs supporting
  a researcher-facing chat interface.
- Engineered RAG pipelines integrating OpenAI + Pinecone, processing
  50,000+ Q&A pairs using chunked vector embeddings.
- Validated pipeline performance with G-Eval and RAGAS, achieving a
  30% reduction in hallucination over baseline.
`,

    'cat experience/ucds.txt': () =>
`Full Stack Developer — Middle East/South Asia Studies, UC Davis
January 2025 – July 2025
────────────────────────────────────────────────────────────────
- Built a full-stack language learning platform using React.js, Django,
  and MongoDB, deployed on GCP, serving 50+ students in Hindi classes.
- Integrated OpenAI's LLM API to power AI-generated Q&A pairs,
  glossaries, and automated practice and evaluation for learners.
- Designed secure authentication with JWT tokens and RESTful APIs.
- Built an automated pipeline using YouTube Data API to generate and
  curate a Hindi Q&A dataset.
`,

    'cat experience/elite.txt': () =>
`Web Developer — Elite Softwares, Pune, India
September 2021 – November 2021
────────────────────────────────────────────
- Built a full-stack CRM web app using React, Flask, and PostgreSQL,
  replacing a manual Excel-based workflow for a delivery business.
- Designed database schema from scratch and built RESTful APIs with
  JWT authentication to manage customers, deliveries, and complaints.
- Optimized SQL queries reducing data retrieval times by 35%.
- Implemented automated test suites with PyTest achieving 70% coverage.
`,

    // Projects
    'ls projects/': () =>
`projects/
├── gameboi.txt
├── stocksense.txt
└── blockchain.txt
`,

    'cat projects/gameboi.txt': () =>
`GameBoi
───────
Stack:  Python, PyTorch, Diffusion Models, GPT-4, AI Agents
GitHub: github.com/xf4c70r/GameBoi

An AI-powered game generator that transforms user prompts into fully
functional 2D games using GPT, DALL-E, and PyGame.

Features:
  • Prompt Enhancement
    Enriches user input into a well-defined, detailed game concept.

  • Image Asset Generation
    Identifies, generates, and organizes game sprites into an /assets
    subfolder automatically.

  • PyGame Code Generation
    Generates initial PyGame code as a starting point for the game.

  • Error Resolution Loop
    Detects runtime errors, resolves them, and regenerates code —
    significantly reducing debugging time.
`,

    'cat projects/stocksense.txt': () =>
`StockSense
──────────
Stack:  Python, PyTorch, Streamlit, Ollama, LangChain, Llama3-8B, Mistral-7B
Model:  huggingface.co/ECS289L/Stocksense-Plus-All

Fine-tuned Llama3-8B as a local, privacy-preserving financial assistant
for analyzing historical stock data and predicting future trends.

Features:
  • Time Series + Sentiment Data Integration
    Combines structured market data with financial news text for
    context-aware, multi-modal forecasting.

  • Domain-Specific Fine-Tuning
    Trained on curated datasets with engineered financial indicators
    and tokenized sentiment features.

  • Benchmarked Results
    +19% trend prediction, +28% sentiment analysis vs Mistral-7B
    +10% trend prediction, +17% sentiment analysis vs base Llama3-8B

  • Fully Offline Local Deployment
    Runs entirely offline — full data privacy, real-time performance.
`,

    'cat projects/blockchain.txt': () =>
`Decentralized Voting System using Blockchain
─────────────────────────────────────────────
Stack: Solidity, React, Ganache, Web3.js, Truffle

A proof-of-concept electoral voting system backed by blockchain to ensure
transparency, immutability, and tamper-resistance.

Features:
  • Smart Contract Voting Logic
    Custom contracts handle voter registration, vote casting, and
    tallying — enforcing one-person-one-vote integrity.

  • Private Blockchain Network
    Configured nodes and genesis block from scratch for a trustless,
    distributed ledger.

  • Transparent Auditability
    All actions recorded on-chain with cryptographic verification —
    eliminating vote manipulation.

  • End-to-End Deployment
    Full stack built and tested from contract logic to network deploy.
`,

    // Skills
    'cat skills.json': () =>
`{
  "languages":   ["Python", "JavaScript", "TypeScript", "C++"],
  "web":         ["React", "HTML", "CSS", "Django", "Flask", "REST APIs", "OAuth 2.0", "JWT"],
  "databases":   ["PostgreSQL", "MongoDB", "MySQL"],
  "devops":      ["Docker", "GitHub Actions", "AWS", "GCP", "CI/CD", "Git", "Selenium"],
  "ai_ml":       ["PyTorch", "RAG", "Pinecone", "FAISS", "HuggingFace", "LangChain",
                  "Vector Similarity Search", "Transformers"]
}
`,

    // Education
    'cat education.txt': () =>
`Education
─────────
University of California, Davis
  M.S. Computer Science
  Graduated: March 2026 | GPA: 3.93 / 4.0

Savitribai Phule Pune University
  B.E. Computer Engineering
  Graduated: May 2023  | GPA: 3.90 / 4.0
`,

    // Publications
    'ls publications/': () =>
`publications/
├── isqed2025.txt
└── mlcad2025.txt
`,

    'cat publications/isqed2025.txt': () =>
`ISQED 2025
──────────
State of hardware fuzzing: Current methods and the potential of
machine learning and large language models

Authors: T. M. Kevin Immanuel Gubbi, S. Arvind, K. Inderpreet,
         K. D. Pavan, S. Avesta, and H. Houman.

Venue:   26th International Symposium on Quality Electronic Design (ISQED)
         IEEE, 2025

Paper:   https://ieeexplore.ieee.org/document/11014308
`,

    'cat publications/mlcad2025.txt': () =>
`MLCAD 2025
──────────
Prompting for Power: Benchmarking Large Language Models for
Low-Power RTL Design Generation

Authors: K. I. Gubbi, M. Halm, S. Kumar, A. Sudarshan, P. D. Kota,
         M. Tarighat, A. Sasan, and H. Homayoun.

Venue:   ACM/IEEE 7th Symposium on Machine Learning for CAD (MLCAD)
         Pages 1–7, 2025

Paper:   https://ieeexplore.ieee.org/abstract/document/11189130
`,

    // Utility
    'open github': () => {
        window.open("https://github.com/xf4c70r", "_blank");
        return "Opening GitHub profile...";
    },

    'open linkedin': () => {
        window.open("https://www.linkedin.com/in/arvind2848b41b5/", "_blank");
        return "Opening LinkedIn profile...";
    },

    'open resume': () => {
        window.open("", "_blank");
        return "Opening resume...";
    },

    ls: () =>
      `./
      ├── experience/
      ├── projects/
      ├── publications/
      ├── education.txt
      └── skills.json
      `,

    'ls /': () =>
      `/
      ├── experience/
      ├── projects/
      ├── publications/
      ├── education.txt
      └── skills.json
      `,

    neofetch: async () => {

      // OS: ArvinOS — updates every year
      const birthYear = 2001; 
      const age = new Date().getFullYear() - birthYear;

      // Uptime: time since page load
      const uptimeSeconds = Math.floor(performance.now() / 1000);
      const uptimeH = Math.floor(uptimeSeconds / 3600);
      const uptimeM = Math.floor((uptimeSeconds % 3600) / 60);
      const uptimeS = uptimeSeconds % 60;
      const uptime = `${uptimeH}h ${uptimeM}m ${uptimeS}s`;

      // Resolution
      const res = `${window.screen.width}x${window.screen.height}`;

      // Memory (Chrome/Edge only, graceful fallback)
      let memory = 'N/A';
      if (performance.memory) {
          const used = (performance.memory.usedJSHeapSize / 1073741824).toFixed(2);
          const total = (performance.memory.jsHeapSizeLimit / 1073741824).toFixed(2);
          memory = `${used} GiB / ${total} GiB`;
      }

      const art = `
      /^\\/^\\
    _|__|  O|
  \\/     /~  \\_
  \\____|__________/  \\
          \\_______      \\
                  \`\\     \\
                    |     |
                  /      /
                  /     /
                /      /
              /     /
            /     /
            /     /
          (      (
            \\      ~-____-~
              ~-___-~
  `;

      const info = [
          `arvind@portfolio`,
          `─────────────────────`,
          `OS:         ArvinOS ${age}.0 (Rolling Release)`,
          `Host:       San Francisco, CA`,
          `Kernel:     curiosity-${age}.04.1`,
          `Uptime:     ${uptime}`,
          `Packages:   python, flask, django, react, docker, aws, gcp, pyTorch, langchain,`,
          `Shell:      python3 3.12.0`,
          `Resolution: ${res}`,
          `Terminal:   xf4c70r-term`,
          `Memory:     ${memory}`,
      ];

      const artLines = art.split('\n');
      const maxArt = Math.max(...artLines.map(l => l.length));
      const combined = artLines.map((line, i) => {
          const padded = line.padEnd(maxArt);
          return i < info.length
              ? `${padded}   ${info[i]}`
              : padded;
      });

      return combined.join('\n');
  },
};

function runCommand(command){

    const cmd = command.trim().toLowerCase()

    if(commands[cmd]){
        return commands[cmd]()
    }
    return `Command not found: ${command}, ${commands.help()}`
}

export default runCommand