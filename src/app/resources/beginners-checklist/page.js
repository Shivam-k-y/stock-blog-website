import ChecklistClient from "./ChecklistClient"

export const metadata = {
  title: "Beginner's Checklist — Before Your First Trade",
  description:
    "Stock market beginner checklist — pehla trade place karne se pehle yeh sab complete karo. Free interactive guide.",
  keywords: [
    "stock market beginner checklist",
    "first trade checklist india",
    "how to start trading india",
  ],
  openGraph: {
    title: "Beginner's Checklist | AlphaWithShivam",
    description: "Everything you need before placing your first trade",
    url: "https://alphawithshivam.vercel.app/resources/beginners-checklist",
  },
}

export default function BeginnersChecklistPage() {
  return <ChecklistClient />
}
