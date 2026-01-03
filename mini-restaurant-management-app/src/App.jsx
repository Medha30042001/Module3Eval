import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import AdminDashboard from './dashboards/admin/AdminDashboard'
import CustomerDashboard from './dashboards/customer/CustomerDashboard'
import UpdateRestaurant from './dashboards/admin/UpdateRestaurant'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />

          <Route path='/admin/dashboard' element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />

          <Route path='/admin/restaurants/update/:id' element={
            <ProtectedRoute role='admin'>
              <UpdateRestaurant />
            </ProtectedRoute>
          } />

          <Route path='/customer/dashboard' element={
            <ProtectedRoute role='customer'>
              <CustomerDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
