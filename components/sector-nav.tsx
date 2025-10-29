"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const sectors = ["Trending", "Politics", "Sports", "Crypto", "Earnings", "Geopolitics", "Tech", "Culture"]

export function SectorNav({ activeSector = "Trending" }: { activeSector?: string }) {
  const router = useRouter()

  const handleSectorClick = (sector: string) => {
    if (sector === "Trending") {
      router.push("/")
    } else {
      router.push(`/sector/${sector.toLowerCase()}`)
    }
  }

  return (
    <div className="border-b bg-card">
      <div className="flex gap-1 overflow-x-auto px-3 py-2 scrollbar-hide">
        {sectors.map((sector) => (
          <Button
            key={sector}
            variant={activeSector === sector ? "secondary" : "ghost"}
            size="sm"
            className={`whitespace-nowrap transition-all hover:scale-105 ${
              activeSector === sector ? "font-semibold border-b-2 border-primary rounded-b-none" : ""
            }`}
            onClick={() => handleSectorClick(sector)}
          >
            {sector}
          </Button>
        ))}
      </div>
    </div>
  )
}
