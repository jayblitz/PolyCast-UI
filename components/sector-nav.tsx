"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import Link from "next/link"

const sectors = [
  { name: "Trending", icon: TrendingUp },
  { name: "Politics", icon: null },
  { name: "Sports", icon: null },
  { name: "Crypto", icon: null },
  { name: "Earnings", icon: null },
  { name: "Geopolitics", icon: null },
  { name: "Tech", icon: null },
  { name: "Culture", icon: null },
]

export function SectorNav({ activeSector = "Trending" }: { activeSector?: string }) {
  return (
    <div className="border-b bg-card">
      <div className="flex gap-1 overflow-x-auto px-3 py-2 scrollbar-hide">
        {sectors.map((sector) => {
          const isActive = activeSector === sector.name
          const Icon = sector.icon

          return (
            <Link key={sector.name} href={sector.name === "Trending" ? "/" : `/sector/${sector.name.toLowerCase()}`}>
              <Button
                variant={isActive ? "secondary" : "ghost"}
                size="sm"
                className={`whitespace-nowrap transition-all hover:scale-105 hover:bg-blue-200 dark:hover:bg-blue-800 ${
                  isActive ? "font-semibold border-b-2 border-primary rounded-b-none" : ""
                }`}
              >
                {Icon && <Icon className="mr-1.5 h-4 w-4" />}
                {sector.name}
              </Button>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
