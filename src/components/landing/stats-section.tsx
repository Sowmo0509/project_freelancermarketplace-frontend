import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, LucideIcon, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import type { ViewKey } from "@/components/landing/landing-data";

type DashboardMetric = {
  label: string;
  amount: number;
  percentage: string;
  isPositive?: boolean;
};

type MainDashboardData = {
  title: string;
  description: string;
  metrics: DashboardMetric[];
};

type StatItem = {
  title: string;
  value: string;
  percentage: string;
  icon: LucideIcon;
  isPositive?: boolean;
};

type StatsSectionProps = {
  view: ViewKey;
};

const clientMainDashboardData: MainDashboardData = {
  title: "Clients saving money on every project",
  description: "Compared to others that charge up to 25% platform fees on earnings.",
  metrics: [
    {
      label: "Total Spent",
      amount: 9271265,
      percentage: "+25%",
      isPositive: true,
    },
    {
      label: "Total Saved",
      amount: 0,
      percentage: "100%",
      isPositive: true,
    },
  ],
};

const freelancerMainDashboardData: MainDashboardData = {
  title: "Freelancers keeping more of what they earn",
  description: "No platform commission taken from your payouts or hourly rates.",
  metrics: [
    {
      label: "Total Earned",
      amount: 6150000,
      percentage: "+22%",
      isPositive: true,
    },
    {
      label: "Total Kept",
      amount: 0,
      percentage: "100%",
      isPositive: true,
    },
  ],
};

const clientSecondaryStatsData: StatItem[] = [
  {
    title: "Jobs posted this year",
    value: "67,322",
    percentage: "+31%",
    icon: CalendarDays,
    isPositive: true,
  },
  {
    title: "Active recurring clients",
    value: "860",
    percentage: "+19%",
    icon: ShoppingBag,
    isPositive: true,
  },
];

const freelancerSecondaryStatsData: StatItem[] = [
  {
    title: "Projects completed this year",
    value: "42,180",
    percentage: "+27%",
    icon: CalendarDays,
    isPositive: true,
  },
  {
    title: "Freelancers with recurring work",
    value: "3,450",
    percentage: "+21%",
    icon: ShoppingBag,
    isPositive: true,
  },
];

/**
 * Formats a numeric amount into a compact, human-readable string (for example, `1.2M` or `9.3K`).
 *
 * @param amount - The numeric value to format.
 * @returns A compact string: values >= 1,000,000 use `M`, values >= 1,000 use `K` (both with one decimal precision and any trailing `.0` removed), otherwise the locale-formatted number.
 */
function formatCompactNumber(amount: number) {
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return amount.toLocaleString();
}

const StatsSection = ({ view }: StatsSectionProps) => {
  const mainDashboard = view === "client" ? clientMainDashboardData : freelancerMainDashboardData;
  const secondaryStats = view === "client" ? clientSecondaryStatsData : freelancerSecondaryStatsData;

  const baseLabel = view === "client" ? "Total Spent" : "Total Earned";
  const savedLabel = view === "client" ? "Total Saved" : "Total Kept";

  const spendingMetric = mainDashboard.metrics.find((metric) => metric.label === baseLabel);
  const spendingAmount = spendingMetric?.amount ?? 0;

  const computedMetrics = mainDashboard.metrics.map((metric) => {
    if (metric.label === savedLabel) {
      return {
        ...metric,
        amount: spendingAmount * 0.4,
      };
    }

    return metric;
  });

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <SectionHeading eyebrow={"Everyday Analytics"} title={view === "client" ? "Our stats reflect smarter client spend" : "Our stats reflect better freelancer earnings"} />

      <div className="py-4 w-full">
        <div className="grid grid-cols-12 gap-6 h-full">
          <div className="col-span-12 xl:col-span-6 h-full">
            <Card className="p-0 ring-0 border rounded-2xl relative h-full">
              <CardContent className="p-0">
                <div className="ps-6 py-4 flex flex-col gap-9 justify-between">
                  <div>
                    <p className="text-lg font-medium text-card-foreground">{mainDashboard.title}</p>
                    <p className="text-xs font-normal text-muted-foreground">{mainDashboard.description}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    {computedMetrics.map((metric, index) => (
                      <div key={index} className="flex items-center gap-6">
                        <div>
                          <p className="text-xs font-normal text-muted-foreground">{metric.label}</p>
                          <div className="flex items-center gap-1">
                            <p className="text-2xl font-medium text-card-foreground">${formatCompactNumber(metric.amount)}</p>
                            <Badge className={cn("font-normal text-muted-foreground", metric.isPositive ? "bg-teal-400/10 " : "bg-red-500/10")}>{metric.percentage}</Badge>
                          </div>
                        </div>
                        {index < mainDashboard.metrics.length - 1 && <Separator orientation="vertical" className={"h-12"} />}
                      </div>
                    ))}
                  </div>
                </div>
                <Image src="https://images.shadcnspace.com/assets/backgrounds/stats-01.webp" alt="user-img" width={211} height={168} className="absolute bottom-0 right-0 hidden sm:block" />
              </CardContent>
            </Card>
          </div>

          {secondaryStats.map((stat, index) => (
            <div key={index} className="col-span-12 sm:col-span-6 xl:col-span-3">
              <Card className="p-6 ring-0 border rounded-2xl">
                <CardContent className="p-0 flex items-start justify-between">
                  <div className="flex flex-col gap-5 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-medium text-card-foreground">{stat.title}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-medium text-card-foreground">{stat.value}</p>
                        <Badge className={cn("font-normal text-muted-foreground", stat.isPositive !== false ? "bg-teal-400/10" : "bg-red-500/10")}>{stat.percentage}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{view === "client" ? (index === 0 ? "Post jobs without platform commission." : "Keep 20–40% of your budget in savings.") : index === 0 ? "Win projects without giving up a fee cut." : "Keep 100% of the rate you charge."}</p>
                  </div>
                  <div className="p-3 rounded-full outline">
                    <stat.icon size={16} />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { StatsSection };