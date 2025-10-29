import { Header } from "@/components/header"
import { SectorNav } from "@/components/sector-nav"
import { MarketCard } from "@/components/market-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const sectorMarkets: Record<string, any[]> = {
  crypto: [
    {
      title: "Will Bitcoin reach $100,000 by end of 2025?",
      probability: 68,
      volume: "$2.4M",
      isLive: true,
      image: "/bitcoin-cryptocurrency.png",
    },
    {
      title: "Will Ethereum surpass $5,000 this year?",
      probability: 52,
      volume: "$1.8M",
      isLive: true,
      image: "/ethereum-cryptocurrency.jpg",
    },
    {
      title: "Will Solana reach $300 in 2025?",
      probability: 45,
      volume: "$980K",
      image: "/solana-cryptocurrency.png",
    },
    {
      title: "Will a new crypto reach top 10 by market cap?",
      probability: 38,
      volume: "$650K",
      image: "/cryptocurrency-market.png",
    },
  ],
  politics: [
    {
      title: "Will Trump win the 2024 Presidential Election?",
      probability: 62,
      volume: "$5.2M",
      isLive: true,
      image: "/presidential-election.jpg",
    },
    {
      title: "Will Democrats control the Senate?",
      probability: 48,
      volume: "$3.1M",
      image: "/senate-politics.jpg",
    },
  ],
  sports: [
    {
      title: "Will Lakers win NBA Championship?",
      probability: 28,
      volume: "$1.5M",
      image: "/lakers-basketball.jpg",
    },
    {
      title: "Will Messi win another Ballon d'Or?",
      probability: 42,
      volume: "$890K",
      image: "/messi-soccer-football.jpg",
    },
  ],
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const sectorName = slug.charAt(0).toUpperCase() + slug.slice(1)
  const markets = sectorMarkets[slug] || []

  return (
    <div className="min-h-screen">
      <Header />
      <SectorNav activeSector={sectorName} />

      <main className="mx-auto max-w-4xl px-3 py-4">
        {/* Back Button */}
        <div className="mb-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Sector Title */}
        <h1 className="mb-6 text-2xl font-bold text-balance">{sectorName} Markets</h1>

        {/* Markets Grid */}
        {markets.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <MarketCard key={index} {...market} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-muted-foreground">No markets available in this sector yet.</p>
          </div>
        )}
      </main>
    </div>
  )
}
