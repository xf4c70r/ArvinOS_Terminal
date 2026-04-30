function Experience(){
    const exp = [
        { 
            title: 'Software Engineer', 
            org: 'Center for Hardware and Embedded System Security and Trust (ASEEC Lab)', 
            loc: 'Davis, CA', 
            time : 'Aug 2024 - Present',
            work: [
            'Configured GitHub Actions CI/CD pipeline and pre-commit checks to standardize the lab’s development workflow.',
            'Built and deployed a containerized LLM inference service using Docker to support researcher workflows',
            'Developed automated pipelines that validated, processed and converted ∼10,000 samples from GitHub, HuggingFace, and frontier AI models (OpenAI, Anthropic, DeepSeek) into structured datasets for model training',
            'Implemented LLM based hardware test pattern generation, achieving 15% improvement in structured code generation and compilation success rate from 20% to 60%.',
            'Co-authored two peer-reviewed publications on ML-driven hardware fuzzing (ISQED 2025) and Benchmarking LLMs for low-power RTL design (MLCAD 2025).'
            ]
        },

        { 
            title: 'IT Support Specialist', 
            org: 'OLLI, University of California, Davis', 
            loc:'Davis, CA', 
            time : 'Jan 2024 - May 2026',
            work: [
            'Provided technical support to 20+ instructors and assisted in 50+ in-person, hybrid, and virtual sessions maintaining 95% session uptime.', 'Set up, configured, and maintained software and tools across macOS and Windows environments.',
            'Monitored and resolved live technical issues in real time; conducted pre/post-session inventory, equipment checks, network diagnostics, and software updates, reducing startup delays by 30%.'
            ]
        },

        { 
            title: 'Teaching Assistant', 
            org: 'Department of Computer Science, University of California, Davis', 
            loc:'Davis, CA', 
            time : 'Jan 2025 - Jun 2025',
            work: [
            'Served as a teaching assistant for ECS 032C and ECS 132.',
            'Set up and maintained Canvas and Gradescope autograder pipelines, evaluating assignments/exams for 180+ students.',
            'Provided one on one debugging, technical troubleshooting, software configuration, and programming support during biweekly Coding Nights and weekly office hours.',
            'Led weekly discussion sessions on data structures, probability and statistics concepts.',
            'Debugged and resolved issues with R programming and C programming, and data analysis assignments'
            ]
        },
        
        { 
            title: 'Software Developer', 
            org: 'AIEA Lab', 
            loc: 'Santa Cruz, CA', 
            time : 'Aug 2024 - Sept 2025',
            work: [
            'Deployed and maintained a full-stack web application on AWS EC2, managing end-to-end delivery from development to production',
            'Developed the application using React, Flask, and MongoDB, building RESTful APIs to support a researcher-facing chat interface.',
            'Engineered RAG pipelines integrating OpenAI + Pinecone, processing a document corpus with over 20,000 Q&A pairs using chunked vector embeddings to ground LLM responses in verified sources.',
            ' Validated pipeline performance using G-Eval and RAGAS, achieving a 30% reduction in hallucination over baseline'
            ]
        },

        { 
            title: 'Full Stack Developer', 
            org: 'ME / SA, University of California, Davis', 
            loc:'Davis, CA', 
            time : 'Jan 2025 - Jun 2025',
            work: [
            'Built a full-stack language learning platform using React.js, Django, and MongoDB, deployed on GCP and serving 50+ students in UC Davis Hindi classes.',
            'Integrated OpenAI LLM API to power AI-generated question/answer pairs, glossaries, and automated practice and evaluation for learners.',
            'Designed and implemented secure JWT authentication and RESTful APIs; developed an automated pipeline using the YouTube Data API to generate and curate a Hindi Q&A dataset'
            ]
        },
        
        { 
            title: 'Full Stack Developer (Contract)', 
            org: 'Elite Softwares', 
            loc: 'Pune, India', 
            time : 'Sept 2021 - Nov 2021',
            work: [
            'Built a full-stack CRM web application using React, Flask, and PostgreSQL, replacing a manual Excel-based workflow for a delivery business.',
            'Designed the database schema from scratch and built RESTful APIs with JWT authentication to manage customers, deliveries, drivers, and complaints.',
            'Optimized SQL queries reducing data retrieval times by 35%; implemented automated test suites with PyTest achieving 70% test coverage.'
            ]
        }
    ]

    return(
        <div id='Exp'>
            <h2 className="text-3xl text-center font-bold text-stone-900 mb-2">Experience</h2>
            <div className="gap-20 max-w-4xl mx-auto justify-center items-center py-24 space-y-4">
                {exp.map((e) => (
                    <div className='mb-8' key={e.title}>
                        <h3 className='text-xl font-bold text-stone-900'>{e.title} | {e.org}, {e.loc}</h3>
                        <p className='text-sm text-stone-500'>{e.time}</p>
                        <ul className='list-disc list-inside mt-2'>
                            {e.work.map((w) => (
                                <li className='text-stone-500 mb-1' key={w}>{w}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience