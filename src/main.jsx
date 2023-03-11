import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductCard } from './components/ProductCard'
import './index.css'
import { LandingPage } from './pages/LandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <App />
        <LandingPage/>
    </>
)
