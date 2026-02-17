import Link from "next/link";

export default function AppDashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
              FF
            </div>
            <span className="text-sm font-semibold tracking-tight sm:text-base">
              FreelanceFlow
            </span>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-muted-foreground sm:flex">
            <Link href="/app" className="font-medium text-foreground">
              Home
            </Link>
            <Link href="/app/profile" className="transition-colors hover:text-foreground">
              Profile
            </Link>
            <button className="transition-colors hover:text-foreground">
              Jobs
            </button>
            <button className="transition-colors hover:text-foreground">
              My Jobs
            </button>
            <button className="transition-colors hover:text-foreground">
              Messages
            </button>
            <button className="transition-colors hover:text-foreground">
              Reports
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden flex-col items-end text-right text-xs sm:flex">
              <span className="font-medium text-foreground">Your workspace</span>
              <span className="text-muted-foreground">Client / Freelancer</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold">
              U
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-1 flex-col gap-6 px-4 py-6 sm:px-6 sm:py-8">
        <section className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
            <h1 className="text-xl font-semibold sm:text-2xl">
              Welcome to your FreelanceFlow workspace
            </h1>
            <p className="text-sm text-muted-foreground">
              This is a placeholder dashboard. In the future, you&apos;ll see
              active contracts, proposals, and messages here—similar to an Upwork-style
              overview.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-background/80 p-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Active jobs
                </p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">0</p>
              </div>
              <div className="rounded-xl border border-border bg-background/80 p-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Proposals
                </p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">0</p>
              </div>
              <div className="rounded-xl border border-border bg-background/80 p-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Unread messages
                </p>
                <p className="mt-1 text-2xl font-semibold tabular-nums">0</p>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-3 rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-foreground">
              Getting started
            </h2>
            <p className="text-xs text-muted-foreground">
              This sidebar is a placeholder for quick actions—like posting a job,
              browsing talent, or tracking contracts.
            </p>
            <ul className="mt-1 space-y-1.5 text-xs text-muted-foreground">
              <li>• Post a job or create a new contract</li>
              <li>• Review open proposals and invites</li>
              <li>• Check timesheets and recent payments</li>
            </ul>
          </aside>
        </section>
      </main>
    </div>
  );
}

