import {gsap} from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Header from './components/Header'
import Hero from './components/Hero'
import Mocktails from './components/Mocktails'
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  
  

  return (
    <main>
      <Header />
      <Hero />
      <Mocktails />
    </main>
  )
}

export default App
