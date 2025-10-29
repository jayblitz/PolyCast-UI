import { Header } from "@/components/header"
import { EventNav } from "@/components/event-nav"

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EventNav />
      <main className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Activity</h1>
        <div className="rounded-lg border bg-card p-8 text-center">
          <p className="text-muted-foreground">Your activity feed is coming soon.</p>
        </div>
      </main>
    </div>
  )
}
