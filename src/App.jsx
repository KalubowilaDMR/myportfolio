import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Technology from './components/Technology'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <HeroSection/>
      <About/>
      <Technology/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
