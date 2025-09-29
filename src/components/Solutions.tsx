import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import therapyImage from "@/assets/therapy-group.jpg";
import surgeryImage from "@/assets/surgery-team.jpg";
import DemoRequestDialog from "./DemoRequestDialog";

const Solutions = () => {
  return (
    <section id="critical-healthcare-challenges" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Critical Healthcare</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Challenges & Pathways</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SilentSpeak is being prepared for adolescent group therapy while mapping future uses in medical and therapeutic teams where silence hides vital information.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Therapy & Neurodivergent Care */}
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={therapyImage}
                alt="Inclusive therapy group session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect width="800" height="450" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23999"%3ETherapy Session%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-secondary rounded-full"></span>
                <span className="text-sm font-medium text-secondary">Prototype Focus</span>
              </div>
              <CardTitle className="text-2xl">Adolescent Group Therapy</CardTitle>
              <CardDescription className="text-base">
                Designed for anxious, shy, or neurodivergent teens to participate silently while staying inside the circle of care.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">How It Works:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Participants type reflections anonymously on tablets, laptops, or phones.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Facilitators review messages privately and can read them aloud with consent.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>A shared screen or participant devices display messages so every voice is present without verbal pressure.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">Key Benefits</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Reduces communication anxiety and keeps teens engaged in therapy.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>81% of surveyed teens said SilentSpeak would make it easier to speak up.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Medical Hierarchy & Surgery */}
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={surgeryImage}
                alt="Collaborative surgical team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect width="800" height="450" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23999"%3EHealthcare Team%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <span className="text-sm font-medium text-accent">Future Exploration</span>
              </div>
              <CardTitle className="text-2xl">Healthcare Teams & Hierarchies</CardTitle>
              <CardDescription className="text-base">
                Communication breakdowns contribute to over 70% of sentinel events; SilentSpeak's anonymous channel could help critical insights surface in time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">Where It Could Help:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Operating theatres where around 30% of exchanges fail and 72% of malpractice claims involve communication gaps.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Ward rounds and multidisciplinary meetings where junior staff may hold back concerns.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Clinical supervision, training, and governance conversations that need candid insights.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">What We Aim to Explore</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Anonymous alerts that prevent missed counts, dosage errors, or overlooked deterioration.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Psychological safety for staff who feel silenced by hierarchy, shyness, or neurodivergence.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <DemoRequestDialog>
            <Button variant="hero" size="xl" className="text-lg">
              Request Demo
            </Button>
          </DemoRequestDialog>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
