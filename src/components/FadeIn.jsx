import { motion, useInView } from "framer-motion"
import { useRef } from "react"

// FadeIn — wraps any element with a scroll-triggered fade + slide up
// Usage:
//   <FadeIn><YourComponent /></FadeIn>
//   <FadeIn delay={0.2}><YourComponent /></FadeIn>
//   <FadeIn direction="left"><YourComponent /></FadeIn>

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.5,
  className = "",
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  const directions = {
    up:    { y: 24, x: 0 },
    down:  { y: -24, x: 0 },
    left:  { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none:  { y: 0, x: 0 },
  }

  const offset = directions[direction] || directions.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}