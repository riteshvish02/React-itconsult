import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
      </Routes>
    </div>
  )
}

export default App