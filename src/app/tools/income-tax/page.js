import IncomeTaxClient from "./IncomeTaxClient"

export const metadata = {
  title: "Income Tax Calculator FY 2025-26 — Old & New Regime",
  description: "Free income tax calculator for FY 2025-26 — old regime aur new regime dono.",
  keywords: ["income tax calculator", "tax calculator india 2025"],
  openGraph: {
    title: "Income Tax Calculator FY 2025-26 | AlphaWithShivam",
    description: "Free income tax calculator — old & new regime",
    url: "https://alphawithshivam.vercel.app/tools/income-tax",
  },
}

export default function IncomeTaxPage() {
  return <IncomeTaxClient />
}