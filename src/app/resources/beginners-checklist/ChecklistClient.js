"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar"

const SECTIONS = [
  {
    title: "Account Setup",
    emoji: "🏦",
    items: [
      "Demat + trading account khola (Zerodha, Upstox, etc.)",
      "Bank account link kiya aur mandate set kiya",
      "KYC complete kiya (PAN, Aadhaar verified)",
      "Two-factor authentication (2FA) enable kiya",
    ],
  },
  {
    title: "Basics Seekho",
    emoji: "📚",
    items: [
      "Samjha — stock, index, NSE aur BSE kya hote hain",
      "Delivery, intraday aur F&O mein difference samjha",
      "Order types seekhe — market, limit, stop-loss",
      "Candlestick patterns ki basic samajh bana li",
    ],
  },
  {
    title: "Financial Preparation",
    emoji: "💰",
    items: [
      "Sirf wahi paisa invest kiya jo lose kar sakte ho",
      "Emergency fund ready hai (3–6 mahine ka kharcha)",
      "Monthly trading/investment budget fix kiya",
      "High-interest debt (credit card, etc.) pehle clear kiya",
    ],
  },
  {
    title: "Risk Management",
    emoji: "🛡️",
    items: [
      "Per trade max risk decide kiya (1–2% rule)",
      "Stop loss kya hota hai aur kaise lagate hain — samjha",
      "Borrowed / loan money se trade nahi karunga",
      "Ek hi stock mein saara paisa nahi lagaunga (diversify)",
    ],
  },
  {
    title: "Charges & Taxes",
    emoji: "🧾",
    items: [
      "Brokerage, STT, GST, stamp duty samjhe",
      "Brokerage calculator se ek sample trade calculate kiya",
      "STCG aur LTCG tax basics padhe",
      "DP charges aur annual maintenance fees check kiye",
    ],
  },
  {
    title: "Practice Before Real Trade",
    emoji: "🎯",
    items: [
      "Paper trading / virtual trading try kiya",
      "Bina trade kiye 2–4 hafte market observe kiya",
      "Sirf 1–2 familiar stocks se shuru karunga",
      "Pehla trade chhota size mein hoga (learning trade)",
    ],
  },
  {
    title: "Tools Ready",
    emoji: "🛠️",
    items: [
      "Charting tool set up kiya (TradingView, etc.)",
      "Trading journal template download kiya",
      "SIP / position size calculator try kiya",
      "Reliable news source follow kiya (not random tips)",
    ],
  },
  {
    title: "Har Trade Se Pehle",
    emoji: "✅",
    items: [
      "Entry, stop loss aur target pehle se decide kiya",
      "Risk:Reward ratio check kiya (minimum 1:2)",
      "Trade ka reason journal mein likha",
      "FOMO ya revenge trading se bacha — plan follow kiya",
    ],
  },
]

const STORAGE_KEY = "aws-beginner-checklist"

export default function ChecklistClient() {
  const [checked, setChecked] = useState({})
  const [loaded, setLoaded] = useState(false)

  const allItems = SECTIONS.flatMap((s, si) =>
    s.items.map((text, ii) => ({ id: `${si}-${ii}`, text, section: s.title }))
  )
  const total = allItems.length
  const done = allItems.filter((item) => checked[item.id]).length
  const pct = total > 0 ? Math.round((done / total) * 100) : 0

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setChecked(JSON.parse(saved))
    } catch { /* ignore */ }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked))
  }, [checked, loaded])

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  const reset = () => {
    if (confirm("Saare checkmarks reset kar doon?")) setChecked({})
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <Link href="/resources" className="text-gray-500 hover:text-green-400 text-sm transition">
          ← Back to Resources
        </Link>

        <h1 className="text-3xl font-bold mt-4 mb-2">
          Beginner&apos;s <span className="text-green-400">Checklist</span> ✅
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Apna pehla trade place karne se pehle yeh sab complete karo.
          Progress automatically save hoti hai is browser mein.
        </p>

        {/* Progress */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">Your Progress</span>
            <span className="text-green-400 font-bold">{done}/{total} ({pct}%)</span>
          </div>
          <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
            <div
              className="bg-green-500 h-full rounded-full transition-all duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
          {pct === 100 && (
            <p className="text-green-400 text-sm mt-3 font-semibold">
              🎉 Badhai ho! Aap pehle trade ke liye ready ho. Chhote size se shuru karo!
            </p>
          )}
          {done > 0 && (
            <button onClick={reset} className="text-gray-600 hover:text-gray-400 text-xs mt-3 transition">
              Reset checklist
            </button>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {SECTIONS.map((section, si) => (
            <div key={section.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                <span>{section.emoji}</span>
                {section.title}
                <span className="text-xs text-gray-600 font-normal ml-auto">
                  {section.items.filter((_, ii) => checked[`${si}-${ii}`]).length}/{section.items.length}
                </span>
              </h2>
              <ul className="space-y-3">
                {section.items.map((text, ii) => {
                  const id = `${si}-${ii}`
                  const isChecked = !!checked[id]
                  return (
                    <li key={id}>
                      <label className={`flex items-start gap-3 cursor-pointer group ${isChecked ? "opacity-60" : ""}`}>
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggle(id)}
                          className="mt-1 w-4 h-4 accent-green-500 shrink-0 cursor-pointer"
                        />
                        <span className={`text-sm leading-relaxed ${isChecked ? "line-through text-gray-500" : "text-gray-300 group-hover:text-white"}`}>
                          {text}
                        </span>
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 bg-gray-900 border border-green-800 rounded-2xl p-6 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Checklist complete? Ab tools use karke apna pehla trade plan karo.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/tools/position"
              className="bg-green-500 hover:bg-green-400 text-black text-sm font-bold px-5 py-2.5 rounded-xl transition">
              Position Size Calculator →
            </Link>
            <Link href="/tools/rr"
              className="border border-gray-700 hover:border-green-400 text-sm font-bold px-5 py-2.5 rounded-xl transition">
              Risk/Reward Calculator →
            </Link>
          </div>
        </div>

        {/* PDF Download — Naya Section */}
  <div className="mt-6 pt-6 border-t border-gray-800">
    <p className="text-gray-400 text-sm mb-3">
      📄 Yeh checklist PDF mein bhi download kar sakte ho
    </p>
    <a
      href="https://drive.google.com/uc?export=download&id=1TprYbr1dpwVez9hSspg4-ShyDpO2tvNk"
      target="_blank"
      download
      className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-green-400 text-white text-sm font-bold px-6 py-3 rounded-xl transition">
      ⬇ Download Checklist PDF — Free
    </a>
  </div>

        <p className="text-gray-600 text-xs text-center mt-8">
          * Educational purpose only. Stock market investments are subject to market risks.
        </p>
      </div>
    </div>
  )
}
