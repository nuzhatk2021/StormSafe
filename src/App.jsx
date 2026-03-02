import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"

import catPookie from "./assets/catPookie.json"
import bg1 from "./assets/cat-astronaut-amico.svg"
import bg2 from "./assets/cat-astronaut-rafiki.svg"
import cuteCat from "./assets/cat-raisinghand.png"

function App() {

  const [ball, setBall] = useState(null)
  const [catPos, setCatPos] = useState({ x: 50, y: 80 })

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    setBall({
      x: e.clientX - rect.left - 5,
      y: e.clientY - rect.top - 5
    })
  }

  // Cat follows ball
  useEffect(() => {
    if (!ball) return

    const interval = setInterval(() => {
      setCatPos(prev => {
        const dx = ball.x - prev.x
        const dy = ball.y - prev.y

        return {
          x: prev.x + dx * 0.06,
          y: prev.y + dy * 0.06
        }
      })
    }, 16)

    return () => clearInterval(interval)
  }, [ball])

  // Idle floating
  useEffect(() => {
    if (ball) return

    const float = setInterval(() => {
      setCatPos({
        x: 50,
        y: 80 + Math.sin(Date.now() / 700) * 6
      })
    }, 16)

    return () => clearInterval(float)
  }, [ball])

  return (
    <div className="page">

      {/* Background */}
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

      {/* Header */}
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

      {/* MITTEN PLAY ZONE */}
      <div className="mitten-zone" onClick={handleClick}>

        <AnimatePresence>
          {ball && (
            <motion.div
              className="ball"
              initial={{ scale: 0 }}
              animate={{ x: ball.x, y: ball.y, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          )}
        </AnimatePresence>

        <motion.img
          src={cuteCat}
          className="cute-cat"
          animate={{ x: catPos.x, y: catPos.y }}
          transition={{ type: "spring", stiffness: 80 }}
          style={{
            transform: ball && ball.x < catPos.x ? "scaleX(-1)" : "scaleX(1)"
          }}
        />

      </div>

    </div>
  )
}

export default App