"use client"
import { useState, useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  const r = rate / 100 / 12
  const n = years * 12
  const future = Math.round(monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r))
  const invested = monthly * n
  const returns = future - invested

  const fmt = (num) => "₹" + Math.round(num).toLocaleString("en-IN")

  useEffect(() => {
    if (!chartRef.current) return
    if (chartInstance.current) chartInstance.current.destroy()

    const labels = []
    const invData = []
    const futData = []

    for (let y = 1; y <= years; y++) {
      const mn = y * 12
      const fv = Math.round(monthly * ((Math.pow(1 + r, mn) - 1) / r) * (1 + r))
      labels.push(y + "y")
      invData.push(Math.round(monthly * mn))
      futData.push(fv)
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          { label: "Invested", data: invData, borderColor: "#22c55e", backgroundColor: "rgba(34,197,94,0.08)", tension: 0.3, pointRadius: 2 },
          { label: "Future Value", data: futData, borderColor: "#f59e0b", backgroundColor: "rgba(245,158,11,0.08)", tension: 0.3, pointRadius: 2 },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: "#9ca3af", font: { size: 12 } } } },
        scales: {
          x: { ticks: { color: "#9ca3af" }, grid: { color: "rgba(255,255,255,0.05)" } },
          y: { ticks: { color: "#9ca3af", callback: (v) => "₹" + Math.round(v / 1000) + "K" }, grid: { color: "rgba(255,255,255,0.05)" } },
        },
      },
    })
  }, [monthly, rate, years])

  const Slider = ({ label, id, min, max, step, value, onChange, display }) => (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <label className="text-sm text-gray-400">{label}</label>
        <span className="text-sm font-semibold text-green-400">{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full accent-green-400" />
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>₹{min.toLocaleString("en-IN")}</span>
        <span>₹{max.toLocaleString("en-IN")}</span>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-green-400 mb-1">SIP Calculator</h1>
        <p className="text-gray-400 mb-8">Monthly investment ki future value calculate karo</p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Sliders */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <Slider label="Monthly Investment" min={500} max={100000} step={500}
              value={monthly} onChange={setMonthly}
              display={"₹" + monthly.toLocaleString("en-IN")} />
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-400">Expected Return (% per year)</label>
                <span className="text-sm font-semibold text-green-400">{rate}%</span>
              </div>
              <input type="range" min={1} max={30} step={0.5} value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full accent-green-400" />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1%</span><span>30%</span>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between mb-2">
                <label className="text-sm text-gray-400">Time Period (Years)</label>
                <span className="text-sm font-semibold text-green-400">{years} yrs</span>
              </div>
              <input type="range" min={1} max={40} step={1} value={years}
                onChange={(e) => setYears(parseInt(e.target.value))}
                className="w-full accent-green-400" />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>1 yr</span><span>40 yrs</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-4">
            <div className="bg-green-950 border border-green-800 rounded-2xl p-6 text-center">
              <p className="text-gray-400 text-sm mb-1">Future Value</p>
              <p className="text-4xl font-bold text-green-400">{fmt(future)}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-1">Total Invested</p>
                <p className="text-xl font-bold text-white">{fmt(invested)}</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-1">Total Returns</p>
                <p className="text-xl font-bold text-yellow-400">{fmt(returns)}</p>
              </div>
            </div>
            {/* Progress bars */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-3">Invested vs Returns</p>
              <div className="bg-gray-800 rounded-full h-3 mb-2 overflow-hidden">
                <div className="bg-green-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.round((invested / future) * 100)}%` }} />
              </div>
              <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                <div className="bg-yellow-500 h-full rounded-full transition-all"
                  style={{ width: `${Math.round((returns / future) * 100)}%` }} />
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span><span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>Invested {Math.round((invested / future) * 100)}%</span>
                <span><span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>Returns {Math.round((returns / future) * 100)}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-8">
          <p className="text-sm text-gray-400 mb-4">Growth over time</p>
          <canvas ref={chartRef} height={250}></canvas>
        </div>

      </div>
    </div>
  )
}