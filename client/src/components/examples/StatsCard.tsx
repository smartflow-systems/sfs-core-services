import { StatsCard } from "../StatsCard";
import { ThemeProvider } from "../ThemeProvider";
import { Users } from "lucide-react";

export default function StatsCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8 max-w-sm">
        <StatsCard
          title="Total Users"
          value="1,234"
          change="+12.5%"
          trend="up"
          icon={Users}
        />
      </div>
    </ThemeProvider>
  );
}
