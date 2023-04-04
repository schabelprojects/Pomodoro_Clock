import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './component/LandingPage/LandingPage'
import Home from './component/Home/Home'
import Pomodoro from './component/Pomodoro/Pomodoro'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/pomodoro' element={<Pomodoro />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
