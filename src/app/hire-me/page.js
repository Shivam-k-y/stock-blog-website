import Navbar from "@/components/Navbar"
import HireMeContent from "@/components/HireMeContent"

export const metadata = {
  title: "Hire Me — Finance Website Development",
  description:
    "Get a professional finance website built by a stock market expert — affordable prices, fast delivery.",
  openGraph: {
    title: "Hire Me | AlphaWithShivam",
    description: "Finance website development services",
    url: "https://alphawithshivam.vercel.app/hire-me",
  },
}

export default function HireMePage() {
  return (
    <>
      <Navbar />
      <HireMeContent />
    </>
  )
}
