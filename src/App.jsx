import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"

import catPookie from "./assets/catPookie.json"
import bg1 from "./assets/cat-astronaut-amico.svg"
import bg2 from "./assets/cat-astronaut-rafiki.svg"
import cuteCat from "./assets/cat-raisinghand.png"

function App() {

  const HEADER_HEIGHT = 180

  // Ball position (null = not visible yet)
  const [ball, setBall] = useState(null)

  // Cat position
  const [catPos, setCatPos] = useState({ x: 300, y: 120 })

  // CLICK TO CREATE BALL
  const handleClick = (e) => {
    if (e.clientY < HEADER_HEIGHT) {
      setBall({
        x: e.clientX,
        y: e.clientY
      })
    }
  }

  // Cat smoothly follows ball
  useEffect(() => {
    if (!ball) return

    const interval = setInterval(() => {
      setCatPos(prev => {
        const dx = ball.x - prev.x
        const dy = ball.y - prev.y

        return {
          x: prev.x + dx * 0.025,
          y: prev.y + dy * 0.025
        }
      })
    }, 16)

    return () => clearInterval(interval)
  }, [ball])

  return (
    <div className="page" onClick={handleClick}>

      {/* BACKGROUND ANIMALS */}
      <motion.img
        src={bg1}
        className="bg-animal left"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <motion.img
        src={bg2}
        className="bg-animal right"
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* HEADER */}
      <div className="top">
        <div className="logo-header">
          <Lottie
            animationData={catPookie}
            loop={true}
            style={{ width: 45, height: 45 }}
          />
          <h1>StormSafe</h1>
        </div>

        <p>
          Coordinating rescue and protection for vulnerable animals during extreme weather.
        </p>
      </div>

      {/* BALL (only if clicked) */}
      {ball && (
        <motion.div
          className="ball"
          animate={{ x: ball.x, y: ball.y }}
        />
      )}

      {/* CUTE CAT PNG */}
      <motion.img
        src={cuteCat}
        className="cute-cat"
        animate={{ x: catPos.x, y: catPos.y }}
        transition={{ type: "spring", stiffness: 40 }}
        style={{
          transform: ball && ball.x < catPos.x ? "scaleX(-1)" : "scaleX(1)"
        }}
      />

    </div>
  )
}

export default App