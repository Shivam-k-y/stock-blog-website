"use client"
import { motion } from "framer-motion"
import AnimatedSection from "@/components/AnimatedSection"
import AnimatedText from "@/components/AnimatedText"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

const bundles = [
  {
    id: 1,
    name: "The 500GB Creator Editor Bundle",
    emoji: "🎬",
    price: 99,
    original: 4999,
    description: "The ultimate bundle for video editors — templates, LUTs, transitions, sound effects, and much more!",
    features: [
      "500GB+ Premium Content",
      "Video Templates",
      "LUTs & Color Grades",
      "Transitions Pack",
      "Sound Effects & Music",
      "Motion Graphics",
      "Lifetime Access",
      "Instant Download",
    ],
  },
  {
    id: 2,
    name: "Mega Reel Bundle",
    emoji: "🎞️",
    price: 99,
    original: 4999,
    description: "700,000+ premium reels — 60+ niches, 4K quality, no watermark, resell rights included!",
    features: [
      "700,000+ Reels",
      "60+ Niches",
      "4K Quality",
      "No Watermark",
      "Resell Rights",
      "Instant Download",
      "Lifetime Access",
      "₹10,000+ Bonus",
    ],
  },
]

const steps = [
  { step: "01", title: "Message on WhatsApp", desc: "Send a message to 6202823588" },
  { step: "02", title: "Make payment", desc: "Pay ₹99 via UPI or bank transfer" },
  { step: "03", title: "Send screenshot", desc: "Send payment proof on WhatsApp" },
  { step: "04", title: "Get access", desc: "Receive your bundle link instantly" },
]

export default function BundlesContent() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <section className="hero-gradient text-center py-14 px-4 border-b border-gray-800">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full font-semibold"
        >
          LIMITED TIME OFFER
        </motion.span>

        <h1 className="text-4xl font-bold mt-4 mb-3">
          <AnimatedText text="Creator" delay={0.2} />
          {" "}
          <span className="text-green-400">
            <AnimatedText text="Bundles" delay={0.5} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-gray-400 text-lg max-w-lg mx-auto"
        >
          Premium bundles for video creators — lifetime access for just ₹99
        </motion.p>
      </section>

      {/* Bundle Cards */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.2}>
          {bundles.map((bundle) => (
            <StaggerItem key={bundle.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 border border-green-800 rounded-2xl overflow-hidden flex flex-col card-hover hover:border-green-400 h-full"
              >
                {/* Card Header */}
                <div className="bg-green-950 p-6 text-center border-b border-green-800">
                  <motion.div
                    className="text-5xl mb-3"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {bundle.emoji}
                  </motion.div>
                  <h2 className="text-xl font-bold">{bundle.name}</h2>
                  <p className="text-gray-400 text-sm mt-2">{bundle.description}</p>
                </div>

                {/* Price */}
                <div className="text-center py-5 border-b border-gray-800">
                  <span className="text-gray-600 line-through text-lg mr-2">₹{bundle.original}</span>
                  <motion.span
                    className="text-4xl font-bold text-green-400 inline-block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                  >
                    ₹{bundle.price}
                  </motion.span>
                  <p className="text-gray-500 text-xs mt-1">One time payment • Lifetime access</p>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-2">
                    {bundle.features.map((f, i) => (
                      <motion.li
                        key={f}
                        className="flex items-center gap-2 text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 + 0.4 }}
                      >
                        <span className="text-green-400">✓</span> {f}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-6 pt-0">
                  <a
                    href="https://wa.me/916202823588?text=Hi%2C%20I%20want%20to%20buy%20the%20bundle"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl text-center transition btn-glow"
                  >
                    Buy Now — ₹99 Only 🚀
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* How to Get */}
      <section className="px-6 py-12 border-t border-gray-800 max-w-4xl mx-auto">
        <AnimatedSection variant="fadeIn">
          <h2 className="text-2xl font-bold text-center mb-10">
            How to <span className="text-green-400">Get It</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.15}>
          {steps.map((s) => (
            <StaggerItem key={s.step}>
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
                  {s.step}
                </motion.div>
                <div className="font-semibold text-sm mb-1">{s.title}</div>
                <div className="text-gray-500 text-xs">{s.desc}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* WhatsApp CTA */}
      <AnimatedSection variant="scaleUp" className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-lg mx-auto bg-gray-900 border border-green-800 rounded-2xl p-8 text-center card-hover hover:border-green-400/50 transition">
          <motion.div
            className="text-5xl mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💬
          </motion.div>
          <h2 className="text-2xl font-bold mb-2">Order Now</h2>
          <p className="text-gray-400 mb-6">
            Message on WhatsApp — you will get a quick reply
          </p>
          
          <a
            href="https://wa.me/916202823588?text=Hi%2C%20I%20want%20to%20buy%20the%20bundle"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition btn-glow"
          >
            WhatsApp → 6202823588
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Send a screenshot after payment — access is granted instantly
          </p>
        </div>
      </AnimatedSection>

    </div>
  )
}
