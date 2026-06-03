import Navbar from "@/components/Navbar"
import Link from "next/link"

export const metadata = {
  title: "About — Shivam Kumar | AlphaWithShivam",
  description:
    "Shivam Kumar ke baare mein — stock market educator, web developer aur content creator from India.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-14">

        {/* Hero */}
        <div className="flex flex-col md:flex-row gap-8 items-center mb-14 border-b border-gray-800 pb-14">
          <div className="w-32 h-32 rounded-full bg-green-900 border-4 border-green-400 flex items-center justify-center text-5xl shrink-0">
            👤
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Hey, I'm <span className="text-green-400">Shivam Kumar</span> 👋
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Stock market educator, web developer and content creator from India.
              I believe financial education should be free and accessible to everyone —
              that's why I created AlphaWithShivam.
            </p>
            <div className="flex gap-3 mt-4 flex-wrap">
              <a href="https://www.youtube.com/@AlphaWithShivam" target="_blank"
                className="bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition">
                ▶ YouTube
              </a>
              <a href="https://wa.me/916202823588" target="_blank"
                className="bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-lg transition">
                💬 WhatsApp
              </a>
              <Link href="/hire-me"
                className="border border-gray-700 hover:border-green-400 text-sm font-bold px-4 py-2 rounded-lg transition">
                Hire Me →
              </Link>
            </div>
          </div>
        </div>

        {/* My Story */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">
            My <span className="text-green-400">Story</span>
          </h2>
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I started my stock market journey like most beginners —
              confused, overwhelmed and losing money. Most content online
              was either in English or too complicated to understand.
            </p>
            <p>
              That's when I decided to start creating content in Hindi —
              simple, practical and beginner-friendly. No jargon,
              no unnecessary complexity — just clear explanations that
              actually help people make better financial decisions.
            </p>
            <p>
              Along with stock market, I also have a background in web
              development — which is why this website exists. I built
              AlphaWithShivam from scratch using Next.js, Sanity CMS and
              Tailwind CSS — so I could give you the best experience possible.
            </p>
          </div>
        </section>

        {/* What I Do */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            What I <span className="text-green-400">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
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
            ].map((item) => (
              <div key={item.title}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex gap-4">
                <span className="text-3xl">{item.emoji}</span>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">
            My <span className="text-green-400">Skills</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Stock Market", "Technical Analysis", "Fundamental Analysis",
              "Options Trading", "Mutual Funds", "Next.js", "React",
              "Tailwind CSS", "Node.js", "Sanity CMS", "SEO", "Content Creation",
            ].map((skill) => (
              <span key={skill}
                className="bg-gray-900 border border-gray-800 hover:border-green-400 transition text-sm px-3 py-1.5 rounded-full text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mb-12">
          <div className="bg-yellow-950 border border-yellow-800 rounded-2xl p-5">
            <h3 className="font-bold text-yellow-400 mb-2">⚠️ Disclaimer</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              All content on AlphaWithShivam is for educational purposes only.
              Nothing on this website should be considered as financial advice.
              Stock market investments are subject to market risks —
              please do your own research before investing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">
            Let's <span className="text-green-400">Connect!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Have a question, collaboration idea or want a website built?
            Let's talk!
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://wa.me/916202823588" target="_blank"
              className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl transition">
              💬 WhatsApp Karo
            </a>
            <Link href="/hire-me"
              className="border border-gray-700 hover:border-green-400 px-6 py-3 rounded-xl transition">
              Hire Me →
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}