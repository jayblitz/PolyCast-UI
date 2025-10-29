import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"
import Image from "next/image"

interface MarketCardProps {
  title: string
  probability: number
  volume: string
  isLive?: boolean
  image?: string
}

export function MarketCard({ title, probability, volume, isLive, image }: MarketCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer">
      <CardContent className="p-4">
        {/* Image/Icon */}
        {image && (
          <div className="mb-3 aspect-video w-full overflow-hidden rounded-md bg-muted relative">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </div>
        )}

        {/* Title */}
        <h3 className="mb-3 text-sm font-semibold leading-tight text-balance">{title}</h3>

        {/* Probability Circle */}
        <div className="mb-3 flex items-center justify-center">
          <div className="relative h-20 w-20">
            <svg className="h-20 w-20 -rotate-90 transform">
              <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted" />
              <circle
                cx="40"
                cy="40"
                r="32"
                stroke="currentColor"
                strokeWidth="6"
                fill="none"
                strokeDasharray={`${probability * 2.01} ${200}`}
                className="text-primary transition-all"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">{probability}%</span>
            </div>
          </div>
        </div>

        {/* Yes/No Buttons */}
        <div className="mb-3 grid grid-cols-2 gap-2">
          <Button size="sm" className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all text-white">
            Yes
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-red-50 dark:hover:bg-red-950 hover:scale-105 transition-all bg-transparent"
          >
            No
          </Button>
        </div>

        {/* Volume & Live Indicator */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3" />
            {volume}
          </span>
          {isLive && (
            <span className="flex items-center gap-1 text-red-500 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              LIVE
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
