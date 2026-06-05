"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"

const BROKERS = {
  zerodha: {
    label: "Zerodha",
    delivery: { type: "zero" },
    intraday: { type: "pct_cap", pct: 0.03, cap: 20 },
    fno: { type: "flat", flat: 20 },
  },
  upstox: {
    label: "Upstox",
    delivery: { type: "zero" },
    intraday: { type: "pct_cap", pct: 0.05, cap: 20 },
    fno: { type: "flat", flat: 20 },
  },
  angelone: {
    label: "Angel One",
    delivery: { type: "zero" },
    intraday: { type: "flat", flat: 20 },
    fno: { type: "flat", flat: 20 },
  },
}

const SEGMENTS = [
  { val: "delivery", label: "Equity Delivery", sub: "CNC — hold overnight" },
  { val: "intraday", label: "Equity Intraday", sub: "MIS — same day square-off" },
  { val: "fno", label: "F&O", sub: "Futures & Options" },
]

function brokeragePerOrder(broker, segment, turnover) {
  const rule = BROKERS[broker][segment]
  if (rule.type === "zero") return 0
  if (rule.type === "flat") return rule.flat
  return Math.min((turnover * rule.pct) / 100, rule.cap)
}

function calc({ broker, segment, qty, buyPrice, sellPrice }) {
  const q = parseFloat(qty)
  const buy = parseFloat(buyPrice)
  const sell = parseFloat(sellPrice)

  if (!q || !buy || !sell) return null
  if (q <= 0 || buy <= 0 || sell <= 0) {
    return { error: "Quantity aur prices positive hone chahiye." }
  }

  const buyValue = q * buy
  const sellValue = q * sell

  const buyBrokerage = brokeragePerOrder(broker, segment, buyValue)
  const sellBrokerage = brokeragePerOrder(broker, segment, sellValue)
  const totalBrokerage = buyBrokerage + sellBrokerage

  const txnRate = segment === "fno" ? 0.002 : 0.00345
  const buyTxn = (buyValue * txnRate) / 100
  const sellTxn = (sellValue * txnRate) / 100

  const sebiRate = 10 / 1e7
  const buySebi = buyValue * sebiRate
  const sellSebi = sellValue * sebiRate

  const stampRate = segment === "delivery" ? 0.015 : segment === "intraday" ? 0.003 : 0
  const stampDuty = segment === "fno" ? 0 : (buyValue * stampRate) / 100

  const sttRate =
    segment === "delivery" ? 0.1 :
    segment === "intraday" ? 0.025 :
    0.02
  const stt = (sellValue * sttRate) / 100

  const buyGst = 0.18 * (buyBrokerage + buyTxn + buySebi)
  const sellGst = 0.18 * (sellBrokerage + sellTxn + sellSebi)
  const totalGst = buyGst + sellGst

  const dpCharges = segment === "delivery" && broker === "zerodha" ? 15.93 : 0

  const buyCharges = buyBrokerage + buyTxn + buySebi + stampDuty + buyGst
  const sellCharges = sellBrokerage + sellTxn + sellSebi + stt + sellGst + dpCharges
  const totalCharges = buyCharges + sellCharges

  const grossPnl = sellValue - buyValue
  const netPnl = grossPnl - totalCharges
  const breakevenSell = (buyValue + totalCharges) / q

  return {
    buyValue,
    sellValue,
    buyBrokerage,
    sellBrokerage,
    totalBrokerage,
    buyTxn,
    sellTxn,
    stampDuty,
    stt,
    buySebi: buySebi + sellSebi,
    totalGst,
    dpCharges,
    buyCharges,
    sellCharges,
    totalCharges,
    grossPnl,
    netPnl,
    breakevenSell,
  }
}

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

