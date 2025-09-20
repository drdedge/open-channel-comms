import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Impact = () => {
  const stats = [
    {
      number: "94%",
      label: "Improved Communication",
      description: "Healthcare teams report significantly better communication flow"
    },
    {
      number: "3x",
      label: "Increased Participation",
      description: "Neurodivergent patients engage 3x more in therapeutic sessions"
    },
    {
      number: "78%",
      label: "Fewer Complications",
      description: "Reduction in medical complications due to improved team communication"
    },
    {
      number: "50+",
      label: "Healthcare Facilities",
      description: "Trusted by leading hospitals and therapy centers nationwide"
    }
  ];

  const testimonials = [
    {
      quote: "SilentSpeak has transformed how our neurodivergent patients engage in group therapy. We're seeing participation rates we never thought possible.",
      author: "Dr. Sarah Chen",
      role: "Director of Therapeutic Services",
      facility: "Metro General Hospital"
    },
    {
      quote: "In the OR, every voice matters. SilentSpeak ensures our junior staff can share critical observations without fear of hierarchy.",
      author: "Dr. Michael Rodriguez",
      role: "Chief of Surgery",
      facility: "Regional Medical Center"
    },
    {
      quote: "The anonymous nature of SilentSpeak has created a safe space where our patients feel heard and valued in their treatment journey.",
      author: "Lisa Thompson, LCSW",
      role: "Senior Therapist",
      facility: "Wellness Therapy Center"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Measurable</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Healthcare Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from healthcare professionals and patients using SilentSpeak
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-card border-0 bg-card/80 backdrop-blur">
              <CardContent className="pt-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">What Healthcare Professionals Say</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0 bg-card/80 backdrop-blur">
                <CardContent className="pt-6">
                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-primary">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.facility}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study CTA */}
        <Card className="shadow-glow border-0 bg-gradient-hero text-primary-foreground">
          <CardContent className="p-12 text-center">
            <CardTitle className="text-3xl mb-4">See SilentSpeak in Action</CardTitle>
            <CardDescription className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Download our comprehensive case studies showing real-world implementations and measurable outcomes 
              from hospitals and therapy centers.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Download Case Studies
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Impact;