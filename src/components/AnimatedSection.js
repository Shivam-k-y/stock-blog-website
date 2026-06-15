"use client"
import { motion } from "framer-motion"

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
}

export default function AnimatedSection({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  amount = 0.3,
}) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
