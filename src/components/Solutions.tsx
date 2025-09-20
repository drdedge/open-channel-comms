import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import therapyImage from "@/assets/therapy-group.jpg";
import surgeryImage from "@/assets/surgery-team.jpg";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Two Critical</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Healthcare Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SilentSpeak addresses communication barriers in the most sensitive healthcare environments
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
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-secondary rounded-full"></span>
                <span className="text-sm font-medium text-secondary">Therapeutic Care</span>
              </div>
              <CardTitle className="text-2xl">Empowering Neurodivergent Voices</CardTitle>
              <CardDescription className="text-base">
                Breaking down communication barriers for individuals with autism, ADHD, and other neurodivergent conditions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">How It Works:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Participants type thoughts anonymously during group sessions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Moderator receives and can read messages aloud to the group</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Creates safe space for participation without verbal pressure</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">Impact Results</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-secondary">85%</div>
                    <div className="text-muted-foreground">Increased Participation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">92%</div>
                    <div className="text-muted-foreground">Patient Satisfaction</div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Learn More About Therapeutic Applications
              </Button>
            </CardContent>
          </Card>

          {/* Medical Hierarchy & Surgery */}
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={surgeryImage}
                alt="Collaborative surgical team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <span className="text-sm font-medium text-accent">Critical Care</span>
              </div>
              <CardTitle className="text-2xl">Breaking Down Medical Hierarchies</CardTitle>
              <CardDescription className="text-base">
                Enabling all team members to share critical observations and suggestions in high-stakes environments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-primary">How It Works:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Any team member can submit anonymous observations or concerns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Real-time alerts appear on team displays for immediate review</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Promotes open dialogue and prevents hierarchy-based oversights</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">Safety Improvements</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-accent">78%</div>
                    <div className="text-muted-foreground">Fewer Complications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">95%</div>
                    <div className="text-muted-foreground">Team Satisfaction</div>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Explore Surgical Team Solutions
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button variant="cta" size="xl" className="text-lg">
            Schedule Your Personalized Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;