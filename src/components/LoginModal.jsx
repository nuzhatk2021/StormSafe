import { motion } from "framer-motion"

function LoginModal({ onClose }) {
  return (
    <div className="auth-overlay" onClick={onClose}>
      <motion.div
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h2>StormSafe Account</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="auth-btn">Sign In</button>
        <button className="auth-btn secondary">Create Account</button>

        <p className="close-text" onClick={onClose}>
          Close
        </p>
      </motion.div>
    </div>
  )
}

export default LoginModal
