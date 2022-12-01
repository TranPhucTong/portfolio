import React from 'react'
import About from './components/About/About'
import Carrer from './components/Carrer/Carrer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/home/Home'
import Languages from './components/Language/Languages'
import Navigation from './components/Navigation/Navigation'
import Process from './components/Process/Process'
import Progress from './components/Progress/Progress'
import Projects from './components/Projects/Projects'
import Summery from './components/Summery/Summery'
import Theme from './components/Theme/Theme'

export const App = () => {
  return (
    <>
      <Theme/>
      <Progress/>
      <div className="container">
        <Navigation/>
        <Home/>
        <Summery/>
        <Languages/>
        <Process/>
        <Projects/>
        <Carrer/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
