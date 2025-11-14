import { ArrowRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import heroImage from "@assets/generated_images/Developer_workflow_hero_background_50900a78.png";

export function HeroSection() {
  const [copied, setCopied] = useState(false);
  const codeSnippet = "npx create-node-boilerplate my-app";

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
          Production-Ready Node.js Boilerplate
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Express + Prisma + PostgreSQL with authentication, billing, email, analytics, and webhooks built-in
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button size="lg" data-testid="button-get-started">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" data-testid="button-view-docs">
            View Documentation
          </Button>
        </div>

        <Card className="max-w-2xl mx-auto p-6">
          <div className="flex items-center justify-between gap-4">
            <code className="flex-1 text-left font-mono text-sm bg-muted px-4 py-3 rounded-md">
              {codeSnippet}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              data-testid="button-copy-command"
            >
              {copied ? (
                <Check className="h-4 w-4 text-primary" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
