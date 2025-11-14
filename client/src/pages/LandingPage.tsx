import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { QuickStartSection } from "@/components/QuickStartSection";
import { TechStackSection } from "@/components/TechStackSection";
import { IntegrationShowcase } from "@/components/IntegrationShowcase";
import { CTASection } from "@/components/CTASection";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-md" />
            <span className="font-bold text-lg">Node Boilerplate</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" data-testid="button-nav-github">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <FeaturesGrid />
        <QuickStartSection />
        <TechStackSection />
        <IntegrationShowcase />
        <CTASection />
      </main>
      
      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Node Boilerplate. Built with Express, Prisma, and PostgreSQL.
          </p>
        </div>
      </footer>
    </div>
  );
}
