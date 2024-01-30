import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  return (
    <div className='bg-red-500'>
        <Router>
            <Routes>
                <Route path='/' Component={Home} />
            </Routes>
        </Router>
    </div>
  )
}

export default App