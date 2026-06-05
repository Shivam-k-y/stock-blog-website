import BrokerageCalculatorClient from "./BrokerageCalculatorClient"

export const metadata = {
  title: "Brokerage Calculator — Zerodha & Upstox Charges",
  description:
    "Free brokerage calculator — Zerodha, Upstox aur Angel One ke delivery, intraday aur F&O charges calculate karo.",
  keywords: [
    "brokerage calculator",
    "zerodha brokerage calculator",
    "upstox charges calculator",
    "stock market charges india",
  ],
  openGraph: {
    title: "Brokerage Calculator | AlphaWithShivam",
    description: "Calculate Zerodha/Upstox trading charges",
    url: "https://alphawithshivam.vercel.app/tools/brokerage",
  },
}

export default function BrokeragePage() {
  return <BrokerageCalculatorClient />
}
