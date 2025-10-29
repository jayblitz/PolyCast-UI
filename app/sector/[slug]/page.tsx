import { Header } from "@/components/header"
import { SectorNav } from "@/components/sector-nav"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const sectorMarkets: Record<string, any[]> = {
  crypto: [
    {
      title: "Will Bitcoin reach $100,000 by end of 2025?",
      probability: 68,
      volume: "$2.4M",
      image: "/bitcoin-cryptocurrency.png",
    },
    {
      title: "Will Ethereum surpass $5,000 this year?",
      probability: 52,
      volume: "$1.8M",
      image: "/ethereum-cryptocurrency.jpg",
    },
    {
      title: "Will Solana reach $300 in 2025?",
      probability: 45,
      volume: "$980K",
      image: "/solana-cryptocurrency.jpg",
    },
    {
      title: "Will a new crypto reach top 10 by market cap?",
      probability: 38,
      volume: "$650K",
      image: "/xrp-cryptocurrency.jpg",
    },
  ],
  politics: [
    {
      title: "Will Trump win the 2024 Presidential Election?",
      probability: 62,
      volume: "$5.2M",
      image: "/presidential-election-politics.jpg",
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
      image: "/lakers-basketball-nba.jpg",
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
        <div className="mb-4 flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 hover:scale-105 transition-transform">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>

          <Select defaultValue="volume">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="volume">Highest Volume</SelectItem>
              <SelectItem value="probability">Highest Probability</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <h1 className="mb-6 text-2xl font-bold text-balance">{sectorName} Markets</h1>

        {markets.length > 0 ? (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((market, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer"
              >
                <div className="relative h-32 w-full">
                  <Image src={market.image || "/placeholder.svg"} alt={market.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-4">
                  <h3 className="mb-3 font-semibold text-balance line-clamp-2">{market.title}</h3>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Probability</span>
                    <span className="font-semibold text-primary">{market.probability}%</span>
                  </div>
                  <Progress value={market.probability} className="mb-3 h-2" />
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all">
                      Yes
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-red-50 dark:hover:bg-red-950 hover:scale-105 transition-all bg-transparent"
                    >
                      No
                    </Button>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground text-center">Volume: {market.volume}</p>
                </CardContent>
              </Card>
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
