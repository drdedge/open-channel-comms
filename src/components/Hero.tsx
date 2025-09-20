import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-healthcare.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🚀 Revolutionizing Healthcare Communication
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-primary">Empowering</span>{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Every Voice
                </span>{" "}
                in Healthcare
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                SilentSpeak breaks down communication barriers in medical settings, giving voice to 
                neurodivergent individuals in therapy and healthcare teams in high-pressure environments.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Anonymous & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Real-time Communication</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span>Evidence-Based</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="text-lg">
                Schedule Demo
              </Button>
              <Button variant="outline" size="xl" className="text-lg">
                View Case Studies
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span>Trusted by 50+ Healthcare Facilities</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Healthcare professionals collaborating with SilentSpeak technology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-primary">94%</div>
              <div className="text-sm text-muted-foreground">Improved Communication</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-card">
              <div className="text-2xl font-bold text-secondary">3x</div>
              <div className="text-sm text-muted-foreground">More Participation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;