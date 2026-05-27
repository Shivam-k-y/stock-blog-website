import Link from "next/link"
import Navbar from "@/components/Navbar"

const bundles = [
  {
    id: 1,
    name: "The 500GB Creator Editor Bundle",
    emoji: "🎬",
    price: 99,
    original: 4999,
    description: "Video editors ke liye ultimate bundle — templates, LUTs, transitions, sound effects aur bahut kuch!",
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
  { step: "01", title: "WhatsApp karo", desc: "6202823588 pe message bhejo" },
  { step: "02", title: "Payment karo", desc: "₹99 UPI/bank transfer karo" },
  { step: "03", title: "Screenshot bhejo", desc: "Payment proof WhatsApp pe bhejo" },
  { step: "04", title: "Access pao", desc: "Turant bundle link mil jaayega" },
]

export default function BundlesPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      {/* Hero */}
      <section className="text-center py-14 px-4 border-b border-gray-800">
        <span className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full font-semibold">
          LIMITED TIME OFFER
        </span>
        <h1 className="text-4xl font-bold mt-4 mb-3">
          Creator <span className="text-green-400">Bundles</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-lg mx-auto">
          Video creators ke liye premium bundles — sirf ₹99 mein lifetime access
        </p>
      </section>

      {/* Bundle Cards */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bundles.map((bundle) => (
            <div key={bundle.id}
              className="bg-gray-900 border border-green-800 rounded-2xl overflow-hidden flex flex-col">

              {/* Card Header */}
              <div className="bg-green-950 p-6 text-center border-b border-green-800">
                <div className="text-5xl mb-3">{bundle.emoji}</div>
                <h2 className="text-xl font-bold">{bundle.name}</h2>
                <p className="text-gray-400 text-sm mt-2">{bundle.description}</p>
              </div>

              {/* Price */}
              <div className="text-center py-5 border-b border-gray-800">
                <span className="text-gray-600 line-through text-lg mr-2">₹{bundle.original}</span>
                <span className="text-4xl font-bold text-green-400">₹{bundle.price}</span>
                <p className="text-gray-500 text-xs mt-1">One time payment • Lifetime access</p>
              </div>

              {/* Features */}
              <div className="p-6 flex-1">
                <ul className="space-y-2">
                  {bundle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 pt-0">
                <a
                  href="https://wa.me/916202823588?text=Hi%2C%20I%20want%20to%20buy%20the%20bundle"
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-xl text-center transition"
                >
                  Buy Now — ₹99 Only 🚀
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to Get */}
      <section className="px-6 py-12 border-t border-gray-800 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">
          Kaise <span className="text-green-400">Milega?</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {steps.map((s) => (
            <div key={s.step} className="bg-gray-900 border border-gray-800 rounded-xl p-5 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{s.step}</div>
              <div className="font-semibold text-sm mb-1">{s.title}</div>
              <div className="text-gray-500 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-lg mx-auto bg-gray-900 border border-green-800 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">💬</div>
          <h2 className="text-2xl font-bold mb-2">Abhi Order Karo</h2>
          <p className="text-gray-400 mb-6">
            WhatsApp pe message karo — turant reply milega
          </p>
          
            <a
              href="https://wa.me/916202823588?text=Hi%2C%20I%20want%20to%20buy%20the%20bundle"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-xl text-lg transition"
            >
              WhatsApp Karo → 6202823588
            </a>
          <p className="text-gray-600 text-xs mt-4">
            Payment ke baad screenshot bhejo — turant access milega
          </p>
        </div>
      </section>

    </div>
  )
}