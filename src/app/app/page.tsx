import Link from "next/link";

export default function AppDashboardPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[2fr,1.2fr]">
        <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card/60 p-4 sm:p-5">
          <h1 className="text-xl font-semibold sm:text-2xl">
            Welcome to your FreelanceFlow workspace
          </h1>
          <p className="text-sm text-muted-foreground">
            This is a placeholder dashboard. In the future, you'll see
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
    </div>
  );
}
