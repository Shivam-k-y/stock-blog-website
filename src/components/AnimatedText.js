"use client"
import { motion } from "framer-motion"

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.08,
}) {
  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
