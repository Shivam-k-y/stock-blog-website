// ← "use client" HATAO upar se

import { Suspense } from "react"
import SIPCalculatorClient from "./SIPCalculatorClient"

export const metadata = {
  title: "SIP Calculator — Monthly Investment Future Value",
  description: "Free SIP calculator — apna monthly investment daalo aur dekho 10-20 saal mein kitna banega.",
  keywords: ["sip calculator", "sip calculator india", "mutual fund calculator"],
  openGraph: {
    title: "SIP Calculator | AlphaWithShivam",
    description: "Free SIP calculator for Indian investors",
    url: "https://alphawithshivam.vercel.app/tools/sip",
  },
}

export default function SIPPage() {
  return <SIPCalculatorClient />
}