import { Lock, CreditCard, Mail, BarChart3, Webhook, Database } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Lock,
    title: "Authentication",
    description: "Replit Auth with OAuth support",
    points: ["Google, GitHub, Email login", "Session management", "Role-based access control"]
  },
  {
    icon: CreditCard,
    title: "Stripe Billing",
    description: "Complete payment integration",
    points: ["Subscription management", "Customer portal", "Invoice generation"]
  },
  {
    icon: Mail,
    title: "Email Service",
    description: "Transactional emails via Resend",
    points: ["Welcome emails", "Payment receipts", "Custom templates"]
  },
  {
    icon: BarChart3,
    title: "Analytics",
    description: "Google Analytics 4 integration",
    points: ["User tracking", "Event logging", "Custom metrics"]
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "Event-driven architecture",
    points: ["Stripe events", "Signature verification", "Retry logic"]
  },
  {
    icon: Database,
    title: "Database",
    description: "PostgreSQL with Prisma ORM",
    points: ["Type-safe queries", "Migrations", "Schema management"]
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skip the boilerplate setup and start building your product immediately
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="hover-elevate" data-testid={`card-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
