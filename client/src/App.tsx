import { useState } from 'react'
import './App.css'
import Index from './pages/Index';
import Login from './pages/Login'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Doubts from './pages/Doubts';
import Tracking from './pages/Tracking';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/doubts' element={<Doubts/>}></Route>
        <Route path='/tracking' element={<Tracking/>}></Route>
    </Routes>
    </>
  )
}

export default App
