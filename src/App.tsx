import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { Layout } from 'lucide-react'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dash-board" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        {/* Protected routes wrapped in the layout */}
        {/* <Route element={<Layout />}>
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardMobile /></PrivateRoute>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App

{/* <div>
        <p>Logo</p>
        
      </div>
      <p>Zily-cloud</p>
      <p>We are the best at what we do</p> */}