import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
const App = () => {
  return (
    <div className="root">
    <NavBar />
      <main className="content">
        <div className="toolbar" />
        <Routes>
          <Route path="/movie/:id" element={<h1>Movie Information</h1>} />
          <Route path="/actors/:id" element={<h1>Actors</h1>} />
          <Route path="/" element={<h1>Movies</h1>} />
          <Route path="/profile/:id" element={<h1>Profile</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
