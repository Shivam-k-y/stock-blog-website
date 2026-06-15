"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

const freeResources = [
  {
    emoji: "📄",
    name: "Candlestick Patterns PDF",
    desc: "Complete guide to all major candlestick patterns with examples",
    type: "Free PDF",
    href: "https://drive.google.com/uc?export=download&id=1ZabHtF3YCYtdSjPgpQ7EtxrPJzTjX95H",
    available: true,
  },
  {
    emoji: "📊",
    name: "Trading Journal Template",
    desc: "Track your trades, analyze mistakes and improve performance — Excel / Google Sheets compatible",
    type: "CSV Template",
    href: "/resources/Trading Journal.xlsx",
    available: true,
  },
  {
    emoji: "✅",
    name: "Beginner's Checklist",
    desc: "Everything you need to do before placing your first trade",
    type: "Interactive Guide",
    href: "/resources/beginners-checklist",
    available: true,
    page: true,
  },
]

const books = [
  {
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    desc: "The bible of value investing — Warren Buffett's favorite book. Must-read for every long-term investor.",
    price: "",
    badge: "Bestseller",
    badgeColor: "bg-yellow-900 text-yellow-400",
    flipkart: "https://fktr.in/lG9zNWt",
    affiliate: "https://www.amazon.in/s?k=the+intelligent+investor&tag=alphawithshiv-21",
    emoji: "📘",
  },
  {
    name: "Trading in the Zone",
    author: "Mark Douglas",
    desc: "Master the psychology of trading. Learn why discipline and mindset matters more than strategy.",
    price: "",
    badge: "Must Read",
    badgeColor: "bg-green-900 text-green-400",
    flipkart: "https://fktr.in/pRAP28R",
    affiliate: "https://www.amazon.in/s?k=trading+in+the+zone&tag=alphawithshiv-21",
    emoji: "📗",
  },
  {
    name: "How to Make Money in Stocks",
    author: "William J. O'Neil",
    desc: "Learn the CAN SLIM method — a proven system for finding winning stocks before they make big moves.",
    price: "",
    badge: "Popular",
    badgeColor: "bg-blue-900 text-blue-400",
    flipkart: "https://fktr.in/36boxxg",
    affiliate: "https://www.amazon.in/s?k=how+to+make+money+in+stocks&tag=alphawithshiv-21",
    emoji: "📙",
  },
  {
    name: "Technical Analysis of Financial Markets",
    author: "John J. Murphy",
    desc: "The most comprehensive guide to technical analysis — charts, indicators, and trading systems explained.",
    price: "",
    badge: "Advanced",
    badgeColor: "bg-purple-900 text-purple-400",
    flipkart: "https://fktr.in/RusszUo",
    affiliate: "https://www.amazon.in/s?k=technical+analysis+financial+markets+murphy&tag=alphawithshiv-21",
    emoji: "📕",
  },
  {
    name: "One Up On Wall Street",
    author: "Peter Lynch",
    desc: "Learn how to use what you already know to make money in the market — written by one of the best fund managers.",
    price: "",
    badge: "Beginner Friendly",
    badgeColor: "bg-green-900 text-green-400",
    flipkart: "https://fktr.in/fUBAAD5",
    affiliate: "https://www.amazon.in/s?k=one+up+on+wall+street&tag=alphawithshiv-21",
    emoji: "📒",
  },
  {
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    desc: "The classic book on financial education — understand the difference between assets and liabilities.",
    price: "",
    badge: "All Time Classic",
    badgeColor: "bg-orange-900 text-orange-400",
    flipkart: "https://fktr.in/mbtCkSu",
    affiliate: "https://www.amazon.in/s?k=rich+dad+poor+dad&tag=alphawithshiv-21",
    emoji: "📓",
  },
]

const tools = [
  {
    name: "Zerodha Kite",
    desc: "India's best trading platform — low brokerage, great charts and easy to use interface.",
    type: "Trading Platform",
    href: "https://zerodha.com/?c=EGG109&s=CONSOLE",
    emoji: "💹",
    free: true,
    referral: true,
    referralText: "Open ZeroDha Account →"
  },
  {
    name: "TradingView",
    desc: "Best charting platform for technical analysis — used by professional traders worldwide.",
    type: "Charting Tool",
    href: "https://tradingview.com",
    emoji: "📈",
    free: true,
    referral: false,
    referralText: "Use TradingView →"
  },
  {
    name: "Screener.in",
    desc: "Best free tool for fundamental analysis of Indian stocks — financials, ratios and more.",
    type: "Stock Screener",
    href: "https://screener.in",
    emoji: "🔍",
    free: true,
    referral: false,
    referralText: "Use Screener.in →"
  },
  {
    name: "Tickertape",
    desc: "Portfolio tracking, stock analysis and mutual fund research — all in one place.",
    type: "Portfolio Tracker",
    href: "https://tickertape.in",
    emoji: "📊",
    free: true,
    referral: false,
    referralText: "Use Tickertape →"
  },
]

