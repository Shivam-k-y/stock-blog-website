"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

function calcSIP(monthly, rate, years) {
  const i = Math.pow(1 + rate / 100, 1 / 12) - 1
  const n = years * 12
  const amount = monthly * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
  return Math.round(amount)
}

const InputWithSlider = ({
  label, value, onChange,
  min, max, step, prefix, suffix,
  displayValue
}) => {
  const [draft, setDraft] = useState(null)
  const inputVal = draft !== null ? draft : String(value)

  const handleInput = (e) => {
    const raw = e.target.value.replace(/[^0-9.]/g, "")
    setDraft(raw)
    const num = parseFloat(raw)
    if (!isNaN(num)) {
      const clamped = Math.min(Math.max(num, min), max)
      onChange(clamped)
    }
  }

  const handleBlur = () => {
    const num = parseFloat(inputVal)
    if (isNaN(num) || num < min) {
      onChange(min)
    } else if (num > max) {
      onChange(max)
    } else {
      onChange(num)
    }
    setDraft(null)
  }

  const handleSliderChange = useCallback((e) => {
    const val = step % 1 !== 0
      ? parseFloat(e.target.value)
      : parseInt(e.target.value)
    setDraft(null)
    onChange(val)
  }, [onChange, step])

  return (
    <div className="mb-6">
      <label className="text-sm text-gray-400 block mb-2">{label}</label>

      {/* Input + Value Box */}
      <div className="flex gap-2 mb-3">
        <div className="flex-1 flex items-center bg-gray-800 border border-gray-700 focus-within:border-green-400 rounded-xl px-3 py-2 gap-1">
          {prefix && <span className="text-gray-400 text-sm">{prefix}</span>}
          <input
            type="text"
            inputMode="decimal"
            value={inputVal}
            onChange={handleInput}
            onBlur={handleBlur}
            className="bg-transparent text-white text-sm w-full focus:outline-none"
          />
          {suffix && <span className="text-gray-400 text-sm">{suffix}</span>}
        </div>
        <div className="bg-green-950 border border-green-800 rounded-xl px-3 py-2 text-green-400 text-sm font-semibold min-w-fit whitespace-nowrap">
          {displayValue}
        </div>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleSliderChange}
        className="w-full accent-green-400"
      />
      <div className="flex justify-between text-xs text-gray-600 mt-1">
        <span>{prefix}{min.toLocaleString("en-IN")}{suffix}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{suffix}</span>
      </div>
    </div>
  )
}

export default function SIPCalculatorClient() {
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(10)
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  const future = calcSIP(monthly, rate, years)
  const invested = monthly * years * 12
  const returns = future - invested

  const fmt = (num) => "₹" + Math.round(num).toLocaleString("en-IN")

  useEffect(() => {
    if (!chartRef.current) return
    if (chartInstance.current) chartInstance.current.destroy()

    const labels = []
    const invData = []
    const futData = []

    for (let y = 1; y <= years; y++) {
      const fv = calcSIP(monthly, rate, y)
      labels.push(y + "y")
      invData.push(monthly * y * 12)
      futData.push(fv)
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Invested",
            data: invData,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34,197,94,0.08)",
            tension: 0.3,
            pointRadius: 2,
          },
          {
            label: "Future Value",
            data: futData,
            borderColor: "#f59e0b",
            backgroundColor: "rgba(245,158,11,0.08)",
            tension: 0.3,
            pointRadius: 2,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: { color: "#9ca3af", font: { size: 12 } },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => " " + fmt(ctx.raw),
            },
          },
        },
        scales: {
          x: {
            ticks: { color: "#9ca3af" },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
          y: {
            ticks: {
              color: "#9ca3af",
              callback: (v) => {
                if (v >= 10000000) return "₹" + (v / 10000000).toFixed(1) + "Cr"
                if (v >= 100000) return "₹" + (v / 100000).toFixed(1) + "L"
                return "₹" + (v / 1000).toFixed(0) + "K"
              },
            },
            grid: { color: "rgba(255,255,255,0.05)" },
          },
        },
      },
    })
  }, [monthly, rate, years])

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-green-400 mb-1">
          SIP Calculator
        </h1>
        <p className="text-gray-400 mb-8">
          Monthly investment ki future value calculate karo
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Sliders + Inputs */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">

            <InputWithSlider
              label="Monthly Investment"
              value={monthly}
              onChange={setMonthly}
              min={500}
              max={100000}
              step={1}
              prefix="₹"
              displayValue={fmt(monthly) + "/mo"}
            />

            <InputWithSlider
              label="Expected Return (% per year)"
              value={rate}
              onChange={setRate}
              min={1}
              max={30}
              step={0.1}
              suffix="%"
              displayValue={rate + "% p.a"}
            />

            <InputWithSlider
              label="Time Period (Years)"
              value={years}
              onChange={setYears}
              min={1}
              max={40}
              step={1}
              suffix=" yr"
              displayValue={years + " Years"}
            />
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
                <p className="text-gray-400 text-xs mb-1">Est. Returns</p>
                <p className="text-xl font-bold text-yellow-400">{fmt(returns)}</p>
              </div>
            </div>

            {/* Progress Bars */}
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-3">Invested vs Returns</p>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Invested amount</span>
                  <span>{Math.round((invested / future) * 100)}%</span>
                </div>
                <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-green-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.round((invested / future) * 100)}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Est. returns</span>
                  <span>{Math.round((returns / future) * 100)}%</span>
                </div>
                <div className="bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.round((returns / future) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-8">
          <p className="text-sm text-gray-400 mb-4">Growth over time</p>
          <canvas ref={chartRef} height={250}></canvas>
        </div>

        <p className="text-gray-600 text-xs text-center mt-6">
          * This calculator provides an estimate only. Actual returns may vary.
        </p>

      </div>
    </div>
  )
}