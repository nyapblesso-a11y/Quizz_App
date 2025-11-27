import { useState } from 'react'
import './App.css'
import HopePage from './HomePage/HomePage'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { QuzzPage } from './QuizzPage/QuzzPage'
import ResutsPage from './ResultsPage/ResutsPage'

function App() {


  return (
    <>
      <>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<HopePage/>}/>
          <Route path='/quizz' element={<QuzzPage/>}/>
          <Route path='/quizz/results' element={<ResutsPage/>}/>
        </Routes>
        </BrowserRouter>
      </>
    </>
  )
}

export default App
