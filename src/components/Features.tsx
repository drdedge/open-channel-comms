import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: "🔒",
      title: "Anonymous & Secure",
      description: "Complete anonymity with end-to-end encryption and HIPAA compliance for sensitive healthcare communications."
    },
    {
      icon: "⚡",
      title: "Real-Time Communication",
      description: "Instant message delivery and moderation tools that work seamlessly in fast-paced medical environments."
    },
    {
      icon: "🎯",
      title: "Smart Moderation",
      description: "AI-powered content filtering and human moderator tools to ensure appropriate and helpful communication."
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Track participation rates, communication patterns, and patient outcomes to measure program effectiveness."
    },
    {
      icon: "🌐",
      title: "Multi-Platform Access",
      description: "Works across tablets, smartphones, and desktop computers with intuitive interfaces for all users."
    },
    {
      icon: "⚙️",
      title: "Customizable Settings",
      description: "Flexible configuration options to match your facility's specific protocols and communication needs."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Built for</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Healthcare Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every feature designed with patient safety, privacy, and effective communication at its core
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
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Communication?</h3>
          <p className="text-lg opacity-90 mb-6">
            Join leading healthcare facilities already using SilentSpeak to improve patient outcomes and team collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;