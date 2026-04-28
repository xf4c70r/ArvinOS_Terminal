import Pic from '../assets/Hero.jpg'

function Hero(){
    return(
        <div className='flex gap-20 justify-center items-center py-24 px-16' id='Hero'>
            <div className='justify-center'>
                <h1 className='text-4xl font-bold text-stone-900'>Hi! I'm Arvind Sudarshan</h1>
                <p>
                    I'm a software engineer building and shipping full stack AI integrated applications.
                </p>
                <div className='mt-4 space-x-4'>
                     <button className='bg-lime-700 text-white px-6 py-2 rounded-full'><a href='#Contact'>Lets connect!</a></button>
                    <button className='bg-lime-700 text-white px-6 py-2 rounded-full'><a href='#Projects'>Projects</a></button>
                    <button className="bg-lime-700 text-white px-6 py-2 rounded-full inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                        <span><a href='#'>Resume</a></span>
                    </button>
                </div>
            </div>
            <div>
                <img className='w-64 h-64 rounded-full' src={Pic} alt='Arvind Sudarshan'></img>
            </div>
        </div>
    )
}

export default Hero