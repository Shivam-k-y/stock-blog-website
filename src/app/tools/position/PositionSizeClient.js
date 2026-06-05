"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"

const InputField = ({ label, value, onChange, placeholder, hint }) => (
  <div className="mb-4">
    <label className="text-sm text-gray-400 block mb-1">{label}</label>
    <input
      type="text"
      inputMode="decimal"
      value={value}
      onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
      placeholder={placeholder}
      className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-green-400 focus:outline-none"
    />
    {hint && <p className="text-xs text-gray-600 mt-1">{hint}</p>}
  </div>
)

function calc({ side, capital, riskPct, entry, stopLoss, lotSize }) {
  const cap = parseFloat(capital)
  const risk = parseFloat(riskPct)
  const e = parseFloat(entry)
  const sl = parseFloat(stopLoss)
  const lot = parseFloat(lotSize) || 0

  if (!cap || !risk || !e || !sl) return null

  const riskPerShare = side === "long" ? e - sl : sl - e

  if (riskPerShare <= 0) {
    return {
      error: side === "long"
        ? "Long trade: Stop loss entry price se neeche hona chahiye."
        : "Short trade: Stop loss entry price se upar hona chahiye.",
    }
  }

  const riskAmount = cap * (risk / 100)
  let shares = Math.floor(riskAmount / riskPerShare)

  if (shares < 1) {
    return {
      error: "Is risk setup ke saath minimum 1 share bhi nahi le sakte. Capital badhao ya stop loss adjust karo.",
    }
  }

  if (lot > 0) {
    shares = Math.floor(shares / lot) * lot
    if (shares < lot) {
      return {
        error: `Lot size ${lot} ke hisaab se kam se kam ${lot} shares chahiye. Risk % ya capital badhao.`,
      }
    }
  }

  const positionValue = shares * e
  const actualRisk = shares * riskPerShare
  const capitalUsedPct = (positionValue / cap) * 100

  let warning = null
  if (positionValue > cap) {
    warning = "Position value aapke capital se zyada hai — leverage/margin assume ho raha hai."
  } else if (capitalUsedPct > 50) {
    warning = "Capital ka 50%+ ek trade mein use ho raha hai — diversification socho."
  }

  return {
    shares,
    lots: lot > 0 ? shares / lot : null,
    riskAmount,
    riskPerShare,
    positionValue,
    actualRisk,
    capitalUsedPct,
    warning,
  }
}

export default function PositionSizeClient() {
  const [side, setSide] = useState("long")
  const [capital, setCapital] = useState("")
  const [riskPct, setRiskPct] = useState("1")
  const [entry, setEntry] = useState("")
  const [stopLoss, setStopLoss] = useState("")
  const [lotSize, setLotSize] = useState("")

  const result = calc({ side, capital, riskPct, entry, stopLoss, lotSize })
  const fmt = (n) => "₹" + Math.round(n).toLocaleString("en-IN")

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-green-400 mb-1">
          Position Size Calculator
        </h1>
        <p className="text-gray-400 mb-8">
          Apne capital aur risk ke hisaab se kitne shares lene chahiye — calculate karo
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Inputs */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-2">Trade Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "long", label: "Long (Buy)", sub: "SL entry se neeche" },
                  { val: "short", label: "Short (Sell)", sub: "SL entry se upar" },
                ].map((t) => (
                  <button
                    key={t.val}
                    onClick={() => setSide(t.val)}
                    className={`p-3 rounded-xl border text-left transition ${
                      side === t.val
                        ? "border-green-400 bg-green-950"
                        : "border-gray-700 hover:border-gray-600"
                    }`}>
                    <div className="text-sm font-semibold">{t.label}</div>
                    <div className="text-xs text-gray-400 mt-1">{t.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <InputField
              label="Trading Capital (₹)"
              value={capital}
              onChange={setCapital}
              placeholder="e.g. 100000"
            />

            <div className="mb-4">
              <label className="text-sm text-gray-400 block mb-1">
                Risk per Trade (%)
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  inputMode="decimal"
                  value={riskPct}
                  onChange={(e) => setRiskPct(e.target.value.replace(/[^0-9.]/g, ""))}
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm focus:border-green-400 focus:outline-none"
                />
                <div className="bg-green-950 border border-green-800 rounded-xl px-3 py-3 text-green-400 text-sm font-semibold min-w-fit">
                  {riskPct || "0"}%
                </div>
              </div>
              <input
                type="range"
                min={0.5}
                max={5}
                step={0.5}
                value={parseFloat(riskPct) || 1}
                onChange={(e) => setRiskPct(e.target.value)}
                className="w-full accent-green-400"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>0.5%</span>
                <span>5%</span>
              </div>
            </div>

            <InputField label="Entry Price (₹)" value={entry} onChange={setEntry} placeholder="e.g. 2500" />
            <InputField label="Stop Loss (₹)" value={stopLoss} onChange={setStopLoss} placeholder="e.g. 2450" />
            <InputField
              label="Lot Size (optional)"
              value={lotSize}
              onChange={setLotSize}
              placeholder="e.g. 50 for F&O"
              hint="F&O ke liye — shares lot ke multiple mein round honge"
            />

            <button
              onClick={() => {
                setCapital("")
                setRiskPct("1")
                setEntry("")
                setStopLoss("")
                setLotSize("")
              }}
              className="w-full border border-gray-700 hover:border-green-400 py-2.5 rounded-xl transition text-sm text-gray-400">
              Reset
            </button>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {!result ? (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-gray-500">
                Capital, risk %, entry aur stop loss daalo — position size yahan dikhega
              </div>
            ) : result.error ? (
              <div className="bg-red-950 border border-red-800 rounded-2xl p-6 text-red-400 text-sm">
                {result.error}
              </div>
            ) : (
              <>
                <div className="bg-green-950 border border-green-800 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Position Size</p>
                  <p className="text-4xl font-bold text-green-400">
                    {result.shares.toLocaleString("en-IN")} shares
                  </p>
                  {result.lots !== null && (
                    <p className="text-gray-400 text-sm mt-2">
                      = {result.lots} lot{result.lots !== 1 ? "s" : ""}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Position Value</p>
                    <p className="text-xl font-bold text-white">{fmt(result.positionValue)}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Capital Used</p>
                    <p className="text-xl font-bold text-yellow-400">
                      {result.capitalUsedPct.toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Max Risk (planned)</p>
                    <p className="text-xl font-bold text-red-400">{fmt(result.riskAmount)}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Actual Risk at SL</p>
                    <p className="text-xl font-bold text-red-400">{fmt(result.actualRisk)}</p>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-3">Risk per share: {fmt(result.riskPerShare)}</p>
                  <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-yellow-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(result.capitalUsedPct, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    Capital ka {result.capitalUsedPct.toFixed(1)}% is trade mein invest hoga
                  </p>
                </div>

                {result.warning && (
                  <div className="bg-yellow-950 border border-yellow-800 rounded-xl p-4 text-yellow-400 text-sm">
                    ⚠️ {result.warning}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-xs text-center mt-8">
          * Formula: Shares = (Capital × Risk%) ÷ |Entry − Stop Loss|. Educational only — verify before trading.
        </p>
      </div>
    </div>
  )
}
