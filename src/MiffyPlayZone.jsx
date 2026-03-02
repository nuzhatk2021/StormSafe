import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import miffy from "./assets/cat-raisinghand.png"

function MiffyPlayZone() {
  const [ball, setBall] = useState(null)
  const [pos, setPos] = useState({ x: 40, y: 60 })

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setBall({
      x: e.clientX - rect.left - 15,
      y: e.clientY - rect.top - 15
    })
  }

  useEffect(() => {
    if (!ball) return
    const interval = setInterval(() => {
      setPos(prev => {
        const dx = ball.x - prev.x
        const dy = ball.y - prev.y
        return {
          x: prev.x + dx * 0.07,
          y: prev.y + dy * 0.07
        }
      })
    }, 16)
    return () => clearInterval(interval)
  }, [ball])

  return (
    <div className="miffy-zone" onClick={handleClick}>
      <AnimatePresence>
        {ball && (
          <motion.div
            className="miffy-ball"
            initial={{ scale: 0 }}
            animate={{ x: ball.x, y: ball.y, scale: 1 }}
            exit={{ scale: 0 }}
          />
        )}
      </AnimatePresence>

      <motion.img
        src={miffy}
        className="miffy"
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 60 }}
      />
    </div>
  )
}

export default MiffyPlayZone