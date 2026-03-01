import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Lottie from "lottie-react"

import catPookie from "./assets/catPookie.json"
import bg1 from "./assets/cat-astronaut-amico.svg"
import bg2 from "./assets/cat-astronaut-rafiki.svg"
import catRun from "./assets/cat-run.png"

function App() {

  // Single ball
  const [ball, setBall] = useState({ x: 500, y: 120 })

  // Cat position
  const [catPos, setCatPos] = useState({ x: 300, y: 120 })

  // Sprite frame
  const [frame, setFrame] = useState(0)

  const lastMove = useRef(0)
  const HEADER_HEIGHT = 180

  // Move ball only inside header (less sensitive)
  const moveBall = (e) => {
    const now = Date.now()
    if (now - lastMove.current < 120) return

    if (e.clientY < HEADER_HEIGHT) {
      lastMove.current = now
      setBall({
        x: e.clientX,
        y: e.clientY
      })
    }
  }

  // Smooth cat follow
  useEffect(() => {
    const interval = setInterval(() => {
      setCatPos(prev => {
        const dx = ball.x - prev.x
        const dy = ball.y - prev.y

        return {
          x: prev.x + dx * 0.02,
          y: prev.y + dy * 0.02
        }
      })
    }, 16)

    return () => clearInterval(interval)
  }, [ball])

  // Animate sprite only when moving
  useEffect(() => {
    const animation = setInterval(() => {
      const distance =
        Math.abs(ball.x - catPos.x) + Math.abs(ball.y - catPos.y)

      if (distance > 8) {
        setFrame(prev => (prev + 1) % 6)
      }
    }, 150)

    return () => clearInterval(animation)
  }, [ball, catPos])

  return (
    <div className="page" onMouseMove={moveBall}>

      {/* FLOATING BACKGROUND ANIMALS */}
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

      {/* BALL */}
      <motion.div
        className="ball"
        animate={{ x: ball.x, y: ball.y }}
      />

      {/* SPRITE CAT */}
      <motion.div
        className="sprite-wrapper"
        animate={{ x: catPos.x, y: catPos.y }}
        transition={{ type: "spring", stiffness: 30 }}
        style={{
          transform: ball.x < catPos.x ? "scaleX(-1)" : "scaleX(1)"
        }}
      >
        <div
          className="sprite"
          style={{
            backgroundPosition: `-${(frame % 3) * 100}% -${Math.floor(frame / 3) * 100}%`
          }}
        />
      </motion.div>

    </div>
  )
}

export default App