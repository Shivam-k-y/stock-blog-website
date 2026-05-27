import Link from "next/link"
import Navbar from "@/components/Navbar"

const services = [
  {
    emoji: "🌐",
    name: "Stock Market Website",
    desc: "Blog, tools aur resources ke saath complete website",
    time: "5-7 days",
    price: "₹8,000 - ₹20,000",
  },
  {
    emoji: "📚",
    name: "Trading Course Website",
    desc: "Course sell karne ke liye professional landing page",
    time: "4-6 days",
    price: "₹10,000 - ₹25,000",
  },
  {
    emoji: "🧮",
    name: "Finance Tools",
    desc: "SIP, brokerage, position size calculators",
    time: "2-3 days",
    price: "₹3,000 - ₹8,000",
  },
  {
    emoji: "✍️",
    name: "Finance Blog Setup",
    desc: "Sanity CMS ke saath complete blog website",
    time: "3-5 days",
    price: "₹5,000 - ₹15,000",
  },
  {
    emoji: "📺",
    name: "YouTube Channel Website",
    desc: "Creator ke liye personal brand website",
    time: "3-5 days",
    price: "₹5,000 - ₹12,000",
  },
  {
    emoji: "📦",
    name: "Digital Product Page",
    desc: "Bundle ya course sell karne ke liye sales page",
    time: "1-2 days",
    price: "₹2,000 - ₹5,000",
  },
]

const process = [
  { step: "01", title: "WhatsApp Karo", desc: "Project ke baare mein baat karo — free consultation" },
  { step: "02", title: "Quote Milega", desc: "24 ghante mein price aur timeline bataunga" },
  { step: "03", title: "50% Advance", desc: "Kaam shuru karne se pehle half payment" },
  { step: "04", title: "Website Ready", desc: "Time pe deliver — revisions free hain" },
]

const faqs = [
  {
    q: "Kya aap sirf finance websites banate ho?",
    a: "Main finance niche mein specialize karta hun kyunki mujhe stock market ka bhi knowledge hai — isliye better websites banta hun is field mein.",
  },
  {
    q: "Hosting aur domain ka kya?",
    a: "Main Vercel pe free hosting setup kar deta hun. Domain alag se lena hoga — Namecheap pe ~₹500/year milta hai.",
  },
  {
    q: "Revisions kitni baar milegi?",
    a: "Delivery ke baad 3 free revisions milenge. Major changes ke liye alag charge hoga.",
  },
  {
    q: "Payment kaise karein?",
    a: "UPI, bank transfer ya any other method — jo convenient ho.",
  },
]

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
          Finance <span className="text-green-400">Website</span> Banwao<br />
          Stock Market Expert Se
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Main ek web developer hun jo stock market bhi samjhta hai —
          isliye finance websites better banata hun
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://wa.me/916202823588?text=Hi%20Shivam%2C%20mujhe%20website%20banwani%20hai"
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-3 rounded-xl transition">
            💬 WhatsApp Karo
          </a>
          <a href="#services"
            className="border border-gray-700 hover:border-green-400 px-8 py-3 rounded-xl transition">
            Services Dekho →
          </a>
        </div>
      </section>

      {/* Why Me */}
      <section className="px-6 py-12 border-b border-gray-800 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Mujhe Kyun <span className="text-green-400">Choose Karo?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { emoji: "📈", title: "Stock Market Knowledge", desc: "Sirf developer nahi hun — finance bhi samjhta hun. Isliye teri website ka content aur tools better hoga." },
            { emoji: "⚡", title: "Fast Delivery", desc: "Simple websites 2-3 din mein, complex projects 7 din mein — time waste nahi karta." },
            { emoji: "💰", title: "Affordable Price", desc: "Agency se ₹50,000 mein jo milega woh main ₹10,000 mein deta hun — quality same." },
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
            Kya Kya <span className="text-green-400">Bana Sakta Hun?</span>
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
            Kaam Kaise <span className="text-green-400">Hota Hai?</span>
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
            Mera <span className="text-green-400">Portfolio</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-green-800 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold">AlphaWithShivam</h3>
                <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">Live ✅</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Stock market blog + free tools + resources website —
                Next.js, Sanity CMS, Tailwind CSS se banaya
              </p>
              <div className="flex gap-2 flex-wrap mb-4">
                {["Next.js", "Sanity CMS", "Tailwind", "Vercel"].map((tag) => (
                  <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <Link href="/" className="text-green-400 text-sm hover:underline">
                Website dekho →
              </Link>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center justify-center text-center">
              <div>
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-gray-400 text-sm">
                  Tera project yahan dikh sakta hai!<br />
                  Pehle client ban jao.
                </p>
                
                  <a
                    href="https://wa.me/916202823588?text=Hi%20Shivam%2C%20mujhe%20website%20banwani%20hai"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-green-400 text-sm hover:underline">
                    Baat karo →
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
            Aksar Pooche Jaane Wale <span className="text-green-400">Sawaal</span>
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
            Baat Karte Hain?
          </h2>
          <p className="text-gray-400 mb-6">
            Free consultation ke liye WhatsApp karo — project discuss karenge,
            quote dunga, kaam shuru karenge
          </p>
          
          <a
            href="https://wa.me/916202823588?text=Hi%20Shivam%2C%20mujhe%20website%20banwani%20hai"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-4 rounded-xl text-lg transition">
            WhatsApp Karo → 6202823588
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Usually 1-2 ghante mein reply karta hun
          </p>
        </div>
      </section>

    </div>
  )
}