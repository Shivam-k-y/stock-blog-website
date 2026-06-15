"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

const tools = [
  {
    name: "SIP Calculator",
    desc: "Calculate the future value of monthly investments",
    emoji: "📈",
    href: "/tools/sip",
    ready: true,
  },
  {
    name: "Income Tax Calculator",
    desc: "FY 2025-26 tax calculate karo — old & new regime",
    emoji: "🧾",
    href: "/tools/income-tax",
    ready: true,
  },
  {
    name: "Risk/Reward Calculator",
    desc: "Calculate your trade risk/reward ratio",
    emoji: "⚖️",
    href: "/tools/rr",
    ready: true,
  },
  {
    name: "Position Size Calculator",
    desc: "Find the right lot size for your trade",
    emoji: "📊",
    href: "/tools/position",
    ready: true,
  },
  {
    name: "Brokerage Calculator",
    desc: "Calculate Zerodha/Upstox charges",
    emoji: "🧾",
    href: "/tools/brokerage",
    ready: true,
  },
]

export default function ToolsContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <AnimatedSection variant="fadeIn">
        <section className="text-center border-b border-gray-800 py-5 px-4">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="text-green-400"> Free Tools </span>
          </h1>
        </section>
      </AnimatedSection>

      {/* Tools Grid */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl" staggerDelay={0.1}>
          {tools.map((tool) => (
            <StaggerItem key={tool.name}>
              {tool.ready ? (
                <Link href={tool.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-6 flex gap-4 items-start card-hover h-full"
                  >
                    <motion.span
                      className="text-4xl"
                      whileHover={{ scale: 1.3, rotate: 15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {tool.emoji}
                    </motion.span>
                    <div>
                      <h2 className="font-semibold text-lg">{tool.name}</h2>
                      <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
                      <span className="text-green-400 text-xs mt-2 inline-block">Use now →</span>
                    </div>
                  </motion.div>
                </Link>
              ) : (
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 items-start opacity-50 cursor-not-allowed">
                  <span className="text-4xl">{tool.emoji}</span>
                  <div>
                    <h2 className="font-semibold text-lg">{tool.name}</h2>
                    <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
                    <span className="text-gray-600 text-xs mt-2 inline-block">Coming soon...</span>
                  </div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  )
}
