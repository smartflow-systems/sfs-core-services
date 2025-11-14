import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import LandingPage from "@/pages/LandingPage";
import DashboardLayout from "@/pages/DashboardLayout";
import DashboardPage from "@/pages/DashboardPage";
import LoginPage from "@/pages/LoginPage";
import BillingPage from "@/pages/BillingPage";
import WebhooksPage from "@/pages/WebhooksPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import SettingsPage from "@/pages/SettingsPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/dashboard">
        <DashboardLayout>
          <DashboardPage />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/billing">
        <DashboardLayout>
          <BillingPage />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/webhooks">
        <DashboardLayout>
          <WebhooksPage />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/analytics">
        <DashboardLayout>
          <AnalyticsPage />
        </DashboardLayout>
      </Route>
      <Route path="/dashboard/settings">
        <DashboardLayout>
          <SettingsPage />
        </DashboardLayout>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Router />
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
