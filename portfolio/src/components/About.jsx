function About(){

    const skills = [
        {label: 'Languages', items:['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'R']},
        {label: 'Web', items:['React', 'HTML', 'CSS', 'Django', 'Flask', 'Steramlit', 'REST APIs', 'OAuth 2.0', 'JWT']},
        {label: 'Databases', items:['PostgreSQL', 'MongoDB', 'MySQL']},
        {label: 'DevOps & Tools', items:['Docker', 'GitHub Actions', 'AWS', 'GCP', 'CI/CD', 'Git', 'Selenium']},
        {label: 'AI/ML: ', items:['PyTorch', 'Pinecone', 'FAISS', 'HuggingFace', 'LangChain']},
    ]


    return(
        <div className='gap-20 justify-center items-center py-24 px-16 space-y-4' id='About'>
            <h2 className="text-3xl text-center font-bold text-stone-900 mb-6">About Me</h2>
            <p className="text-stone-500">
                I recently completed my Masters in Computer Science at UC Davis. I'm a software engineer with a focus on building and shipping full stack AI integrated applications.
            </p>
            <p className="text-stone-500 mb-2">Current Work:</p>
            <ul className="list-disc list-inside">
                <li>At UC Davis's ASEEC lab (CHEST), I built and deployed a containerized LLM inference service, LLM based tools, and co-authored two peer-reviewed papers on the use of LLMs for hardware design (ISQED 2025, MLCAD 2025).</li>
            </ul>
            <p className="text-stone-500 mb-2 mt-2">Previously:</p>
            <ul className="list-disc list-inside">
                <li>At the AIEA Lab, I shipped a full-stack RAG (OpenAI + Pinecone) based chat application (React + Flask + MongoDB) that reduced LLM hallucinations by 30%</li>
                <li>Built a Hindi learning platform for UC Davis serving 50+ students using React, Django, MongoDB, OpenAI APIs and YouTube Data API</li>
                <li>Built a full-stack CRM (Flask + React + PostgreSQL) at Elite Softwares with optimized queries reducing data retrieval time by 35%</li>
            </ul>
            <p className="text-stone-500 mt-2">
                I enjoy roles where I can build and ship full-stack applications with real world impact.
            </p>
            <p>
              My Stack:   
            </p>
            <div className="gap-4 flex">
                {skills.map((skill) => (
                    <div className="bg-lime-100 rounded-xl p-6" key={skill.label}>
                        <h3 className="text-lg font-bold text-stone-900 mb-3">{skill.label}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span className="bg-lime-200 text-lime-800 px-3 py-1 rounded-full text-sm" key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About