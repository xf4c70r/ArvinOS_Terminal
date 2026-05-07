const commands = {
    // Help 
    help: () => 
        `
        ╔══════════════════════════════════════════════════════╗
        ║                 AVAILABLE COMMANDS                   ║
        ║                  ─────────────────                   ║
        ║              List of available commands              ║
        ╚══════════════════════════════════════════════════════╝

        PROFILE
        ───────
        whoami                    who am i?
        about                     my background & interests
        contact                   get in touch

        EXPERIENCE
        ──────────
        ls experience/            list all experience
        cat experience/aseec.txt  ASEEC role
        cat experience/aiea.txt   AIEA role
        cat experience/ucds.txt   UCDS role
        cat experience/elite.txt  Elite role

        PROJECTS
        ────────
        ls projects/                  list all projects
        cat projects/gameboi.txt      GameBoi
        cat projects/stocksense.txt   StockSense
        cat projects/Blockchain.txt   Blockchain

        SKILLS & EDUCATION
        ──────────────────
        cat skills.json           tech stack & skills
        cat education.txt         academic background

        PUBLICATIONS
        ────────────
        ls publications/                    list all publications
        cat publications/isqed2025.txt      ISQED 2025
        cat publications/mlcad2025.txt      MLCAD 2025

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

        ─────────────────────────────────────────────────────
        Tip: Use Tab to autocomplete • Arrow keys for history
        `,

    // Profile Info
    whoami: () => "Hi! I'm Arvind Sudarshan, I'm a software engineer with over 2 years of experience and a focus on building and shipping full stack AI integrated applications.",
    
    about: () => `
        I recently completed my Masters in Computer Science at UC Davis. I'm a software engineer with a focus on building and shipping full stack AI integrated applications. I enjoy roles where I can build and ship full stack applications with real world impact.

        At UC Davis's ASEEC lab (CHEST), I built and deployed a containerized LLM inference service, LLM based tools, and co-authored two peer-reviewed papers on the use of LLMs for hardware design (ISQED 2025, MLCAD 2025).

        My Stack: Python, React, Flask, Django, SQL, MongoDB, Docker, AWS/GCP , PyTorch, RAG, LangChain, Streamlit
        `,
    
    contact: () => `
        You can reach me at:
        Email: arvindsudarshan18@gmail.com
        Phone: +1 (408) 888-4326
        LinkedIn: https://www.linkedin.com/in/arvind2848b41b5/
        GitHub: https://github.com/xf4c70r`,

    // Experience
    'ls experience/': () => " /experience/aseec.txt  /experience/aiea.txt  /experience/ucds.txt  /experience/elite.txt",

    'cat experience/aseec.txt': () => `

        Software Engineer | Center for Hardware and Embedded Systems Security and Trust (ASEEC Lab) | University of California, Davis
        August 2024 - Present

        • Configured GitHub Actions CI/CD pipeline and pre-commit checks to standardize the lab’s development workflow.
        • Built and deployed a containerized LLM inference service using Docker to support researcher workflows.
        • Developed automated pipelines that validated, processed and converted 10,000 samples from GitHub, HuggingFace, and frontier AI models (OpenAI, Anthropic, DeepSeek) into structured datasets for model training.
        • Implemented LLM based hardware test pattern generation, achieving improved structured code generation by 15% and compilation success rate from 20% to 60%.
        • Co-authored two peer reviewed publication on ML driven hardware fuzzing (ISQED 2025) and Benchmarking LLMs for low power RTL design (MLCAD 2025).
        `,
    
    'cat experience/aiea.txt': () => `

        Software Deveoper | Artificial Intelligence Explainability and Accountability (AIEA Lab) | University of California, Santa Cruz
        August 2024 - September 2025

        • Deployed and maintained a full stack web application on AWS EC2, managing end to end delivery from development to production.
        • Developed the application using React, Flask, and MongoDB, building RESTful APIs to support a researcher facing chat interface
        • Engineered RAG pipelines integrating OpenAI + Pinecone, processing a document corpus with over 50,000 Q&A using chunked vector embeddings to ground LLM responses in verified sources.
        • Validated pipeline performance using G-Eval and RAGAS, achieving a 30% reduction in hallucination over baseline.
        `,
    
    'cat experience/ucds.txt': () => `

        Full Stack Develeoper | Middle East/South Asia Studies | University of California, Davis
        January 2025 - July 2025

        • Built a full stack language learning platform using React.js, Django, and MongoDB, deployed on GCP and serving 50+ students in UC Davis Hindi classes.
        • Integrated OpenAI’s LLM API to power AI generated question/answer pairs, glossaries, and automated practice and evaluation for learners.
        • Designed and implemented secure authentication with JWT tokens and RESTful APIs, and developed an automated pipeline using the YouTube Data API to generate and curate a Hindi Q&A dataset.
        `,
    
    'cat experience/elite.txt': () => `
    
        Web Developer | Elite Softwares | Pune, Maharashtra, India
        September 2021 - November 2021
        
        • Built a full-stack CRM web application using React, Flask, and PostgreSQL, replacing a manual Excel based workflow for a delivery business
        • Designed the database schema from scratch and built RESTful APIs with JWT authentication to manage customers, deliveries, drivers, and complaints
        • Optimized SQL queries reducing data retrieval times by 35%, and implemented automated test suites with PyTest achieving 70% test coverage`,

    //Projects
    'ls projects/': () => " /projects/gameboi.txt  /projects/stocksense.txt  /projects/blockchain.txt",
    
    'cat projects/gameboi.txt': () => `

        GameBoi | github.com/xf4c70r/GameBoi | Python, PyTorch, Diffusion Models, GPT-4, AI Agents

        GameBoi is an AI-powered game generator that transforms user prompts into fully functional 2D games. By leveraging the capabilities of GPT, Dall-E, and PyGame, Gameboi automates the game development process, making it accessible to users with varying levels of programming experience.
    
        Gameboi leverages GPT, Dall-E and PyGame to create customized 2D games based on user input. It is designed to streamline the game development process by automating various stages, from generating game sprites and assets to writing PyGame code.

        Features:

        - Prompt Enhancement: 
            The Game Generator begins by enhancing the prompt entered by the user. This step ensures that the game concept is well-defined and rich in detail, setting a strong foundation for the game development.

        - Image Asset Generation and Organization: 
            One of the standout features is its ability to identify and generate the necessary image assets for the game. These assets are automatically downloaded and organized into an 'asset' subfolder within the main game folder, ensuring easy access and management.

        - Pygame Code Generation: 
            The tool generates the initial Pygame code required to bring the game to life. This code serves as a starting point for further development and customization.

        - Error Resolution Loop: 
            In the event of any errors during gameplay, the Game Generator enters a loop where it identifies the issues, solves them, and regenerates the necessary code. This feature significantly reduces debugging time and enhances the overall development process.`,

    'cat projects/stocksense.txt': () => `

        StockSense | huggingface.co/ECS289L/Stocksense-Plus-All | Python, PyTorch, Streamlit, Ollama, LangChain, Llama3-8B, Mistral-7B 

        Fine-tuned Llama3-8B to create a local, privacy-preserving financial assistant capable of analyzing historical stock market data and predicting future trends. This project integrates both numerical time series data and textual sentiment data to provide robust trend forecasting and financial insight generation.

        Features:

        - Time Series and Sentiment Data Integration:
            The tool combines structured market data (e.g., prices, volumes, technical indicators) with unstructured financial news text. This dual-input pipeline enables the model to learn context-aware forecasting behaviors grounded in both quantitative and qualitative signals.

        - Domain-Specific Fine-Tuning:
            A Llama3-8B model was fine-tuned using supervised learning on curated datasets, incorporating engineered financial indicators and tokenized sentiment features. The training pipeline was optimized to support multi-modal token alignment and trend classification.

        - Evaluation Against Baselines:
            The fine-tuned model was benchmarked against both Mistral-7B and the untuned Llama3-8B. Results showed a 19% improvement in trend prediction and 28% improvement in sentiment analysis over Mistral-7B, and 10% and 17% improvements respectively over the base Llama3-8B.

        - Fully Offline Local Deployment:
            The final model is designed to run entirely offline, using optimized inference scripts, ensuring full data privacy while maintaining real-time usability for financial researchers or retail investors.
    `,
    
    'cat projects/blockchain.txt': () => `


        Decentralized and Secure voting System using Blockchain | Solidity, React, Ganache, Web3.js, Truffle
    
         Developed a proof-of-concept electoral voting system backed by blockchain technology to ensure transparency, immutability, and tamper-resistance in digital voting processes.

        Features:

            - Smart Contract-Based Voting Logic:
                Implemented custom blockchain smart contracts to securely handle voter registration, vote casting, and tallying. These contracts enforced voting rules and guaranteed one-person-one-vote integrity without relying on centralized infrastructure.

            - Blockchain Network Setup:
                Configured a private blockchain network from scratch, including the creation of nodes and the genesis block. This setup formed the core of the system’s distributed ledger and established trustless consensus across participants.

            - Secure and Transparent Auditability:
                All voting actions were recorded on-chain, enabling verifiable audit trails and eliminating the possibility of vote manipulation. The system ensured data integrity through cryptographic verification and decentralized validation.

            - End-to-End Deployment:
                Built and tested the entire stack—from writing the contract logic to deploying and interacting with the blockchain network—demonstrating the technical feasibility of blockchain-based electoral systems.
    `,
    
    //Skills
    'cat skills.json': () => `
        {
            Languages: Python, JavaScript, TypeScript, C++
            Web: React, HTML, CSS, Django, Flask, REST APIs, OAuth 2.0, JWT
            Databases: PostgreSQL, MongoDB, MySQL
            DevOps & Tools: Docker, GitHub Actions, AWS, GCP, CI/CD, Git, Selenium
            AI/ML: PyTorch, RAG, Pinecone, FAISS, HuggingFace Transformers, Vector Similarity Search, LangChain
        }
    `,

    // Education
    'cat education.txt': () => `
        University of California, Davis
        Masters of Science in Computer Science
        Graduated: March 2026
        GPA: 3.93/4.0

        Savitribai Phule Pune University
        Bachelor of Engineering in Computer Engineering
        Graduated: May 2023
        GPA: 3.90/4.0
    `,

    // Publications
    'ls publications/': () => " /publications/isqed2025.txt  /publications/mlcad2025.txt",
    'cat publications/isqed2025.txt': () => `

        State of hardware fuzzing: Current methods and the potential of machine learning and large language models
        T. M. Kevin Immanuel Gubbi, S. Arvind, K. Inderpreet, K. D. Pavan, S. Avesta, and H. Houman. In Proceedings of the 26th International
        Symposium on Quality Electronic Design (ISQED). IEEE, 2025.

        Paper: https://ieeexplore.ieee.org/document/11014308
    
    `,
    
        'cat publications/mlcad2025.txt': () => `
    
        Prompting for Power: Benchmarking Large Language Models for Low-Power RTL Design Generation
        K. I. Gubbi, M. Halm, S. Kumar, A. Sudarshan, P. D. Kota, M. Tarighat, A. Sasan, and H. Homayoun. In 2025 ACM/IEEE 7th Symposium on Machine
        Learning for CAD (MLCAD), pages 1–7, 2025.

        Paper: https://ieeexplore.ieee.org/abstract/document/11189130
    `,

    // Utility
    'open github': () => {
        window.open("https://github.com/xf4c70r", "_blank")
        return "Opening GitHub profile..."
    },
    
    'open linkedin': () => {
        window.open("https://www.linkedin.com/in/arvind2848b41b5/", "_blank")
        return "Opening LinkedIn profile..."
    },
    
    'open resume': () => {
        window.open("", "_blank")
        return "Opening resume..."
    },
    
    ls: () => " /experience/  /projects/  /publications/  education.txt  skills.json",
    
    'ls /': () => " /experience/  /projects/  /publications/  education.txt  skills.json",

};

function runCommand(command){

    const cmd = command.trim().toLowerCase()

    if(commands[cmd]){
        return commands[cmd]()
    }
    return `Command not found: ${command}, ${commands.help()}`
}

export default runCommand