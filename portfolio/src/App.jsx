import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Contacts from './components/Contact'

function App() {
  return (
    <div className="bg-lime-50 text-stone-900">
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Publications/>
      <Contacts/>
    </div>
  )
}

export default App
