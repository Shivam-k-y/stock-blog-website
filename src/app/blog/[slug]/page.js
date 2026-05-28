import { client } from "../../../../sanity/lib/client"
import { urlFor } from "../../../../sanity/lib/image"
import { PortableText } from "@portabletext/react"
import Navbar from "@/components/Navbar"

async function getPost(slug) {
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      title,
      excerpt,
      body,
      publishedAt,
      mainImage,
      "author": author->name,
      "categories": categories[]->title
    }
  `, { slug })
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <Navbar />

      {/* Cover Image */}
      {/* {post.mainImage && (
        <img
          src={urlFor(post.mainImage).width(1200).url()}
          alt={post.title}
          className="w-full h-72 object-cover"
        />
      )} */}

      <div className="max-w-2xl mx-auto p-8">

        {/* Category */}
        {post.categories && (
          <span className="text-xs bg-green-900 text-green-400 px-2 py-1 rounded-full">
            {post.categories[0]}
          </span>
        )}

        <h1 className="text-3xl font-bold text-green-400 mt-4 mb-2">
          {post.title}
        </h1>

        {/* Author + Date */}
        <div className="flex gap-4 text-sm text-gray-500 mb-8">
          <span>✍️ {post.author}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString("en-IN")}</span>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-green max-w-none">
          <PortableText value={post.body} />
        </div>

      </div>
    </div>
  )
}