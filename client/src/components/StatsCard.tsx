import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: "up" | "down";
  icon: LucideIcon;
}

export function StatsCard({ title, value, change, trend, icon: Icon }: StatsCardProps) {
  return (
    <Card data-testid={`card-stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
            {trend === "up" ? (
              <TrendingUp className="h-3 w-3 text-chart-2" />
            ) : (
              <TrendingDown className="h-3 w-3 text-destructive" />
            )}
            <span className={trend === "up" ? "text-chart-2" : "text-destructive"}>
              {change}
            </span>
            <span>from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
