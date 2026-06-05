import PositionSizeClient from "./PositionSizeClient"

export const metadata = {
  title: "Position Size Calculator — How Many Shares to Buy",
  description:
    "Free position size calculator — apne capital aur risk % ke hisaab se kitne shares lene chahiye calculate karo.",
  keywords: ["position size calculator", "lot size calculator", "trading position size india"],
  openGraph: {
    title: "Position Size Calculator | AlphaWithShivam",
    description: "Calculate how many shares to buy based on your risk",
    url: "https://alphawithshivam.vercel.app/tools/position",
  },
}

export default function PositionSizePage() {
  return <PositionSizeClient />
}
