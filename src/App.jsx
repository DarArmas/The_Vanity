import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <>
      <NavBar/>
      <div className="App">
        <h1><img src="src\assets\logo 2.png"/></h1>
      </div>
      <LandingPage/>
    </>
    
    
  )
}

export default App
