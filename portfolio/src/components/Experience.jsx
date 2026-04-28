function Experience(){
    const exp = [
        { title: 'Software Engineer', org: 'Center for Hardware and Embedded System Security and Trust (ASEEC Lab)', loc: 'Davis, CA', work: []},
        { title: 'Full Stack Developer', org: 'ME / SA Dept., UC Davis', loc:'Davis, CA', work: []},
        { title: 'Software Developer', org: '', work: []},
        { title: 'Full Stack Developer (Contract)', org: '', work: []}
    ]

    return(
        <div id='Exp'>

            <div>
                <h2>Software Engineer | Center for Hardware and Embedded System Security and Trust (ASEEC Lab), Davis, CA Aug 2024 – Present</h2>
                    <ul>
                        <li>Configured GitHub Actions CI/CD pipeline and pre-commit checks to standardize the lab’s development workflow.</li>
                        <li>Built and deployed a containerized LLM inference service using Docker to support researcher workflows</li>
                        <li>Developed automated pipelines that validated, processed and converted ∼10,000 samples from GitHub, HuggingFace, and
frontier AI models (OpenAI, Anthropic, DeepSeek) into structured datasets for model training</li>
                        <li>Implemented LLM based hardware test pattern generation, achieving 15% improvement in structured code generation and
compilation success rate from 20% to 60%.</li>
                        <li>Co-authored two peer-reviewed publications on ML-driven hardware fuzzing (ISQED 2025) and Benchmarking LLMs for
low-power RTL design (MLCAD 2025).</li>
                    </ul>
            </div>

            <div>
                <h2>Full Stack Developer | ME / SA Dept., UC Davis, Davis, CA Jan 2025 – Jun 2025</h2>
                <ul>
                    <li>Built a full-stack language learning platform using React.js, Django, and MongoDB, deployed on GCP and serving 50+
students in UC Davis Hindi classes.</li>
                    <li>Integrated OpenAI LLM API to power AI-generated question/answer pairs, glossaries, and automated practice and evaluation for
learners.</li>
                    <li>Designed and implemented secure JWT authentication and RESTful APIs; developed an automated pipeline using the
YouTube Data API to generate and curate a Hindi Q&A dataset</li>
                </ul>
            </div>

            <div>
                <h2>Software Developer | Artificial Intelligence Accountability & Explainability (AIEA) Lab, Santa Cruz, CA Aug 2024 – Sep 2025</h2>
                <ul>
                    <li>Deployed and maintained a full-stack web application on AWS EC2, managing end-to-end delivery from development to
production</li>
                    <li>Developed the application using React, Flask, and MongoDB, building RESTful APIs to support a researcher-facing chat
interface.</li>
                    <li>Engineered RAG pipelines integrating OpenAI + Pinecone, processing a document corpus with over 20,000 Q&A pairs using
chunked vector embeddings to ground LLM responses in verified sources.</li>
                    <li> Validated pipeline performance using G-Eval and RAGAS, achieving a 30% reduction in hallucination over baseline</li>
                </ul>
            </div>
            
            <div>
                <h2>Full Stack Developer | Elite Softwares, Pune, India Sep 2021 – Nov 2021</h2>
                <ul>
                    <li>Built a full-stack CRM web application using React, Flask, and PostgreSQL, replacing a manual Excel-based workflow for a
delivery business.</li>
                    <li>Designed the database schema from scratch and built RESTful APIs with JWT authentication to manage customers, deliveries,
drivers, and complaints.</li>
                    <li>Optimized SQL queries reducing data retrieval times by 35%; implemented automated test suites with PyTest achieving
70% test coverage.</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience