import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Menu from './Components/Menu'
import About from './Components/About'
import Header from './Components/Header'
import Services from './Components/Service'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Header />
      <Home />
      <Menu />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App


