import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DemoRequestDialog from "./DemoRequestDialog";
import { features } from "@/data/features";

const Features = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;
  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex + cardsToShow < features.length;

  const scrollLeft = () => {
    if (canScrollLeft) setStartIndex(startIndex - 1);
  };

  const scrollRight = () => {
    if (canScrollRight) setStartIndex(startIndex + 1);
  };

  const visibleFeatures = features.slice(startIndex, startIndex + cardsToShow);

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Built for</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Silent Participation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Each element of SilentSpeak mirrors real therapy-room needs so anxious and neurodivergent voices can join safely and on their own terms.
          </p>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We are gathering partners and feedback. SilentSpeak is in its proposal stage, seeking collaborations, funding, and lived-experience insight to bring the platform to life.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8">
          {visibleFeatures.map((feature, index) => (
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
        <div className="flex justify-center gap-2 mt-8 lg:hidden">
          {Array.from({ length: features.length - cardsToShow + 1 }).map((_, idx) => (
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
      </div>
    </section>
  );
};

export default Features;
