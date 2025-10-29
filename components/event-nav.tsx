"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, ChevronDown, Activity, Trophy, LayoutDashboard, Gift } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { label: "Trending", icon: TrendingUp, active: false, sector: "trending" },
  { label: "Breaking", active: false, sector: "breaking" },
  { label: "New", active: false, sector: "new" },
  { label: "Politics", active: false, sector: "politics" },
  { label: "Sports", active: false, sector: "sports" },
  { label: "Finance", active: false, sector: "finance" },
  { label: "Crypto", active: true, sector: "crypto" },
  { label: "Geopolitics", active: false, sector: "geopolitics" },
  { label: "Earnings", active: false, sector: "earnings" },
  { label: "Tech", active: false, sector: "tech" },
  { label: "Culture", active: false, sector: "culture" },
  { label: "World", active: false, sector: "world" },
  { label: "Economy", active: false, sector: "economy" },
  { label: "Elections", active: false, sector: "elections" },
  { label: "Mentions", active: false, sector: "mentions" },
]

export function EventNav() {
  const [activeSector, setActiveSector] = useState("crypto")

  return (
    <div className="border-b bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-1 overflow-x-auto px-4 py-2 scrollbar-hide">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={`whitespace-nowrap ${activeSector === item.sector ? "font-semibold" : ""}`}
              onClick={() => setActiveSector(item.sector)}
            >
              {item.icon && <item.icon className="mr-1.5 h-4 w-4" />}
              {item.label}
            </Button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="whitespace-nowrap">
                More
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/activity" className="flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Activity
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/leaderboard" className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  Leaderboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboards" className="flex items-center gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboards
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/rewards" className="flex items-center gap-2">
                  <Gift className="h-4 w-4" />
                  Rewards
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
