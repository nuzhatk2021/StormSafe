import { useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import Login from "./Login"

function AppRouter() {
  const [user, setUser] = useState(null)

  const handleLogin = (userName) => {
    setUser(userName)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App user={user} onLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
