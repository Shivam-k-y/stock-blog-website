"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"

// ← Yeh component ke BAHAR hona chahiye
const InputField = ({ label, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="text-sm text-gray-400 block mb-1">{label}</label>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const val = e.target.value.replace(/[^0-9]/g, "")
          onChange(val)
        }}
        placeholder={placeholder || "Enter amount in ₹"}
        className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-green-400 focus:outline-none"
      />
    </div>
  )

  export const metadata = {
    title: "Income Tax Calculator FY 2025-26 — Old & New Regime",
    description:
      "Free income tax calculator for FY 2025-26 — old regime aur new regime dono. Salary, capital gains, deductions sab include.",
    keywords: ["income tax calculator", "tax calculator india 2025", "new regime calculator", "old regime calculator"],
    openGraph: {
      title: "Income Tax Calculator FY 2025-26 | AlphaWithShivam",
      description: "Free income tax calculator — old & new regime",
      url: "https://alphawithshivam.vercel.app/tools/income-tax",
    },
  }

export default function IncomeTaxCalculator() {
  const [step, setStep] = useState("calculate")
  const [regime, setRegime] = useState("new")
  const [age, setAge] = useState("below60")

  // Income
  const [salary, setSalary] = useState("")
  const [rental, setRental] = useState("")
  const [business, setBusiness] = useState("")
  const [agriculture, setAgriculture] = useState("")
  const [other, setOther] = useState("")
  const [capitalGains, setCapitalGains] = useState("")

  // Exemptions
  const [hra, setHra] = useState("")
  const [lta, setLta] = useState("")

  // Deductions (Old Regime)
  const [sec80c, setSec80c] = useState("")
  const [nps, setNps] = useState("")
  const [homeLoan, setHomeLoan] = useState("")
  const [medicalIns, setMedicalIns] = useState("")
  const [otherDed, setOtherDed] = useState("")

  const [result, setResult] = useState(null)

  const n = (val) => parseFloat(val) || 0

  function calculateTax() {
    const grossIncome =
      n(salary) + n(rental) + n(business) +
      n(agriculture) + n(other) + n(capitalGains)

    let taxableIncome = grossIncome

    if (regime === "old") {
      // Standard deduction
      const standardDed = Math.min(n(salary), 50000)
      // Exemptions
      const totalExemptions = n(hra) + n(lta)
      // Deductions
      const total80c = Math.min(n(sec80c), 150000)
      const totalNps = Math.min(n(nps), 50000)
      const totalHomeLoan = Math.min(n(homeLoan), 200000)
      const totalMedical = Math.min(n(medicalIns), 25000)
      const totalOtherDed = n(otherDed)

      taxableIncome = grossIncome - standardDed - totalExemptions -
        total80c - totalNps - totalHomeLoan - totalMedical - totalOtherDed
    } else {
      // New regime — only standard deduction
      taxableIncome = grossIncome - Math.min(n(salary), 75000)
    }

    taxableIncome = Math.max(0, taxableIncome)

    let tax = 0

    if (regime === "new") {
      // New Regime FY 2025-26
      if (taxableIncome <= 300000) tax = 0
      else if (taxableIncome <= 700000) tax = (taxableIncome - 300000) * 0.05
      else if (taxableIncome <= 1000000) tax = 20000 + (taxableIncome - 700000) * 0.10
      else if (taxableIncome <= 1200000) tax = 50000 + (taxableIncome - 1000000) * 0.15
      else if (taxableIncome <= 1500000) tax = 80000 + (taxableIncome - 1200000) * 0.20
      else tax = 140000 + (taxableIncome - 1500000) * 0.30

      // Rebate u/s 87A — new regime (upto 7L)
      if (taxableIncome <= 700000) tax = 0

    } else {
      // Old Regime
      const limit = age === "above80" ? 500000 : age === "60to80" ? 300000 : 250000

      if (taxableIncome <= limit) tax = 0
      else if (taxableIncome <= 500000) tax = (taxableIncome - limit) * 0.05
      else if (taxableIncome <= 1000000) tax = (500000 - limit) * 0.05 + (taxableIncome - 500000) * 0.20
      else tax = (500000 - limit) * 0.05 + 100000 + (taxableIncome - 1000000) * 0.30

      // Rebate u/s 87A — old regime (upto 5L)
      if (taxableIncome <= 500000) tax = 0
    }

    const surcharge =
      taxableIncome > 50000000 ? tax * 0.37 :
      taxableIncome > 20000000 ? tax * 0.25 :
      taxableIncome > 10000000 ? tax * 0.15 :
      taxableIncome > 5000000 ? tax * 0.10 : 0

    const cess = (tax + surcharge) * 0.04
    const totalTax = Math.round(tax + surcharge + cess)
    const monthlyTax = Math.round(totalTax / 12)
    const effectiveRate = grossIncome > 0
      ? ((totalTax / grossIncome) * 100).toFixed(2)
      : 0

    setResult({
      grossIncome: Math.round(grossIncome),
      taxableIncome: Math.round(taxableIncome),
      baseTax: Math.round(tax),
      surcharge: Math.round(surcharge),
      cess: Math.round(cess),
      totalTax,
      monthlyTax,
      effectiveRate,
    })

    setStep("report")
  }

  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN")

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 py-10">

        <h1 className="text-3xl font-bold text-green-400 mb-1">
          Income Tax Calculator
        </h1>
        <p className="text-gray-400 mb-6">FY 2025-26 | AY 2026-27</p>

        {/* Tabs */}
        <div className="flex border-b border-gray-800 mb-8">
          <button
            onClick={() => setStep("calculate")}
            className={`px-6 py-3 text-sm font-semibold transition ${
              step === "calculate"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-500"
            }`}>
            Calculate
          </button>
          <button
            onClick={() => result && setStep("report")}
            className={`px-6 py-3 text-sm font-semibold transition ${
              step === "report"
                ? "text-green-400 border-b-2 border-green-400"
                : "text-gray-500"
            }`}>
            Report
          </button>
        </div>

        {step === "calculate" && (
          <div className="space-y-6">

            {/* Assessment Year */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Assessment Year</h2>
              <div className="bg-gray-800 rounded-xl px-4 py-3 text-gray-400 text-sm">
                FY 2025-26
              </div>
            </div>

            {/* Personal Details */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Personal Details</h2>

              <div className="mb-4">
                <label className="text-sm text-gray-400 block mb-2">Tax Regime</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "new", label: "New Regime", sub: "Default — lower rates" },
                    { val: "old", label: "Old Regime", sub: "With deductions" },
                  ].map((r) => (
                    <button key={r.val} onClick={() => setRegime(r.val)}
                      className={`p-3 rounded-xl border text-left transition ${
                        regime === r.val
                          ? "border-green-400 bg-green-950"
                          : "border-gray-700 hover:border-gray-600"
                      }`}>
                      <div className="text-sm font-semibold">{r.label}</div>
                      <div className="text-xs text-gray-400 mt-1">{r.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <label className="text-sm text-gray-400 block mb-2">Age Group</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: "below60", label: "Below 60" },
                    { val: "60to80", label: "60 - 80" },
                    { val: "above80", label: "Above 80" },
                  ].map((a) => (
                    <button key={a.val} onClick={() => setAge(a.val)}
                      className={`py-2 px-3 rounded-xl border text-sm transition ${
                        age === a.val
                          ? "border-green-400 bg-green-950 text-green-400"
                          : "border-gray-700 text-gray-400 hover:border-gray-600"
                      }`}>
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Income */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Income Details</h2>
              <InputField label="Income from Salary (Annual)" value={salary} onChange={setSalary} />
              <InputField label="Income from Rental Property" value={rental} onChange={setRental} />
              <InputField label="Income from Business or Profession" value={business} onChange={setBusiness} />
              <InputField label="Income from Agriculture" value={agriculture} onChange={setAgriculture} />
              <InputField label="Income from Other Sources" value={other} onChange={setOther} />
              <InputField label="Income from Capital Gains" value={capitalGains} onChange={setCapitalGains} />
            </div>

            {/* Exemptions — Old Regime only */}
            {regime === "old" && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="font-bold text-lg mb-4">Exemptions</h2>
                <InputField label="HRA Exemption" value={hra} onChange={setHra} />
                <InputField label="LTA Exemption" value={lta} onChange={setLta} />
              </div>
            )}

            {/* Deductions — Old Regime only */}
            {regime === "old" && (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="font-bold text-lg mb-4">Deductions</h2>
                <InputField
                  label="Section 80C (Max ₹1,50,000) — PPF, ELSS, LIC etc."
                  value={sec80c} onChange={setSec80c} />
                <InputField
                  label="NPS — Section 80CCD(1B) (Max ₹50,000)"
                  value={nps} onChange={setNps} />
                <InputField
                  label="Home Loan Interest — Section 24 (Max ₹2,00,000)"
                  value={homeLoan} onChange={setHomeLoan} />
                <InputField
                  label="Medical Insurance — Section 80D (Max ₹25,000)"
                  value={medicalIns} onChange={setMedicalIns} />
                <InputField
                  label="Other Deductions"
                  value={otherDed} onChange={setOtherDed} />
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={calculateTax}
                className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition text-lg">
                Calculate Tax
              </button>
              <button
                onClick={() => {
                  setSalary(""); setRental(""); setBusiness("")
                  setAgriculture(""); setOther(""); setCapitalGains("")
                  setHra(""); setLta(""); setSec80c(""); setNps("")
                  setHomeLoan(""); setMedicalIns(""); setOtherDed("")
                  setResult(null); setStep("calculate")
                }}
                className="px-6 bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 rounded-xl transition">
                Reset
              </button>
            </div>

          </div>
        )}

        {/* Report */}
        {step === "report" && result && (
          <div className="space-y-4">

            {/* Total Tax */}
            <div className="bg-green-950 border border-green-800 rounded-2xl p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Total Tax Payable</p>
              <p className="text-4xl font-bold text-green-400">{fmt(result.totalTax)}</p>
              <p className="text-gray-500 text-sm mt-2">
                Monthly TDS: {fmt(result.monthlyTax)} | Effective Rate: {result.effectiveRate}%
              </p>
            </div>

            {/* Breakdown */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <h2 className="font-bold text-lg mb-4">Tax Breakdown</h2>
              <div className="space-y-3">
                {[
                  { label: "Gross Income", val: result.grossIncome, color: "text-white" },
                  { label: "Taxable Income", val: result.taxableIncome, color: "text-yellow-400" },
                  { label: "Base Tax", val: result.baseTax, color: "text-red-400" },
                  { label: "Surcharge", val: result.surcharge, color: "text-red-400" },
                  { label: "Health & Education Cess (4%)", val: result.cess, color: "text-red-400" },
                ].map((item) => (
                  <div key={item.label}
                    className="flex justify-between items-center py-2 border-b border-gray-800">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className={`font-semibold ${item.color}`}>{fmt(item.val)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold">Total Tax Payable</span>
                  <span className="font-bold text-green-400 text-lg">{fmt(result.totalTax)}</span>
                </div>
              </div>
            </div>

            {/* Regime Info */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
              <p className="text-sm text-gray-400">
                Calculated under: <span className="text-green-400 font-semibold">
                  {regime === "new" ? "New Tax Regime" : "Old Tax Regime"}
                </span> | Age: <span className="text-green-400 font-semibold">
                  {age === "below60" ? "Below 60" : age === "60to80" ? "60-80 years" : "Above 80 years"}
                </span>
              </p>
              <p className="text-xs text-gray-600 mt-2">
                * This is an estimate only. Consult a CA for accurate tax filing.
              </p>
            </div>

            <button
              onClick={() => setStep("calculate")}
              className="w-full border border-gray-700 hover:border-green-400 py-3 rounded-xl transition text-sm">
              ← Back to Calculate
            </button>

          </div>
        )}
      </div>
    </div>
  )
}