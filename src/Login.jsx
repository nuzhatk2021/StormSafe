import { useState } from "react"
import { useNavigate } from "react-router-dom"
import GalaxyBackground from "./galaxy/GalaxyBackground"
import "./Login.css"

function Login({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    if (email && password) {
      // Store fake user name
      onLogin("Nuzhat")
      // Redirect to home
      navigate("/")
    }
  }

  return (
    <div className="login-page">
      {/* GALAXY BACKGROUND */}
      <GalaxyBackground />

      {/* STAR OVERLAY */}
      <div className="background-stars" />

      {/* LOGIN CARD */}
      <div className="login-container">
        <div className="login-card">
          <h1>🐾 StormSafe</h1>
          <p className="login-subtitle">Sign in to coordinate rescue efforts</p>

          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>

          <p className="signup-link">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
