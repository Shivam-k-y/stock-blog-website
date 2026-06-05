import RiskRewardClient from "./RiskRewardClient"

export const metadata = {
  title: "Risk/Reward Calculator — Trade Ratio Calculator",
  description:
    "Free risk reward calculator — entry, stop loss aur target daalo aur apne trade ka R:R ratio dekho.",
  keywords: ["risk reward calculator", "risk reward ratio", "trading calculator india"],
  openGraph: {
    title: "Risk/Reward Calculator | AlphaWithShivam",
    description: "Calculate your trade risk-reward ratio",
    url: "https://alphawithshivam.vercel.app/tools/rr",
  },
}

export default function RiskRewardPage() {
  return <RiskRewardClient />
}
