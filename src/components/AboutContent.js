"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

const storyParagraphs = [
  "I started my stock market journey like most beginners — confused, overwhelmed and losing money. Most content online was either in English or too complicated to understand.",
  "That's when I decided to start creating content in Hindi — simple, practical and beginner-friendly. No jargon, no unnecessary complexity — just clear explanations that actually help people make better financial decisions.",
  "Along with stock market, I also have a background in web development — which is why this website exists. I built AlphaWithShivam from scratch using Next.js, Sanity CMS and Tailwind CSS — so I could give you the best experience possible.",
]

const whatIDo = [
  {
    emoji: "📺",
    title: "YouTube Content",
    desc: "Weekly videos on stock market, trading strategies and investing — in simple Hindi.",
  },
  {
    emoji: "✍️",
    title: "Blog Writing",
    desc: "In-depth articles on stock market concepts, tools and strategies for Indian investors.",
  },
  {
    emoji: "🛠️",
    title: "Free Tools",
    desc: "Building free calculators and tools to help investors make better decisions.",
  },
  {
    emoji: "💻",
    title: "Web Development",
    desc: "Building websites for finance creators and businesses — specializing in the finance niche.",
  },
]

const skills = [
  "Stock Market", "Technical Analysis", "Fundamental Analysis",
  "Options Trading", "Mutual Funds", "Next.js", "React",
  "Tailwind CSS", "Node.js", "Sanity CMS", "SEO", "Content Creation",
]

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* ═══════════════════════════════════════
            HERO — Avatar scale-in + text fade
           ═══════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-14 border-b border-gray-800 pb-14">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
            className="w-32 h-32 rounded-full bg-green-900 border-4 border-green-400 flex items-center justify-center text-5xl shrink-0"
          >
            👤
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl font-bold mb-2">
              Hey, I&apos;m <span className="text-green-400">Shivam Kumar</span> 👋
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Stock market educator, web developer and content creator from India.
              I believe financial education should be free and accessible to everyone —
              that&apos;s why I created AlphaWithShivam.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-3 mt-4 flex-wrap"
            >
              <a href="https://www.youtube.com/@AlphaWithShivam" target="_blank"
                className="bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition btn-glow">
                ▶ YouTube
              </a>
              <a href="https://wa.me/916202823588" target="_blank"
                className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition btn-glow">
                💬 WhatsApp
              </a>
              <Link href="/hire-me"
                className="border border-gray-700 hover:border-green-400 text-sm font-bold px-4 py-2 rounded-lg transition btn-glow">
                Hire Me →
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════════
            MY STORY — Timeline animation
           ═══════════════════════════════════════ */}
        <section className="mb-12">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold mb-6">
              My <span className="text-green-400">Story</span>
            </h2>
          </AnimatedSection>

          <div className="timeline-line pl-10 space-y-8">
            {storyParagraphs.map((text, i) => (
              <AnimatedSection
                key={i}
                variant={i % 2 === 0 ? "slideRight" : "slideRight"}
                delay={i * 0.2}
              >
                <div className="flex gap-4 items-start -ml-10">
                  <motion.div
                    className="timeline-dot mt-1.5"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, delay: i * 0.2 }}
                  />
                  <p className="text-gray-400 leading-relaxed">{text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
            WHAT I DO — Stagger cards
           ═══════════════════════════════════════ */}
        <section className="mb-12">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold mb-6">
              What I <span className="text-green-400">Do</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.12}>
            {whatIDo.map((item) => (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex gap-4 card-hover hover:border-green-400/30 h-full"
                >
                  <motion.span
                    className="text-3xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.emoji}
                  </motion.span>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ═══════════════════════════════════════
            SKILLS — Stagger fade-in tags
           ═══════════════════════════════════════ */}
        <section className="mb-12">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold mb-6">
              My <span className="text-green-400">Skills</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.05}>
            {skills.map((skill) => (
              <StaggerItem key={skill}>
                <motion.span
                  whileHover={{ scale: 1.1, borderColor: "#4ade80" }}
                  className="bg-gray-900 border border-gray-800 hover:border-green-400 transition text-sm px-3 py-1.5 rounded-full text-gray-300 inline-block cursor-default"
                >
                  {skill}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* ═══════════════════════════════════════
            DISCLAIMER
           ═══════════════════════════════════════ */}
        <AnimatedSection variant="fadeUp" className="mb-12">
          <div className="bg-yellow-950 border border-yellow-800 rounded-2xl p-5">
            <h3 className="font-bold text-yellow-400 mb-2">⚠️ Disclaimer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All content on AlphaWithShivam is for educational purposes only.
              Nothing on this website should be considered as financial advice.
              Stock market investments are subject to market risks —
              please do your own research before investing.
            </p>
          </div>
        </AnimatedSection>

        {/* ═══════════════════════════════════════
            CTA — Scale up entrance
           ═══════════════════════════════════════ */}
        <AnimatedSection variant="scaleUp">
          <section className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-8 card-hover hover:border-green-400/30">
            <h2 className="text-2xl font-bold mb-3">
              Let&apos;s <span className="text-green-400">Connect!</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Have a question, collaboration idea or want a website built?
              Let&apos;s talk!
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <a href="https://wa.me/916202823588" target="_blank"
                className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition btn-glow">
                💬 WhatsApp Karo
              </a>
              <Link href="/hire-me"
                className="border border-gray-700 hover:border-green-400 px-6 py-3 rounded-xl transition btn-glow">
                Hire Me →
              </Link>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </div>
  )
}
