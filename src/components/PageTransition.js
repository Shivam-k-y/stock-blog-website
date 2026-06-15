"use client"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex-1"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
