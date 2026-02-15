import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CalendarDays, LucideIcon, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";

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

type StatisticsBlock01Props = {
  mainDashboard?: MainDashboardData;
  secondaryStats?: StatItem[];
};

const mainDashboardData: MainDashboardData = {
  title: "Clients saving money on every project",
  description: "Compared to Others that charge up to 25% platform fees on earnings.",
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

const secondaryStatsData: StatItem[] = [
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

function formatCompactNumber(amount: number) {
  if (amount >= 1_000_000) {
    return `${(amount / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (amount >= 1_000) {
    return `${(amount / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  }
  return amount.toLocaleString();
}

const StatsSection = ({ mainDashboard = mainDashboardData, secondaryStats = secondaryStatsData }: StatisticsBlock01Props) => {
  const spendingMetric = mainDashboard.metrics.find((metric) => metric.label === "Total Spent");
  const spendingAmount = spendingMetric?.amount ?? 0;

  const computedMetrics = mainDashboard.metrics.map((metric) => {
    if (metric.label === "Total Saved") {
      return {
        ...metric,
        amount: spendingAmount * 0.4,
      };
    }

    return metric;
  });

  return (
    <div className="flex flex-col items-start justify-center w-full">
      <SectionHeading eyebrow={"Everyday Analytics"} title="Our stats reflect everything" />

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
                    <p className="text-sm">{index === 0 ? "Without any commison" : "Saving 20% fee always"}</p>
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