export default function ResourcesContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <section className="hero-gradient text-center py-14 px-4 border-b border-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3"
        >
          Free & Paid <span className="text-green-400">Resources</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-xl mx-auto"
        >
          Everything you need to become a better trader and investor —
          books, tools, templates and more.
        </motion.p>
      </section>

      {/* Free Resources */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                Free <span className="text-green-400">Downloads</span>
              </h2>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.12}>
            {freeResources.map((res) => (
              <StaggerItem key={res.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-gray-900 border rounded-2xl p-6 transition card-hover h-full
                    ${res.available
                      ? "border-gray-800 hover:border-green-400"
                      : "border-gray-800 opacity-60 cursor-not-allowed"
                    }`}
                >
                  <motion.span
                    className="text-4xl inline-block"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {res.emoji}
                  </motion.span>
                  <div className="mt-3">
                    <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                      {res.type}
                    </span>
                    <h3 className="font-semibold mt-2">{res.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{res.desc}</p>

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
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Books — Amazon Affiliate */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <div className="mb-2">
              <h2 className="text-2xl font-bold">
                Recommended <span className="text-green-400">Books</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                * These are Amazon affiliate links — you pay the same price,
                we earn a small commission. Helps us keep the content free!
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" staggerDelay={0.1}>
            {books.map((book) => (
              <StaggerItem key={book.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-6 flex gap-4 card-hover h-full"
                >
                  <motion.span
                    className="text-5xl"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {book.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-2 flex-wrap">
                      <h3 className="font-bold">{book.name}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${book.badgeColor}`}>
                        {book.badge}
                      </span>
                    </div>
                    <p className="text-green-400 text-xs mt-1">by {book.author}</p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">{book.desc}</p>
                    <p className="text-white font-bold mt-3">{book.price}</p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                      <a href={book.flipkart} target="_blank"
                        className="bg-yellow-500 hover:bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-lg transition btn-glow">
                        Buy on Flipkart →
                      </a>
                      <a href={book.affiliate} target="_blank"
                        className="bg-blue-500 hover:bg-blue-400 text-white text-xs font-bold px-4 py-2 rounded-lg transition btn-glow">
                        Buy on Amazon →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Free Tools */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold mb-2">
              Useful <span className="text-green-400">Tools & Platforms</span>
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Free tools used by professional traders and investors in India.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <a href={tool.href} target="_blank">
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-5 flex gap-4 items-start card-hover h-full"
                  >
                    <motion.span
                      className="text-4xl"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {tool.emoji}
                    </motion.span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <h3 className="font-bold">{tool.name}</h3>
                        <div className="flex gap-2">
                          {tool.free && (
                            <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                              Free
                            </span>
                          )}
                          {tool.referral && (
                            <span className="text-xs bg-yellow-900 text-yellow-400 px-2 py-1 rounded-full">
                              ₹300 Referral
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{tool.type}</p>
                      <p className="text-gray-400 text-sm mt-2">{tool.desc}</p>
                      {tool.referral && (
                        <p className="text-yellow-400 text-xs mt-3">
                          🎁 You & your friend both benefit when they open an account!
                        </p>
                      )}
                    </div>
                  </motion.div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Our Tools CTA */}
      <AnimatedSection variant="scaleUp" className="px-6 py-12">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-green-800 rounded-2xl p-8 text-center card-hover hover:border-green-400/50 transition">
          <h2 className="text-2xl font-bold mb-3">
            Try Our Free <span className="text-green-400">Calculators</span>
          </h2>
          <p className="text-gray-400 mb-6">
            We have built free tools specifically for Indian stock market traders —
            SIP calculator, position size calculator and more.
          </p>
          <Link href="/tools"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition btn-glow">
            Explore Free Tools →
          </Link>
        </div>
      </AnimatedSection>

    </div>
  )
}
