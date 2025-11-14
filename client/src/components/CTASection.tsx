import { ArrowRight, Github, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CTASection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <Badge variant="secondary" className="mb-6">
          Open Source
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Building Now</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join developers shipping faster with production-ready infrastructure
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Button size="lg" data-testid="button-github">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
          <Button variant="outline" size="lg" data-testid="button-documentation">
            <BookOpen className="mr-2 h-5 w-5" />
            Read Documentation
          </Button>
        </div>
        
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>MIT License</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Production Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}
