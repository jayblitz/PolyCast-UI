import { Header } from "@/components/header"
import { EventNav } from "@/components/event-nav"
import { EventChart } from "@/components/event-chart"
import { TradingPanel } from "@/components/trading-panel"
import { RelatedMarkets } from "@/components/related-markets"
import { Link2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"

export default async function EventPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EventNav />

      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* Left Column - Main Content */}
          <div>
            {/* Event Header */}
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-[#F7931A]">
                <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                </svg>
              </div>
              <div className="flex-1">
                <h1 className="mb-1 text-2xl font-bold">Bitcoin Up or Down</h1>
                <p className="text-muted-foreground">October 29, 5-6AM ET</p>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Link2 className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Price Display with Countdown */}
            <div className="mb-6 flex items-start gap-8">
              <div>
                <p className="mb-1 text-xs text-muted-foreground">PRICE TO BEAT</p>
                <p className="text-3xl font-bold text-muted-foreground">$112,974.44</p>
              </div>
              <div>
                <p className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                  CURRENT PRICE
                  <span className="text-green-600">▲$134</span>
                </p>
                <p className="text-3xl font-bold text-[#F7931A]">$113,108.73</p>
              </div>
              <div className="ml-auto text-right">
                <div className="flex items-baseline gap-2">
                  <div>
                    <p className="text-3xl font-bold text-destructive">23</p>
                    <p className="text-xs text-muted-foreground">MINS</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-destructive">00</p>
                    <p className="text-xs text-muted-foreground">SECS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart */}
            <EventChart />

            {/* Market Context */}
            <div className="mt-6 rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Market Context</h2>
                <Button variant="link" className="text-primary">
                  Generate
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Trading Panel & Related Markets */}
          <div className="space-y-6">
            <TradingPanel />
            <RelatedMarkets />
          </div>
        </div>
      </main>
    </div>
  )
}
