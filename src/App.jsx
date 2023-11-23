import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Dashboard from './Dashboard'
import Check from './Check'

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='' element={<Login/>} />
            <Route path='/dashboard' element={<Check/>} />
            <Route path='/register' element={<Register/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App