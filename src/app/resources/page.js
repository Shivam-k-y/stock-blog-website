import Navbar from "@/components/Navbar"
import ResourcesContent from "@/components/ResourcesContent"

export const metadata = {
  title: "Free Resources — Stock Market Books & Tools",
  description:
    "Best stock market books, free PDF downloads aur useful tools — Indian investors ke liye curated resources.",
  openGraph: {
    title: "Resources | AlphaWithShivam",
    description: "Best stock market books aur free resources",
    url: "https://alphawithshivam.vercel.app/resources",
  },
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <ResourcesContent />
    </>
  )
}