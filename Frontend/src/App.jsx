import React from 'react'
import HomePage from './Home/HomePage'

import { Routes, Route } from 'react-router-dom'
import Courses from './courses/Courses'
import SignUp from './components/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/signup' element={<SignUp />}></Route>


      </Routes>
    </>




  )
}

export default App
