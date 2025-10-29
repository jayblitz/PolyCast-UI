import { Header } from "@/components/header"
import { EventNav } from "@/components/event-nav"

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EventNav />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Leaderboard</h1>
        <div className="rounded-lg border bg-card p-8 text-center">
          <p className="text-muted-foreground">The leaderboard is coming soon.</p>
        </div>
      </main>
    </div>
  )
}
