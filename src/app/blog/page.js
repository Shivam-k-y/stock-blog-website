import { client } from "../../../sanity/lib/client"
import { urlFor } from "../../../sanity/lib/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"

async function getPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      publishedAt,
      mainImage,
      "author": author->name,
      "categories": categories[]->title,
      "excerpt": array::join(string::split(pt::text(body), "")[0..200], "")
    }
  `)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
      <div className="min-h-screen bg-gray-950 text-white ">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="text-center border-b border-gray-800 py-5 px-4">
        <h1 className="text-4xl font-bold mb-4 leading-tight"> <span className="text-green-400"> Blog </span> </h1>
      </section>

      {/* Blog */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="max-w-2xl mx-auto">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug.current}`} key={post.slug.current}>
            <div className="bg-gray-900 rounded-xl mb-6 border border-gray-800 hover:border-green-400 transition overflow-hidden">
              
              {/* Image */}
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(600).url()}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <div className="p-5">
                {/* Category */}
                {post.categories && (
                  <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
                    {post.categories[0]}
                  </span>
                )}

                <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-400 text-sm mt-2">{post.excerpt}...</p>

                {/* Author + Date */}
                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span>✍️ {post.author}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString("en-IN")}</span>
                </div>

                <p className="text-green-500 text-sm mt-3">Read More →</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </section>
    </div>
  )
}