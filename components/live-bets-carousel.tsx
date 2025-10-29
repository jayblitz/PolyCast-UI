"use client"

import { useState } from "react"
import { MarketCard } from "./market-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const liveBets = [
  {
    title: "Will Bitcoin reach $100,000 by end of 2025?",
    probability: 68,
    volume: "$2.4M",
    isLive: true,
    image: "/bitcoin-cryptocurrency-chart.jpg",
  },
  {
    title: "Will Ethereum surpass $5,000 this year?",
    probability: 52,
    volume: "$1.8M",
    isLive: true,
    image: "/ethereum-cryptocurrency-chart.jpg",
  },
  {
    title: "Will Solana reach $300 in 2025?",
    probability: 45,
    volume: "$980K",
    isLive: true,
    image: "/solana-cryptocurrency-chart.jpg",
  },
]

export function LiveBetsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % liveBets.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + liveBets.length) % liveBets.length)
  }

  return (
    <div className="relative px-3 py-4">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold">Live Bets</h2>
        <div className="flex gap-1">
          <Button size="icon" variant="outline" onClick={prev} className="h-8 w-8 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline" onClick={next} className="h-8 w-8 bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {liveBets.map((bet, index) => (
            <div key={index} className="w-full flex-shrink-0 px-1">
              <MarketCard {...bet} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="mt-3 flex justify-center gap-1.5">
        {liveBets.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
