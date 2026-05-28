import { client } from "../../sanity/lib/client"
import { urlFor } from "../../sanity/lib/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"

async function getLatestPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) [0..2] {
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title
    }
  `)
}

export default async function Home() {
  const posts = await getLatestPosts()

  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <Navbar />
      

      {/* Hero */}
      <section className="text-center py-20 px-4 border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
        Stock Market <span className="text-green-400">Hindi Mein</span><br />
        Samjho Aur Invest Wisely.
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          Free tools, expert articles, and resources — for beginners to experts
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/blog"
            className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-lg transition">
            Read the Blog →
          </Link>
          <Link href="/tools"
            className="border border-gray-700 hover:border-green-400 px-6 py-3 rounded-lg transition">
            Try Free Tools
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-4 px-8 py-8 border-b border-gray-800">
        {[
          { num: "50+", label: "Articles" },
          { num: "5", label: "Free Tools" },
          { num: "10K+", label: "Readers" },
        ].map((s) => (
          <div key={s.label} className="bg-gray-900 rounded-xl p-5 text-center">
            <div className="text-2xl font-bold text-green-400">{s.num}</div>
            <div className="text-gray-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Latest Blog Posts */}
      <section className="px-8 py-10 border-b border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
          <Link href="/blog" className="text-green-400 text-sm hover:underline">See all →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
              <div className="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition overflow-hidden">
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
          ))}
        </div>
      </section>

      {/* Tools */}
        <section className="px-8 py-10 border-b border-gray-800">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Free Tools</h2>
          <Link href="/tools" className="text-green-400 text-sm hover:underline">See all →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "SIP Calculator", desc: "Calculate future value", href: "/tools/sip", ready: true },
            { name: "Risk/Reward", desc: "Calculate trade ratio", href: "/tools/rr", ready: false },
            { name: "Position Size", desc: "Find the right lot size", href: "/tools/position", ready: false },
            { name: "Brokerage Calc", desc: "Calculate brokerage charges", href: "/tools/brokerage", ready: false },
          ].map((tool) => (
            tool.ready ? (
              <Link href={tool.href} key={tool.name}>
                <div className="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition p-5 text-center">
                  <div className="text-2xl mb-2">🧮</div>
                  <div className="font-semibold text-sm">{tool.name}</div>
                  <div className="text-gray-500 text-xs mt-1">{tool.desc}</div>
                </div>
              </Link>
            ) : (
              <div key={tool.name} className="bg-gray-900 rounded-xl border border-gray-800 p-5 text-center opacity-50 cursor-not-allowed">
                <div className="text-2xl mb-2">🧮</div>
                <div className="font-semibold text-sm">{tool.name}</div>
                <div className="text-yellow-600 text-xs mt-1">Coming soon...</div>
              </div>
            )
          ))}
        </div>
        </section>

      {/* Resources */}
        <section className="px-8 py-10 border-b border-gray-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Free Resources</h2>
            <span className="text-yellow-600 text-sm">Coming soon...</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Candlestick PDF", type: "Beginner guide", emoji: "📄" },
              { name: "Trading Journal", type: "Excel template", emoji: "📊" },
              { name: "Beginner Checklist", type: "Free download", emoji: "✅" },
            ].map((res) => (
              <div key={res.name} className="bg-gray-900 rounded-xl border border-gray-800 p-5 flex gap-4 items-center opacity-50 cursor-not-allowed">
                <span className="text-3xl">{res.emoji}</span>
                <div>
                  <div className="font-semibold text-sm">{res.name}</div>
                  <div className="text-yellow-600 text-xs mt-1">Coming soon...</div>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* YouTube CTA */}
      <section className="px-8 py-10">
        <div className="bg-gray-900 rounded-2xl p-8 flex gap-6 items-center flex-wrap">
          <span className="text-6xl">📺</span>
          <div>
            <h2 className="text-2xl font-bold mb-2">Find Us on YouTube Too</h2>
            <p className="text-gray-400 mb-4">
              Stock market, trading strategies, and investing tips — simple videos every week
            </p>
            <a
              href="https://www.youtube.com/@AlphaWithShivam"
              target="_blank"
              className="bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-lg inline-block transition">
              ▶ Subscribe to the Channel
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}