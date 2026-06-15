"use client"
import { useEffect, useRef, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

export default function CountUp({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 40,
    stiffness: 100,
    duration: duration * 1000,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(target)
    }
  }, [isInView, target, motionValue])

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [springValue])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
