import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-healthcare.jpg";
import DemoRequestDialog from "./DemoRequestDialog";

const Hero = () => {
  return (
    <section className="relative bg-gradient-subtle overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              SilentSpeak™ Prototype Overview
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Giving every person a voice and a choice
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed">
                SilentSpeak™ is a patent-pending AI tool that helps people express themselves when words are hard to find, creating safe and authentic communication across therapy, healthcare, neurodiversity support, and beyond.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Anonymous typed participation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Facilitator-guided sharing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>Privacy panels and device-based engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Safeguarding alerts in development</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <DemoRequestDialog>
                <Button variant="hero" size="xl" className="text-lg">
                  Request Demo
                </Button>
              </DemoRequestDialog>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>81% of surveyed teens said SilentSpeak would make speaking up easier.</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Therapy group using SilentSpeak to share typed reflections"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23999"%3ETherapy Group Session%3C/text%3E%3C/svg%3E';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">76%</div>
              <div className="text-sm text-muted-foreground">Preferred typing over talking</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-secondary">71%</div>
              <div className="text-sm text-muted-foreground">Felt SilentSpeak would help them be heard</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
