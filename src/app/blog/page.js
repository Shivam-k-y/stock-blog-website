export const revalidate = 60
import { sanityFetch } from "../../../sanity/lib/fetch"
import { urlFor } from "../../../sanity/lib/image"
import Navbar from "@/components/Navbar"
import BlogContent from "@/components/BlogContent"

async function getPosts() {
  return await sanityFetch(`
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

export const metadata = {
  title: "Blog — Stock Market Articles Hindi Mein",
  description:
    "Stock market, trading, investing aur mutual funds ke baare mein Hindi mein articles — beginners ke liye.",
  openGraph: {
    title: "Blog | AlphaWithShivam",
    description: "Stock market articles Hindi mein",
    url: "https://alphawithshivam.vercel.app/blog",
  },
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <Navbar />
      <BlogContent posts={posts} />
    </>
  )
}