import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Terminal } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Clone & Install",
    description: "Get started in seconds",
    code: "git clone https://github.com/your-repo/node-boilerplate\ncd node-boilerplate\nnpm install"
  },
  {
    number: "2",
    title: "Configure",
    description: "Set up your environment",
    code: "cp .env.example .env\n# Add your API keys\nnpx prisma migrate dev"
  },
  {
    number: "3",
    title: "Deploy",
    description: "Ship to production",
    code: "npm run build\nnpm run deploy\n# Your app is live!"
  }
];

export function QuickStartSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Start</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From zero to production in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} data-testid={`card-step-${step.number}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-md flex items-center justify-center mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground font-mono">Terminal</span>
                  </div>
                  <pre className="text-xs font-mono text-foreground whitespace-pre-wrap">
                    {step.code}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
