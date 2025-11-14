import { StatsCard } from "@/components/StatsCard";
import { Users, DollarSign, Activity, TrendingUp } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const recentActivity = [
    { event: "New user signup", user: "john@example.com", time: "2 minutes ago" },
    { event: "Payment successful", user: "sarah@example.com", time: "5 minutes ago" },
    { event: "Subscription upgraded", user: "mike@example.com", time: "12 minutes ago" },
    { event: "Webhook delivered", user: "stripe.checkout.session", time: "15 minutes ago" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Overview</h1>
        <p className="text-muted-foreground">Monitor your application metrics and activity</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="1,234"
          change="+12.5%"
          trend="up"
          icon={Users}
        />
        <StatsCard
          title="Active Subscriptions"
          value="856"
          change="+8.3%"
          trend="up"
          icon={TrendingUp}
        />
        <StatsCard
          title="Monthly Revenue"
          value="$12,450"
          change="+15.2%"
          trend="up"
          icon={DollarSign}
        />
        <StatsCard
          title="API Calls"
          value="45.2K"
          change="-2.1%"
          trend="down"
          icon={Activity}
        />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest events from your application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between py-3 border-b last:border-0"
                data-testid={`activity-${idx}`}
              >
                <div>
                  <p className="font-medium">{activity.event}</p>
                  <p className="text-sm text-muted-foreground">{activity.user}</p>
                </div>
                <Badge variant="secondary">{activity.time}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
