import Link from "next/link"

const tools = [
  {
    name: "SIP Calculator",
    desc: "Calculate the future value of monthly investments",
    emoji: "📈",
    href: "/tools/sip",
    ready: true,
  },
  {
    name: "Risk/Reward Calculator",
    desc: "Calculate your trade risk/reward ratio",
    emoji: "⚖️",
    href: "/tools/rr",
    ready: false,
  },
  {
    name: "Position Size Calculator",
    desc: "Find the right lot size for your trade",
    emoji: "📊",
    href: "/tools/position",
    ready: false,
  },
  {
    name: "Brokerage Calculator",
    desc: "Calculate Zerodha/Upstox charges",
    emoji: "🧾",
    href: "/tools/brokerage",
    ready: false,
  },
]

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold text-green-400 mb-2">Free Tools</h1>
      <p className="text-gray-400 mb-8">Free calculators for the stock market</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
        {tools.map((tool) => (
          tool.ready ? (
            <Link href={tool.href} key={tool.name}>
              <div className="bg-gray-900 border border-gray-800 hover:border-green-400 transition rounded-2xl p-6 flex gap-4 items-start">
                <span className="text-4xl">{tool.emoji}</span>
                <div>
                  <h2 className="font-semibold text-lg">{tool.name}</h2>
                  <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
                  <span className="text-green-400 text-xs mt-2 inline-block">Use now →</span>
                </div>
              </div>
            </Link>
          ) : (
            <div key={tool.name}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex gap-4 items-start opacity-50 cursor-not-allowed">
              <span className="text-4xl">{tool.emoji}</span>
              <div>
                <h2 className="font-semibold text-lg">{tool.name}</h2>
                <p className="text-gray-400 text-sm mt-1">{tool.desc}</p>
                <span className="text-gray-600 text-xs mt-2 inline-block">Coming soon...</span>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  )
}