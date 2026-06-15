"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { urlFor } from "../../sanity/lib/image"
import AnimatedText from "@/components/AnimatedText"
import CountUp from "@/components/CountUp"
import AnimatedSection from "@/components/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

export default function HomeContent({ posts }) {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* ═══════════════════════════════════════
          HERO — Background video + text reveal
         ═══════════════════════════════════════ */}
      <section className="relative text-center py-20 px-4 border-b border-gray-800 overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster=""
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-950/75 z-[1]" />

        {/* Animated Gradient Overlay (on top of dark overlay) */}
        <div className="absolute inset-0 z-[2] pointer-events-none hero-gradient" />

        {/* Content */}
        <div className="relative z-[3]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <AnimatedText text="Stock Market" />
            <br />
            <span className="text-green-400">
              <AnimatedText text="Hindi Mein" delay={0.4} />
            </span>
            <br />
            <AnimatedText text="Samjho Aur Invest Wisely." delay={0.7} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-gray-300 text-lg mb-8 max-w-xl mx-auto"
          >
            Free tools, expert articles, and resources — for beginners to experts
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <Link href="/blog"
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-lg transition btn-glow">
              Read the Blog →
            </Link>
            <Link href="/tools"
              className="border border-gray-700 hover:border-green-400 px-6 py-3 rounded-lg transition btn-glow">
              Try Free Tools
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS — Count-up on scroll
         ═══════════════════════════════════════ */}
      <section className="grid grid-cols-3 gap-4 px-8 py-8 border-b border-gray-800">
        {[
          { num: 5, suffix: "+", label: "Articles" },
          { num: 5, suffix: "", label: "Free Tools" },
          { num: 1, suffix: "K+", label: "Readers" },
        ].map((s, i) => (
          <AnimatedSection key={s.label} variant="scaleUp" delay={i * 0.15}>
            <div className="bg-gray-900 rounded-xl p-5 text-center card-hover border border-gray-800 hover:border-green-400/30">
              <div className="text-2xl font-bold text-green-400">
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div className="text-gray-400 text-sm mt-1">{s.label}</div>
            </div>
          </AnimatedSection>
        ))}
      </section>

      {/* ═══════════════════════════════════════
          LATEST BLOG POSTS — Fade up on scroll
         ═══════════════════════════════════════ */}
      <section className="px-8 py-10 border-b border-gray-800">
        <AnimatedSection variant="fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
            <Link href="/blog" className="text-green-400 text-sm hover:underline">See all →</Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.15}>
          {posts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center py-8">
              Blog posts load nahi ho paaye. Baad mein dubara try karo.
            </p>
          )}
          {posts.map((post) => (
            <StaggerItem key={post.slug.current}>
              <Link href={`/blog/${post.slug.current}`}>
                <div className="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition overflow-hidden card-hover h-full">
                  {post.mainImage ? (
                    <img
                      src={urlFor(post.mainImage).width(400).url()}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-800 flex items-center justify-center text-gray-600">
                      No Image
                    </div>
                  )}
                  <div className="p-4">
                    {post.categories?.[0] && (
                      <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                        {post.categories[0]}
                      </span>
                    )}
                    <h3 className="font-semibold mt-2">{post.title}</h3>
                    <p className="text-gray-500 text-xs mt-2">
                      {new Date(post.publishedAt).toLocaleDateString("en-IN")}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════════════════════════════════
          FREE TOOLS — Stagger cards one by one
         ═══════════════════════════════════════ */}
      <section className="px-8 py-10 border-b border-gray-800">
        <AnimatedSection variant="fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Free Tools</h2>
            <Link href="/tools" className="text-green-400 text-sm hover:underline">See all →</Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.12}>
          {[
            { name: "SIP Calculator", desc: "Calculate future value", href: "/tools/sip", ready: true },
            { name: "Risk/Reward", desc: "Calculate trade ratio", href: "/tools/rr", ready: true },
            { name: "Position Size", desc: "Find the right lot size", href: "/tools/position", ready: true },
            { name: "Brokerage Calc", desc: "Calculate brokerage charges", href: "/tools/brokerage", ready: true },
          ].map((tool) => (
            <StaggerItem key={tool.name}>
              {tool.ready ? (
                <Link href={tool.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition p-5 text-center card-hover"
                  >
                    <motion.div
                      className="text-2xl mb-2"
                      whileHover={{ scale: 1.3, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      🧮
                    </motion.div>
                    <div className="font-semibold text-sm">{tool.name}</div>
                    <div className="text-gray-500 text-xs mt-1">{tool.desc}</div>
                  </motion.div>
                </Link>
              ) : (
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 text-center opacity-50 cursor-not-allowed">
                  <div className="text-2xl mb-2">🧮</div>
                  <div className="font-semibold text-sm">{tool.name}</div>
                  <div className="text-yellow-600 text-xs mt-1">Coming soon...</div>
                </div>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════════════════════════════════
          FREE RESOURCES — Fade up
         ═══════════════════════════════════════ */}
      <section className="px-8 py-10 border-b border-gray-800">
        <AnimatedSection variant="fadeIn">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Free Resources</h2>
            <Link href="/resources/" className="text-green-400 text-sm hover:underline">See all →</Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.15}>
          {[
            { name: "Candlestick PDF", type: "Beginner guide", emoji: "📄", available: true, href: "https://drive.google.com/uc?export=download&id=1ZabHtF3YCYtdSjPgpQ7EtxrPJzTjX95H" },
            { name: "Trading Journal", type: "Excel template", emoji: "📊", available: true, href: "/resources/Trading Journal.xlsx" },
            { name: "Beginner Checklist", type: "Interactive guide", emoji: "✅", available: true, href: "/resources/beginners-checklist", page: true },
          ].map((res) => (
            <StaggerItem key={res.name}>
              <div className={`bg-gray-900 rounded-xl border border-gray-800 p-5 flex gap-4 items-center card-hover
                ${res.available
                  ? " hover:border-green-400"
                  : "border-gray-800 opacity-60 cursor-not-allowed"
                } `}>
                <motion.span
                  className="text-3xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {res.emoji}
                </motion.span>
                <div>
                  <div className="font-semibold text-sm">{res.name}</div>
                  {res.available ? (
                    res.page ? (
                      <Link href={res.href}
                        className="inline-block mt-4 bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-2 rounded-lg transition btn-glow">
                        View Checklist →
                      </Link>
                    ) : (
                      <a download href={res.href}
                        className="inline-block mt-4 bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-4 py-2 rounded-lg transition btn-glow">
                        ⬇ Free Download
                      </a>
                    )
                  ) : (
                    <span className="text-yellow-500 text-xs mt-3 inline-block">
                      Coming soon...
                    </span>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════════════════════════════════
          YOUTUBE CTA — Scale up entrance
         ═══════════════════════════════════════ */}
      <AnimatedSection variant="scaleUp" className="px-8 py-10">
        <div className="bg-gray-900 rounded-2xl p-8 flex gap-6 items-center flex-wrap border border-gray-800 hover:border-green-400/30 transition card-hover">
          <motion.span
            className="text-6xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            📺
          </motion.span>
          <div>
            <h2 className="text-2xl font-bold mb-2">Find Us on YouTube Too</h2>
            <p className="text-gray-400 mb-4">
              Stock market, trading strategies, and investing tips — simple videos every week
            </p>
            <a
              href="https://www.youtube.com/@AlphaWithShivam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg inline-block transition btn-glow">
              ▶ Subscribe to the Channel
            </a>
          </div>
        </div>
      </AnimatedSection>

    </main>
  )
}