export default function BrokerageCalculatorClient() {
  const [broker, setBroker] = useState("zerodha")
  const [segment, setSegment] = useState("intraday")
  const [qty, setQty] = useState("")
  const [buyPrice, setBuyPrice] = useState("")
  const [sellPrice, setSellPrice] = useState("")

  const result = calc({ broker, segment, qty, buyPrice, sellPrice })
  const fmt = (n) => "₹" + n.toLocaleString("en-IN", { maximumFractionDigits: 2 })

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-green-400 mb-1">
          Brokerage Calculator
        </h1>
        <p className="text-gray-400 mb-8">
          Zerodha, Upstox aur Angel One ke charges estimate karo — brokerage + taxes
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-2">Broker</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(BROKERS).map(([key, b]) => (
                  <button
                    key={key}
                    onClick={() => setBroker(key)}
                    className={`py-2 px-3 rounded-xl border text-sm transition ${
                      broker === key
                        ? "border-green-400 bg-green-950 text-green-400"
                        : "border-gray-700 text-gray-400 hover:border-gray-600"
                    }`}>
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm text-gray-400 block mb-2">Segment</label>
              <div className="space-y-2">
                {SEGMENTS.map((s) => (
                  <button
                    key={s.val}
                    onClick={() => setSegment(s.val)}
                    className={`w-full p-3 rounded-xl border text-left transition ${
                      segment === s.val
                        ? "border-green-400 bg-green-950"
                        : "border-gray-700 hover:border-gray-600"
                    }`}>
                    <div className="text-sm font-semibold">{s.label}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{s.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            <InputField label="Quantity" value={qty} onChange={setQty} placeholder="e.g. 100" />
            <InputField label="Buy Price (₹)" value={buyPrice} onChange={setBuyPrice} placeholder="e.g. 2500" />
            <InputField label="Sell Price (₹)" value={sellPrice} onChange={setSellPrice} placeholder="e.g. 2550" />

            <button
              onClick={() => { setQty(""); setBuyPrice(""); setSellPrice("") }}
              className="w-full border border-gray-700 hover:border-green-400 py-2.5 rounded-xl transition text-sm text-gray-400">
              Reset
            </button>
          </div>

          <div className="flex flex-col gap-4">
            {!result ? (
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-center text-gray-500">
                Trade details daalo — charges breakdown yahan dikhega
              </div>
            ) : result.error ? (
              <div className="bg-red-950 border border-red-800 rounded-2xl p-6 text-red-400 text-sm">
                {result.error}
              </div>
            ) : (
              <>
                <div className="bg-green-950 border border-green-800 rounded-2xl p-6 text-center">
                  <p className="text-gray-400 text-sm mb-1">Total Charges (round trip)</p>
                  <p className="text-4xl font-bold text-green-400">{fmt(result.totalCharges)}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Buy {fmt(result.buyValue)} → Sell {fmt(result.sellValue)}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Gross P&L</p>
                    <p className={`text-xl font-bold ${result.grossPnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {fmt(result.grossPnl)}
                    </p>
                  </div>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                    <p className="text-gray-400 text-xs mb-1">Net P&L</p>
                    <p className={`text-xl font-bold ${result.netPnl >= 0 ? "text-green-400" : "text-red-400"}`}>
                      {fmt(result.netPnl)}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h2 className="font-semibold mb-3 text-sm">Charges Breakdown</h2>
                  <div className="space-y-2 text-sm">
                    {[
                      { label: "Brokerage (buy)", val: result.buyBrokerage },
                      { label: "Brokerage (sell)", val: result.sellBrokerage },
                      { label: "Exchange txn charges", val: result.buyTxn + result.sellTxn },
                      { label: "STT (sell side)", val: result.stt },
                      { label: "Stamp duty (buy)", val: result.stampDuty },
                      { label: "SEBI charges", val: result.buySebi },
                      { label: "GST (18%)", val: result.totalGst },
                      ...(result.dpCharges > 0
                        ? [{ label: "DP charges (Zerodha delivery)", val: result.dpCharges }]
                        : []),
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between py-1.5 border-b border-gray-800">
                        <span className="text-gray-400">{row.label}</span>
                        <span className="font-medium">{fmt(row.val)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between pt-2 font-bold">
                      <span>Total</span>
                      <span className="text-green-400">{fmt(result.totalCharges)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">
                    Breakeven sell price:{" "}
                    <span className="text-yellow-400 font-semibold">
                      {fmt(result.breakevenSell)}
                    </span>
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    Is price par bechoge to charges ke baad roughly zero P&L (estimate).
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <p className="text-gray-600 text-xs text-center mt-8">
          * NSE rates par based estimate. Stamp duty state ke hisaab se alag ho sakti hai. Broker se verify karo.
        </p>
      </div>
    </div>
  )
}
