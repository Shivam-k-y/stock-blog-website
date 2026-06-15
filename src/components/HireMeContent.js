"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

const services = [
  {
    emoji: "🌐",
    name: "Stock Market Website",
    desc: "Complete website with blog, tools, and resources",
    time: "5-7 days",
    price: "₹8,000 - ₹20,000",
  },
  {
    emoji: "📚",
    name: "Trading Course Website",
    desc: "Professional landing page to sell your course",
    time: "4-6 days",
    price: "₹10,000 - ₹25,000",
  },
  {
    emoji: "🧮",
    name: "Finance Tools",
    desc: "SIP, brokerage, and position size calculators",
    time: "2-3 days",
    price: "₹3,000 - ₹8,000",
  },
  {
    emoji: "✍️",
    name: "Finance Blog Setup",
    desc: "Complete blog website with Sanity CMS",
    time: "3-5 days",
    price: "₹5,000 - ₹15,000",
  },
  {
    emoji: "📺",
    name: "YouTube Channel Website",
    desc: "Personal brand website for creators",
    time: "3-5 days",
    price: "₹5,000 - ₹12,000",
  },
  {
    emoji: "📦",
    name: "Digital Product Page",
    desc: "Sales page to sell bundles or courses",
    time: "1-2 days",
    price: "₹2,000 - ₹5,000",
  },
]

const processSteps = [
  { step: "01", title: "Message on WhatsApp", desc: "Talk about your project — free consultation" },
  { step: "02", title: "Get a Quote", desc: "Price and timeline within 24 hours" },
  { step: "03", title: "50% Advance", desc: "Half payment before work begins" },
  { step: "04", title: "Website Ready", desc: "Delivered on time — revisions included" },
]

const faqs = [
  {
    q: "Do you only build finance websites?",
    a: "I specialize in the finance niche because I understand the stock market too — so I build better websites in this field.",
  },
  {
    q: "What about hosting and domain?",
    a: "I set up free hosting on Vercel. You will need to buy a domain separately — around ₹500/year on Namecheap.",
  },
  {
    q: "How many revisions are included?",
    a: "You get 3 free revisions after delivery. Major changes are charged separately.",
  },
  {
    q: "How do I pay?",
    a: "UPI, bank transfer, or any other method — whatever is convenient for you.",
  },
]

const WHATSAPP_URL =
  "https://wa.me/916202823588?text=Hi%20Shivam%2C%20I%20need%20a%20website%20built"

export default function HireMeContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <section className="hero-gradient text-center py-16 px-4 border-b border-gray-800">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full font-semibold"
        >
          AVAILABLE FOR WORK ✅
        </motion.span>

        <h1 className="text-4xl font-bold mt-5 mb-4">
          <AnimatedText text="Get a" delay={0.2} />
          {" "}
          <span className="text-green-400">
            <AnimatedText text="Finance Website" delay={0.4} />
          </span>
          {" "}
          <AnimatedText text="Built" delay={0.7} />
          <br />
          <AnimatedText text="By a Stock Market Expert" delay={0.9} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="text-gray-400 text-lg max-w-xl mx-auto mb-8"
        >
          I am a web developer who also understands the stock market —
          so I build better finance websites
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition btn-glow">
            💬 Message on WhatsApp
          </a>
          <a href="#services"
            className="border border-gray-700 hover:border-green-400 px-8 py-3 rounded-xl transition btn-glow">
            View Services →
          </a>
        </motion.div>
      </section>

      {/* Why Me */}
      <section className="px-6 py-12 border-b border-gray-800 max-w-4xl mx-auto">
        <AnimatedSection variant="fadeIn">
          <h2 className="text-2xl font-bold text-center mb-8">
            Why <span className="text-green-400">Choose Me?</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.15}>
          {[
            { emoji: "📈", title: "Stock Market Knowledge", desc: "Not just a developer — I understand finance too. Your website content and tools will be stronger." },
            { emoji: "⚡", title: "Fast Delivery", desc: "Simple websites in 2–3 days, complex projects in 7 days — no wasted time." },
            { emoji: "💰", title: "Affordable Price", desc: "What agencies charge ₹50,000 for, I deliver at ₹10,000 — same quality." },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center card-hover hover:border-green-400/30 h-full"
              >
                <motion.div
                  className="text-4xl mb-3"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.emoji}
                </motion.div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold text-center mb-8">
              What Can I <span className="text-green-400">Build?</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-6 flex gap-4 card-hover h-full"
                >
                  <motion.span
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.emoji}
                  </motion.span>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">⏱ {service.time}</span>
                      <span className="text-green-400 font-semibold">{service.price}</span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold text-center mb-8">
              How Does It <span className="text-green-400">Work?</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.15}>
            {processSteps.map((p) => (
              <StaggerItem key={p.step}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center card-hover hover:border-green-400/30 h-full"
                >
                  <motion.div
                    className="text-3xl font-bold text-green-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {p.step}
                  </motion.div>
                  <div className="font-semibold text-sm mb-1">{p.title}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold text-center mb-8">
              My <span className="text-green-400">Portfolio</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.15}>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-900 border border-green-800 rounded-2xl p-6 card-hover h-full"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold">AlphaWithShivam</h3>
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">Live ✅</span>
                </div>
                <p className="text-gray-400 text-sm mb-4">
                  Stock market blog + free tools + resources website —
                  built with Next.js, Sanity CMS, and Tailwind CSS
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  {["Next.js", "Sanity CMS", "Tailwind", "Vercel"].map((tag) => (
                    <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <Link href="/" className="text-green-400 text-sm hover:underline">
                  View website →
                </Link>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center justify-center text-center card-hover h-full"
              >
                <div>
                  <motion.div
                    className="text-4xl mb-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🚀
                  </motion.div>
                  <p className="text-gray-400 text-sm">
                    Your project could be featured here!<br />
                    Become the first client.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-green-400 text-sm hover:underline">
                    Get in touch →
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection variant="fadeIn">
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked <span className="text-green-400">Questions</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.q}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-5 card-hover hover:border-green-400/30"
                >
                  <h3 className="font-semibold mb-2 text-green-400">Q: {faq.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <AnimatedSection variant="scaleUp" className="px-6 py-16">
        <div className="max-w-lg mx-auto text-center">
          <motion.div
            className="text-5xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💬
          </motion.div>
          <h2 className="text-2xl font-bold mb-3">
            Let&apos;s Talk?
          </h2>
          <p className="text-gray-400 mb-6">
            Message on WhatsApp for a free consultation — we will discuss your project,
            I will send a quote, and we can get started
          </p>
          
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition btn-glow">
            WhatsApp → 6202823588
          </a>
          <p className="text-gray-600 text-xs mt-4">
            I usually reply within 1–2 hours
          </p>
        </div>
      </AnimatedSection>

    </div>
  )
}
