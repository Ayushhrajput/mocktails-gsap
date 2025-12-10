import {gsap} from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Header from './components/Header'
import Hero from './components/Hero'
import Mocktails from './components/Mocktails'
import About from './components/About'
import Menu from './components/Menu'
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  
  

  return (
    <main>
      <Header />
      <Hero />
      <Mocktails />
      <About />
      <Menu />
    </main>
  )
}

export default App
