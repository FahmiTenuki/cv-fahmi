import { useState } from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'


const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Profile />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default App
