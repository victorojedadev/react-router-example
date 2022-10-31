import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { ProtectedRoutes } from './components/ProtectedRoutes';
import { Admin, Analytics, Dashboard, Home, Landing } from './pages'

function App() {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: '1',
      name: 'Juan',
      permission: ['analize'],
      roles: ['admin']
    })
  };

  const logout = () => {
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Navigation />
      {
        user ? (
          <button onClick={logout}>Logout </button>
        ) : (
          <button onClick={login}>Login</button>
        )
      }
      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRoutes isAllowed={!!user} redirectTo={"/landing"}></ProtectedRoutes>}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/analytics' element={
          <ProtectedRoutes isAllowed={!!user && user.permission.includes('analize')} redirectTo={"/home"}>
            <Analytics />
          </ProtectedRoutes>
        } />
        <Route path='/admin' element={
          <ProtectedRoutes isAllowed={!!user && user.roles.includes('admin')} redirectTo={"/home"}>
            <Admin />
          </ProtectedRoutes>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to="/landing">Landing</Link>
      </li>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/analytics">Analytics</Link>
      </li>
      <li>
        <Link to="/admin">Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App