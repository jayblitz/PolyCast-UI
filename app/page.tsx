import { Header } from "@/components/header"
import { SectorNav } from "@/components/sector-nav"
import { LiveBetsCarousel } from "@/components/live-bets-carousel"
import { MarketCard } from "@/components/market-card"
import Link from "next/link"

const markets = [
  {
    id: "bitcoin-up-or-down",
    title: "Will Trump win the 2024 Presidential Election?",
    probability: 62,
    volume: "$5.2M",
    isLive: true,
    image: "/presidential-election-politics.jpg",
  },
  {
    id: "sp500-6000",
    title: "Will the S&P 500 reach 6000 by year end?",
    probability: 48,
    volume: "$3.1M",
    image: "/stock-market-chart-sp500.jpg",
  },
  {
    id: "apple-ar-glasses",
    title: "Will Apple release AR glasses in 2025?",
    probability: 35,
    volume: "$890K",
    image: "/apple-ar-glasses-technology.jpg",
  },
  {
    id: "lakers-championship",
    title: "Will Lakers win NBA Championship?",
    probability: 28,
    volume: "$1.5M",
    image: "/lakers-basketball-nba.jpg",
  },
  {
    id: "ai-jobs",
    title: "Will AI replace 50% of jobs by 2030?",
    probability: 42,
    volume: "$2.2M",
    image: "/artificial-intelligence-future-work.jpg",
  },
  {
    id: "spacex-mars",
    title: "Will SpaceX land humans on Mars by 2030?",
    probability: 25,
    volume: "$1.8M",
    image: "/spacex-mars-rocket-space.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SectorNav activeSector="Trending" />

      <main className="mx-auto max-w-4xl">
        <LiveBetsCarousel />

        {/* Markets Grid */}
        <div className="px-3 py-4">
          <h2 className="mb-4 text-lg font-bold">All Markets</h2>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market) => (
              <Link key={market.id} href={`/event/${market.id}`}>
                <MarketCard {...market} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
