function Projects(){

    const projects = [
        {
            title: 'GameBoi', 
            link: 'https://github.com/xf4c70r/GameBoi',
            hook: 'Gameboi leverages GPT, Dall-E and PyGame to create customized 2D games based on user input. It is designed to streamline the game development process by automating various stages, from generating game sprites and assets to writing PyGame code.', 
            description: [
            'Prompt Enhancement: The Game Generator begins by enhancing the prompt entered by the user. This step ensures that the game concept is well-defined and rich in detail, setting a strong foundation for the game development.', 
            
            'Image Asset Generation and Organization: One of the standout features is its ability to identify and generate the necessary image assets for the game. These assets are automatically downloaded and organized into an "asset" subfolder within the main game folder, ensuring easy access and management.', 
            
            'Pygame Code Generation: The tool generates the initial Pygame code required to bring the game to life. This code serves as a starting point for further development and customization.', 
            
            'Error Resolution Loop: In the event of any errors during gameplay, the Game Generator enters a loop where it identifies the issues, solves them, and regenerates the necessary code. This feature significantly reduces debugging time and enhances the overall development process.Gameboi leverages GPT, Dall-E and PyGame to create customized 2D games based on user input. It is designed to streamline the game development process by automating various stages, from generating game sprites and assets to writing PyGame code.'
            ],
            demo_url: '',
            stack: [
                'Python', 'PyTorch', 'Diffusion Models', 'GPT-4', 'AI Agents'
            ]
        },

        {
            title: 'StockSense', 
            link: 'https://huggingface.co/ECS289L/Stocksense-Plus-All',
            hook: 'Fine-tuned Llama3-8B to create a local, privacy-preserving financial assistant capable of analyzing historical stock market data and predicting future trends. This project integrates both numerical time series data and textual sentiment data to provide robust trend forecasting and financial insight generation.',
            description: [
                'Time Series and Sentiment Data Integration: The tool combines structured market data (e.g., prices, volumes, technical indicators) with unstructured financial news text. This dual-input pipeline enables the model to learn context-aware forecasting behaviors grounded in both quantitative and qualitative signals.',
                'Domain-Specific Fine-Tuning: A Llama3-8B model was fine-tuned using supervised learning on curated datasets, incorporating engineered financial indicators and tokenized sentiment features. The training pipeline was optimized to support multi-modal token alignment and trend classification.',
                'Evaluation Against Baselines: The fine-tuned model was benchmarked against both Mistral-7B and the untuned Llama3-8B. Results showed a 19% improvement in trend prediction and 28% improvement in sentiment analysis over Mistral-7B, and 10% and 17% improvements respectively over the base Llama3-8B.',
                'Fully Offline Local Deployment: The final model is designed to run entirely offline, using optimized inference scripts, ensuring full data privacy while maintaining real-time usability for financial researchers or retail investors.'
            ],
            demo_url: '',
            stack: [
                'Python', 'PyTorch', 'Streamlit', 'Ollama', 'LangChain', 'Llama3-8B', 'Mistral-7B'
            ]
        }
    ]

    return(
        <div className=" gap-20 justify-center items-center py-24 px-16 space-y-4" id='Projects'>
            <h2 className="text-3xl text-center font-bold text-stone-900 mb-6">Projects</h2>
            <div className="gap-4 flex">
                {projects.map((project) => (
                    <div key={project.title} className='bg-lime-100 rounded-xl p-6 mb-6'>
                        <h3 className='text-xl font-bold text-stone-900'>{project.title}</h3>
                        <p className='text-stone-500 mb-2'>{project.hook}</p>
                        <ul className='list-disc list-inside'>
                            {project.description.map((point, index) => (
                                <li key={index} className='text-stone-500'>{point}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="bg-stone-200 text-stone-700 px-3 py-1 rounded-full text-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default Projects