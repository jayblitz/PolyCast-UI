"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"

const liveBets = [
  {
    title: "Bitcoin Up or Down",
    subtitle: "October 29, 5-6AM ET",
    probability: 68,
    volume: "$2.4M",
    image: "/bitcoin-cryptocurrency-chart.jpg",
  },
  {
    title: "Ethereum Up or Down",
    subtitle: "October 29, 6AM ET",
    probability: 52,
    volume: "$1.8M",
    image: "/ethereum-cryptocurrency-chart.jpg",
  },
  {
    title: "Solana Up or Down",
    subtitle: "October 29, 6AM ET",
    probability: 45,
    volume: "$980K",
    image: "/solana-cryptocurrency.jpg",
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
          <Button
            size="icon"
            variant="outline"
            onClick={prev}
            className="h-8 w-8 bg-transparent hover:scale-110 transition-transform"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            onClick={next}
            className="h-8 w-8 bg-transparent hover:scale-110 transition-transform"
          >
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
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-32 w-full">
                  <Image src={bet.image || "/placeholder.svg"} alt={bet.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-3 text-white">
                    <h3 className="font-semibold text-balance">{bet.title}</h3>
                    <p className="text-xs text-white/80">{bet.subtitle}</p>
                  </div>
                </div>
                <CardContent className="p-3">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Probability</span>
                    <span className="font-semibold">{bet.probability}%</span>
                  </div>
                  <Progress value={bet.probability} className="mb-3 h-2" />
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all">
                      Yes {bet.probability}¢
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-red-50 dark:hover:bg-red-950 hover:scale-105 transition-all bg-transparent"
                    >
                      No {100 - bet.probability}¢
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center">Volume: {bet.volume}</p>
                </CardContent>
              </Card>
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
