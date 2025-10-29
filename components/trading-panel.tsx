"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function TradingPanel() {
  const [activeTab, setActiveTab] = useState<"buy" | "sell">("buy")
  const [amount, setAmount] = useState(0)

  const quickAmounts = [1, 20, 100]

  return (
    <div className="rounded-lg border bg-card p-6">
      {/* Buy/Sell Tabs */}
      <div className="mb-6 flex items-center justify-between border-b">
        <div className="flex gap-6">
          <button
            onClick={() => setActiveTab("buy")}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === "buy"
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab("sell")}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === "sell"
                ? "border-b-2 border-foreground text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Sell
          </button>
        </div>
        <span className="text-sm text-muted-foreground">Market</span>
      </div>

      {/* Up/Down Buttons */}
      <div className="mb-6 grid grid-cols-2 gap-3">
        <Button className="h-14 bg-green-600 text-lg font-semibold hover:bg-green-700">Up 82¢</Button>
        <Button variant="secondary" className="h-14 text-lg font-semibold">
          Down 21¢
        </Button>
      </div>

      {/* Amount Section */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Amount</span>
          <span className="text-sm text-muted-foreground">Balance $0.00</span>
        </div>
        <div className="mb-3 text-right">
          <span className="text-4xl font-light text-muted-foreground">$0</span>
        </div>
        <div className="flex gap-2">
          {quickAmounts.map((amt) => (
            <Button key={amt} variant="outline" size="sm" onClick={() => setAmount(amount + amt)} className="flex-1">
              +${amt}
            </Button>
          ))}
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            +$100
          </Button>
          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
            Max
          </Button>
        </div>
      </div>

      <Button className="mb-4 h-12 w-full bg-primary text-base font-semibold hover:bg-primary/90">Trade</Button>

      {/* Terms */}
      <p className="text-center text-xs text-muted-foreground">
        By trading, you agree to the{" "}
        <a href="#" className="underline hover:text-foreground">
          Terms of Use
        </a>
        .
      </p>
    </div>
  )
}
