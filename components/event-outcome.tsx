import { CheckCircle2 } from "lucide-react"

export function EventOutcome() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="mb-4 flex justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
          <CheckCircle2 className="h-10 w-10 text-primary-foreground" />
        </div>
      </div>
      <h2 className="mb-2 text-center text-xl font-bold text-primary">Outcome: Down</h2>
      <p className="mb-4 text-center text-sm text-muted-foreground">Bitcoin Up or Down - October 28, 7PM ET</p>
      <p className="text-center text-xs text-muted-foreground">
        By trading, you agree to the{" "}
        <a href="#" className="underline hover:text-foreground">
          Terms of Use
        </a>
        .
      </p>
    </div>
  )
}
