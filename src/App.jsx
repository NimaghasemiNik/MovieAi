import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <main>
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
