import { SiExpress, SiPrisma, SiPostgresql, SiStripe, SiGoogleanalytics } from "react-icons/si";
import { Mail } from "lucide-react";

const technologies = [
  { name: "Express", icon: SiExpress, color: "text-foreground" },
  { name: "Prisma", icon: SiPrisma, color: "text-foreground" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-chart-1" },
  { name: "Stripe", icon: SiStripe, color: "text-chart-3" },
  { name: "Resend", icon: Mail, color: "text-foreground" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "text-chart-4" }
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built with Modern Tools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-standard technologies for reliability and performance
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-12">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-3 group"
                data-testid={`tech-${tech.name.toLowerCase()}`}
              >
                <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-card hover-elevate transition-all">
                  <Icon className={`h-12 w-12 ${tech.color}`} />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
