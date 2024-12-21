import React from 'react'
import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AdminPanel from './Pages/AdminPanel'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Admin' element={<AdminPanel />}/>
    </Routes>
    </>
  )
}

export default App