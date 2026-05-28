import Link from "next/link"
import Navbar from "@/components/Navbar"

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

const process = [
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

export default function HireMePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="text-center py-16 px-4 border-b border-gray-800">
        <span className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full font-semibold">
          AVAILABLE FOR WORK ✅
        </span>
        <h1 className="text-4xl font-bold mt-5 mb-4">
          Get a <span className="text-green-400">Finance Website</span> Built<br />
          By a Stock Market Expert
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          I am a web developer who also understands the stock market —
          so I build better finance websites
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition">
            💬 Message on WhatsApp
          </a>
          <a href="#services"
            className="border border-gray-700 hover:border-green-400 px-8 py-3 rounded-xl transition">
            View Services →
          </a>
        </div>
      </section>

      {/* Why Me */}
      <section className="px-6 py-12 border-b border-gray-800 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why <span className="text-green-400">Choose Me?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { emoji: "📈", title: "Stock Market Knowledge", desc: "Not just a developer — I understand finance too. Your website content and tools will be stronger." },
            { emoji: "⚡", title: "Fast Delivery", desc: "Simple websites in 2–3 days, complex projects in 7 days — no wasted time." },
            { emoji: "💰", title: "Affordable Price", desc: "What agencies charge ₹50,000 for, I deliver at ₹10,000 — same quality." },
          ].map((item) => (
            <div key={item.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            What Can I <span className="text-green-400">Build?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <div key={service.name}
                className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-6 flex gap-4">
                <span className="text-4xl">{service.emoji}</span>
                <div className="flex-1">
                  <h3 className="font-bold mb-1">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.desc}</p>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">⏱ {service.time}</span>
                    <span className="text-green-400 font-semibold">{service.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            How Does It <span className="text-green-400">Work?</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {process.map((p) => (
              <div key={p.step} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{p.step}</div>
                <div className="font-semibold text-sm mb-1">{p.title}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            My <span className="text-green-400">Portfolio</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-green-800 rounded-2xl p-6">
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
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-3">🚀</div>
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked <span className="text-green-400">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                <h3 className="font-semibold mb-2 text-green-400">Q: {faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-5xl mb-4">💬</div>
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
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition">
            WhatsApp → 6202823588
          </a>
          <p className="text-gray-600 text-xs mt-4">
            I usually reply within 1–2 hours
          </p>
        </div>
      </section>

    </div>
  )
}
