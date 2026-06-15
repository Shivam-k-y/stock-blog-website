import Navbar from "@/components/Navbar"
import BundlesContent from "@/components/BundlesContent"

export const metadata = {
  title: "Creator Bundles — Premium Content for ₹99",
  description:
    "Premium video editing bundles, reels packs, templates aur more — lifetime access for just ₹99.",
  openGraph: {
    title: "Bundles | AlphaWithShivam",
    description: "Premium creator bundles at ₹99",
    url: "https://alphawithshivam.vercel.app/bundles",
  },
}

export default function BundlesPage() {
  return (
    <>
      <Navbar />
      <BundlesContent />
    </>
  )
}
