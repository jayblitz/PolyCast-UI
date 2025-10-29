import { Card } from "@/components/ui/card"

const relatedMarkets = [
  {
    name: "Ethereum Up or Down",
    date: "October 29, 6AM ET",
    probability: 60,
    outcome: "Up",
    color: "#627EEA",
  },
  {
    name: "XRP Up or Down",
    date: "October 29, 6AM ET",
    probability: 60,
    outcome: "Up",
    color: "#000000",
  },
  {
    name: "Solana Up or Down",
    date: "October 29, 6AM ET",
    probability: 40,
    outcome: "Up",
    color: "#9945FF",
  },
]

export function RelatedMarkets() {
  return (
    <div className="space-y-3">
      {relatedMarkets.map((market, index) => (
        <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: market.color }}
            >
              {market.name.includes("Ethereum") ? (
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                </svg>
              ) : market.name.includes("XRP") ? (
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.55 14.65l-3.7-3.7a6.5 6.5 0 0 0 0-9.2l-1.4 1.4a4.5 4.5 0 0 1 0 6.4l-3.7 3.7a1 1 0 0 1-1.4 0l-3.7-3.7a4.5 4.5 0 0 1 0-6.4l-1.4-1.4a6.5 6.5 0 0 0 0 9.2l3.7 3.7a3 3 0 0 0 4.2 0l3.7-3.7a1 1 0 0 1 1.4 0l3.7 3.7a1 1 0 0 0 1.4 0 1 1 0 0 0 0-1.4z" />
                </svg>
              ) : (
                <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.5 21l-1.9-1.9L13.1 12 5.6 4.5 7.5 2.6l9.4 9.4-9.4 9z" />
                  <path d="M16.5 21l-1.9-1.9L22.1 12l-7.5-7.5 1.9-1.9 9.4 9.4-9.4 9z" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <h3 className="mb-0.5 text-sm font-semibold">{market.name}</h3>
              <p className="text-xs text-muted-foreground">{market.date}</p>
            </div>
            <div className="text-right">
              <p className="mb-0.5 text-lg font-bold">{market.probability}%</p>
              <p className="text-xs text-muted-foreground">{market.outcome}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
