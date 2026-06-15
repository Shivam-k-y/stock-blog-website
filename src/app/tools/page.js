import Navbar from "@/components/Navbar"
import ToolsContent from "@/components/ToolsContent"

export const metadata = {
  title: "Free Stock Market Tools — SIP & Tax Calculator",
  description:
    "Free online calculators for Indian investors — SIP calculator, income tax calculator, position size calculator aur more.",
  openGraph: {
    title: "Free Tools | AlphaWithShivam",
    description: "Free stock market calculators",
    url: "https://alphawithshivam.vercel.app/tools",
  },
}

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <ToolsContent />
    </>
  )
}