import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import therapyImage from "@/assets/therapy-group.jpg";
import surgeryImage from "@/assets/surgery-team.jpg";
import DemoRequestDialog from "./DemoRequestDialog";

const Solutions = () => {
  const applications = [
    { icon: "💬", title: "Therapy & Mental Health", description: "Anonymous sharing in teen groups, one-on-one therapy, couples work, and Adlerian-based approaches." },
    { icon: "🏥", title: "Healthcare & Medicine", description: "Communication before and after surgery, support in palliative care, or during hospital stays when speaking is difficult." },
    { icon: "🧩", title: "Neurodiversity", description: "Tailored support for autistic (ASD) and ADHD individuals, from everyday communication to interactive assessments." },
    { icon: "👨‍👩‍👧‍👦", title: "Family & Pediatrics", description: "Interactive wellness forms that link mental and physical health in routine check-ups." },
    { icon: "🏇", title: "Sports & Recovery", description: "Beginning with equestrian therapy and rehab, expanding to golf and football, with the long-term goal of incorporating all sports universally." },
    { icon: "⚖️", title: "Justice & Law", description: "Accessible, dignified communication in court, forensic psychology, and police interviews." },
    { icon: "👥", title: "Healthcare Teams", description: "Structured, reliable communication in noisy surgical environments or high-pressure clinical settings." }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + cardsToShow < applications.length;

  const scrollLeft = () => {
    if (canScrollLeft) setStartIndex(startIndex - 1);
  };

  const scrollRight = () => {
    if (canScrollRight) setStartIndex(startIndex + 1);
  };

  const visibleApplications = applications.slice(startIndex, startIndex + cardsToShow);

  return (
    <section id="critical-healthcare-challenges" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Where</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">SilentSpeak Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether in moments of shyness, silence, illness, or stress, SilentSpeak™ gives you a voice and a choice across diverse settings.
          </p>
        </div>

        <div className="relative mb-12">
          <div className="grid md:grid-cols-3 gap-6">
          {visibleApplications.map((app, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{app.icon}</span>
                </div>
                <CardTitle className="text-xl">{app.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {app.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 hidden lg:flex"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 hidden lg:flex"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        </div>

        {/* Mobile: Show dots indicator */}
        <div className="flex justify-center gap-2 mb-12 lg:hidden">
          {Array.from({ length: applications.length - cardsToShow + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setStartIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === startIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Highlighted Cards for Primary Use Cases */}
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border-2 border-secondary">
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
                Our initial focus: helping anxious, shy, and neurodivergent teens participate silently while staying connected to the group.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">Evidence</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>81% of surveyed teens said SilentSpeak would make it easier to speak up.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>76% preferred typing over talking in group sessions.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></span>
                    <span>Every teacher and clinician surveyed agreed it could improve inclusion and focus.</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 border-2 border-accent">
            <div className="aspect-video overflow-hidden">
              <img
                src={surgeryImage}
                alt="Collaborative healthcare team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="450"%3E%3Crect width="800" height="450" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23999"%3EHealthcare Team%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <span className="text-sm font-medium text-accent">Future Vision</span>
              </div>
              <CardTitle className="text-2xl">Beyond Therapy</CardTitle>
              <CardDescription className="text-base">
                SilentSpeak has potential to transform communication across healthcare, education, sports, and justice systems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4">
                <div className="text-lg font-semibold text-primary mb-2">Impact Potential</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Over 70% of healthcare sentinel events involve communication breakdowns.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Anonymous channels can surface critical insights without fear of hierarchy or judgment.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></span>
                    <span>Universal goal: making communication accessible wherever silence holds people back.</span>
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