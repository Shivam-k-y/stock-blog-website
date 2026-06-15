"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { urlFor } from "../../sanity/lib/image"
import AnimatedSection from "@/components/AnimatedSection"
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer"

function BlogSkeleton() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-xl overflow-hidden">
          <div className="skeleton h-48 w-full" />
          <div className="bg-gray-900 p-5 space-y-3">
            <div className="skeleton h-4 w-20 rounded-full" />
            <div className="skeleton h-6 w-3/4" />
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-2/3" />
            <div className="flex justify-between">
              <div className="skeleton h-3 w-24" />
              <div className="skeleton h-3 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function BlogContent({ posts }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Hero */}
      <AnimatedSection variant="fadeIn">
        <section className="text-center border-b border-gray-800 py-5 px-4">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            <span className="text-green-400"> Blog </span>
          </h1>
        </section>
      </AnimatedSection>

      {/* Blog Posts */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="max-w-2xl mx-auto">
          {posts.length === 0 && (
            <p className="text-gray-500 text-center py-8">
              Blog posts load nahi ho paaye. Baad mein dubara try karo.
            </p>
          )}

          <StaggerContainer className="space-y-6" staggerDelay={0.12}>
            {posts.map((post) => (
              <StaggerItem key={post.slug.current}>
                <Link href={`/blog/${post.slug.current}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gray-900 rounded-xl border border-gray-800 hover:border-green-400 transition overflow-hidden card-hover"
                  >
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
                  </motion.div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
