import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DemoRequestDialog from "./DemoRequestDialog";
import { features } from "@/data/features";

const Features = () => {

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Built for</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Silent Participation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Each element of SilentSpeak mirrors real therapy-room needs so anxious and neurodivergent voices can join safely and on their own terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 text-center text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">We are gathering partners and feedback.</h3>
          <p className="text-lg opacity-90 mb-6">
            SilentSpeak is in its proposal stage, seeking collaborations, funding, and lived-experience insight to bring the platform to life.
          </p>
          <DemoRequestDialog>
            <Button variant="hero" size="lg" className="text-base">
              Request Demo
            </Button>
          </DemoRequestDialog>
        </div>
      </div>
    </section>
  );
};

export default Features;
