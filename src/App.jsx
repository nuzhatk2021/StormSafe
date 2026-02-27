import { motion } from "framer-motion"
import cat from "./assets/undraw_playful-cat_3ta5.svg"
import rescue from "./assets/Adopt a pet-amico.svg"

function App() {
  return (
    <div className="page">

      <div className="hero">
        <motion.img
          src={cat}
          className="floating-cat"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />

        <motion.img
          src={rescue}
          className="floating-rescue"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        <h1>StormSafe</h1>
        <p>Helping vulnerable animals during extreme weather</p>
      </div>

    </div>
  )
}

export default App