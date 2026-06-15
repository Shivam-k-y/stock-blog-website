import Navbar from "@/components/Navbar"
import AboutContent from "@/components/AboutContent"

export const metadata = {
  title: "About — Shivam Kumar | AlphaWithShivam",
  description:
    "Shivam Kumar ke baare mein — stock market educator, web developer aur content creator from India.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutContent />
    </>
  )
}