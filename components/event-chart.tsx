"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, TrendingUp, RefreshCw } from "lucide-react"

const chartData = [
  { time: "10:11:36 AM", price: 112950 },
  { time: "10:11:42 AM", price: 112955 },
  { time: "10:11:48 AM", price: 112965 },
  { time: "10:11:54 AM", price: 112970 },
  { time: "10:12:00 AM", price: 112968 },
  { time: "10:12:06 AM", price: 112960 },
  { time: "10:12:12 AM", price: 112945 },
]

const timeButtons = ["5 AM", "6 AM", "7 AM", "8 AM"]

export function EventChart() {
  const [selectedTime, setSelectedTime] = useState("6 AM")

  const minPrice = Math.min(...chartData.map((d) => d.price))
  const maxPrice = Math.max(...chartData.map((d) => d.price))
  const priceRange = maxPrice - minPrice
  const targetPrice = 112970

  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card p-4">
        {/* Chart Area */}
        <div className="relative mb-4 h-64">
          {/* Y-axis labels */}
          <div className="absolute right-0 top-0 flex h-full flex-col justify-between text-xs text-muted-foreground">
            <span>$112,970</span>
            <span>$112,960</span>
            <span>$112,950</span>
            <span>$112,940</span>
          </div>

          {/* Target line */}
          <div className="absolute left-0 right-12 top-8 flex items-center">
            <div className="h-px flex-1 border-t-2 border-dashed border-muted-foreground/30" />
            <div className="ml-2 rounded bg-muted px-2 py-0.5 text-xs flex items-center gap-1">
              <span className="text-muted-foreground">Target</span>
              <TrendingUp className="h-3 w-3" />
            </div>
            <span className="ml-2 text-xs text-muted-foreground">$112,970</span>
          </div>

          {/* Chart SVG */}
          <svg className="h-full w-full pr-12" viewBox="0 0 400 200" preserveAspectRatio="none">
            {/* Line */}
            <path
              d={`M 0 ${200 - ((chartData[0].price - minPrice) / priceRange) * 160} ${chartData
                .map(
                  (d, i) =>
                    `L ${(i / (chartData.length - 1)) * 400} ${200 - ((d.price - minPrice) / priceRange) * 160}`,
                )
                .join(" ")}`}
              fill="none"
              stroke="#F7931A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* End point */}
            <circle
              cx="400"
              cy={200 - ((chartData[chartData.length - 1].price - minPrice) / priceRange) * 160}
              r="4"
              fill="#F7931A"
            />
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-0 right-12 flex justify-between text-xs text-muted-foreground">
            {chartData.map((d, i) => (
              <span key={i}>{d.time}</span>
            ))}
          </div>
        </div>

        {/* Time Controls */}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <RefreshCw className="h-4 w-4" />
          </Button>
          {timeButtons.map((time) => (
            <Button
              key={time}
              size="sm"
              variant={selectedTime === time ? "default" : "ghost"}
              className={`relative ${selectedTime === time ? "bg-foreground text-background" : ""}`}
              onClick={() => setSelectedTime(time)}
            >
              {time === "6 AM" && <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-destructive" />}
              {time}
            </Button>
          ))}
          <Button size="sm" variant="ghost" className="gap-1">
            More
            <ChevronDown className="h-3 w-3" />
          </Button>
          <div className="ml-auto flex gap-1">
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <TrendingUp className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost" className="h-8 w-8 text-[#F7931A]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold">Order Book</h3>
            <button className="flex h-4 w-4 items-center justify-center rounded-full bg-muted text-xs">?</button>
          </div>
          <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
            $69.0k Vol.
            <ChevronDown className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
