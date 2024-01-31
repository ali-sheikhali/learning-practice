import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' Component={Home} />
            </Routes>
        </Router>
    </div>
  )
}

export default App