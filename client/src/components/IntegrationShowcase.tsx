import { Card } from "@/components/ui/card";
import stripeDashboard from "@assets/generated_images/Stripe_dashboard_mockup_e689f7e2.png";
import authModal from "@assets/generated_images/Authentication_modal_mockup_d8886a6e.png";

export function IntegrationShowcase() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-Integrated Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Authentication and payments ready out of the box
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Stripe Integration</h3>
              <p className="text-muted-foreground mb-6">
                Complete billing system with subscriptions, customer portal, and webhook handlers for payment events
              </p>
            </div>
            <Card className="overflow-hidden">
              <img 
                src={stripeDashboard} 
                alt="Stripe Dashboard" 
                className="w-full h-auto"
                data-testid="img-stripe-dashboard"
              />
            </Card>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3">Replit Authentication</h3>
              <p className="text-muted-foreground mb-6">
                Secure user authentication with OAuth providers including Google, GitHub, and email/password
              </p>
            </div>
            <Card className="overflow-hidden">
              <img 
                src={authModal} 
                alt="Authentication Modal" 
                className="w-full h-auto"
                data-testid="img-auth-modal"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
