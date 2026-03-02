import Lottie from "lottie-react"
import catPookie from "./assets/catPookie.json"
import GalaxyBackground from "./galaxy/GalaxyBackground"
import MiffyPlayZone from "./MiffyPlayZone"
import "./App.css"

function App() {
  return (
    <div className="page">

      {/* FULL PAGE NEBULA */}
      <GalaxyBackground />

      {/* STAR OVERLAY */}
      <div className="background-stars" />

      {/* HEADER */}
      <div className="top">
        <div className="logo-header">
          <Lottie
            animationData={catPookie}
            loop={true}
            style={{ width: 50, height: 50 }}
          />
          <h1>StormSafe</h1>
        </div>

        <p className="tagline">
          Coordinating rescue and protection for vulnerable animals during extreme weather.
        </p>
      </div>

      {/* ALERT */}
      <div className="alert-banner">
        <div>
          <strong>⚠ Active Winter Storm Warning</strong>
          <p>Heavy snow, high winds from 3 PM to 9 PM</p>
        </div>
        <span>›</span>
      </div>

      {/* MAP CARD */}
      <div className="map-card">
        <div className="map-header">
          <span className="cases">
            📍 All Cases <span className="badge">8</span>
          </span>
          <div>⚙</div>
        </div>

        <div className="map-area">
          <div className="marker red">❤️</div>
          <div className="marker yellow">⚡</div>
          <div className="marker orange">🤍</div>
          <div className="marker green">✔</div>
        </div>

        <div className="legend">
          <span><span className="dot red" /> Injured</span>
          <span><span className="dot yellow" /> Shelter Needed</span>
          <span><span className="dot orange" /> Monitoring</span>
          <span><span className="dot green" /> Resolved</span>
        </div>

        <button className="report-btn">+ Report Cat</button>
      </div>

      {/* WHY SECTION */}
      <div className="why-section">
        <h2>Why StormSafe?</h2>

        <div className="cards">
          <div className="info-card">
            <h3>📍 GPS-Enabled Reports</h3>
            <p>Easily report animals in danger with photos, descriptions and exact GPS location.</p>
          </div>

          <div className="info-card">
            <h3>⚡ Urgency Tagging</h3>
            <p>Classify reports as Injured, Shelter Needed, Monitoring or Resolved.</p>
          </div>

          <div className="info-card">
            <h3>📂 Claim & Track</h3>
            <p>Prevent duplicate calls by claiming and tracking rescue cases.</p>
          </div>

          <div className="info-card">
            <h3>🗺 Real-Time Coordination</h3>
            <p>See live rescue efforts directly on the map.</p>
          </div>

          {/* 🐰 Miffy card placed as a grid item alongside the others */}
          <div className="info-card miffy-card">
            <h3>🐾 Miffy Play Zone</h3>
            <MiffyPlayZone />
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="bottom-nav">
        <div>💖 Donate</div>
        <div>📩 Contact</div>
        <div>👤 Profile</div>
      </div>
    </div>
  )
}

export default App