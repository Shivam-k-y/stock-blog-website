"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"

const InputField = ({ label, value, onChange, placeholder }) => (
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
  </div>
)

function calc({ side, entry, stopLoss, target, qty }) {
  const e = parseFloat(entry)
  const sl = parseFloat(stopLoss)
  const tp = parseFloat(target)
  const quantity = parseFloat(qty) || 0

  if (!e || !sl || !tp) return null

  const riskPerShare = side === "long" ? e - sl : sl - e
  const rewardPerShare = side === "long" ? tp - e : e - tp

  if (riskPerShare <= 0 || rewardPerShare <= 0) {
    return { error: side === "long"
      ? "Long trade: Stop loss entry se neeche aur target entry se upar hona chahiye."
      : "Short trade: Stop loss entry se upar aur target entry se neeche hona chahiye." }
  }

  const ratio = rewardPerShare / riskPerShare
  const totalRisk = riskPerShare * quantity
  const totalReward = rewardPerShare * quantity
  const breakevenWinRate = (riskPerShare / (riskPerShare + rewardPerShare)) * 100

  let rating = "Poor"
  let ratingColor = "text-red-400"
  if (ratio >= 3) { rating = "Excellent"; ratingColor = "text-green-400" }
  else if (ratio >= 2) { rating = "Good"; ratingColor = "text-green-400" }
  else if (ratio >= 1.5) { rating = "Fair"; ratingColor = "text-yellow-400" }

  return {
    riskPerShare,
    rewardPerShare,
    ratio,
    totalRisk,
    totalReward,
    breakevenWinRate,
    rating,
    ratingColor,
    hasQty: quantity > 0,
  }
}

export default function RiskRewardClient() {
  const [side, setSide] = useState("long")
  const [entry, setEntry] = useState("")
  const [stopLoss, setStopLoss] = useState("")
  const [target, setTarget] = useState("")
  const [qty, setQty] = useState("")

  const result = calc({ side, entry, stopLoss, target, qty })
  const fmt = (n) => "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 2 })

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-green-400 mb-1">
          Risk/Reward Calculator
        </h1>
        <p className="text-gray-400 mb-8">
          Apne trade ka risk-reward ratio calculate karo — entry, stop loss aur target daalo
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Inputs */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-2">Trade Type</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { val: "long", label: "Long (Buy)", sub: "Target upar, SL neeche" },
                  { val: "short", label: "Short (Sell)", sub: "Target neeche, SL upar" },
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

            <InputField label="Entry Price (₹)" value={entry} onChange={setEntry} placeholder="e.g. 2500" />
            <InputField label="Stop Loss (₹)" value={stopLoss} onChange={setStopLoss} placeholder="e.g. 2450" />
            <InputField label="Target Price (₹)" value={target} onChange={setTarget} placeholder="e.g. 2600" />
            <InputField label="Quantity (optional)" value={qty} onChange={setQty} placeholder="e.g. 10 shares" />

            <button
              onClick={() => { setEntry(""); setStopLoss(""); setTarget(""); setQty("") }}
              className="w-full border border-gray-700 hover:border-green-400 py-2.5 rounded-xl transition text-sm text-gray-400">
              Reset
            </button>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            {!result ? (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-gray-500">
                Entry, stop loss aur target daalo — result yahan dikhega
              </div>
            ) : result.error ? (
              <div className="bg-red-950 border border-red-800 rounded-2xl p-6 text-red-400 text-sm">
                {result.error}
              </div>
            ) : (
              <>
                <div className="bg-green-950 border border-green-800 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Risk : Reward Ratio</p>
                  <p className="text-4xl font-bold text-green-400">
                    1 : {result.ratio.toFixed(2)}
                  </p>
                  <p className={`text-sm mt-2 font-semibold ${result.ratingColor}`}>
                    {result.rating} setup
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Risk per Share</p>
                    <p className="text-xl font-bold text-red-400">{fmt(result.riskPerShare)}</p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Reward per Share</p>
                    <p className="text-xl font-bold text-green-400">{fmt(result.rewardPerShare)}</p>
                  </div>
                </div>

                {result.hasQty && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">Total Risk</p>
                      <p className="text-xl font-bold text-red-400">{fmt(result.totalRisk)}</p>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                      <p className="text-gray-400 text-xs mb-1">Total Reward</p>
                      <p className="text-xl font-bold text-green-400">{fmt(result.totalReward)}</p>
                    </div>
                  </div>
                )}

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-3">Risk vs Reward</p>
                  <div className="flex h-4 rounded-full overflow-hidden">
                    <div
                      className="bg-red-500 transition-all duration-300"
                      style={{ width: `${(1 / (1 + result.ratio)) * 100}%` }}
                    />
                    <div
                      className="bg-green-500 transition-all duration-300"
                      style={{ width: `${(result.ratio / (1 + result.ratio)) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Risk</span>
                    <span>Reward</span>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">
                    Breakeven win rate:{" "}
                    <span className="text-yellow-400 font-semibold">
                      {result.breakevenWinRate.toFixed(1)}%
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Is trade ko profitable rakhne ke liye kam se kam itni trades jeetni chahiye (fees ignore).
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-xs text-center mt-8">
          * Educational purpose only. Always use proper risk management before trading.
        </p>
      </div>
    </div>
  )
}
