import {gsap} from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Footer from './components/Footer'
gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  
  return (
    <main>
      <Header />
      <Hero prop={'mojito'}/>
      <About prop={'about'}/>
      <Menu prop={'mocktails'}/>
      <Footer prop={'store'}/>
    </main>
  )
}

export default App
