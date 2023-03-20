import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { LandingPage } from './pages/LandingPage'

function App() {

  return (
    <>
    <div>
      <NavBar/>
      <div className="App">
        <h1><img src="assets/img/logo_2.png"/></h1>
      </div>
      <LandingPage/>
    </div>
    </>

  )
}

export default App
