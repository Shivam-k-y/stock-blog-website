export const revalidate = 60
import { sanityFetch } from "../../sanity/lib/fetch"
import Navbar from "@/components/Navbar"
import HomeContent from "@/components/HomeContent"

async function getLatestPosts() {
  return await sanityFetch(`
    *[_type == "post"] | order(publishedAt desc) [0..2] {
      title,
      slug,
      publishedAt,
      mainImage,
      "categories": categories[]->title
    }
  `)
}

export const metadata = {
  title: "AlphaWithShivam — Stock Market Hindi Mein Sikho",
  description:
    "Free SIP calculator, income tax calculator, stock market blog aur resources — Hindi mein beginners ke liye.",
  openGraph: {
    title: "AlphaWithShivam — Stock Market Hindi Mein Sikho",
    description: "Free tools aur articles — Hindi mein",
    url: "https://alphawithshivam.vercel.app",
  },
}

export default async function Home() {
  const posts = await getLatestPosts()

  return (
    <>
      <Navbar />
      <HomeContent posts={posts} />
    </>
  )
}