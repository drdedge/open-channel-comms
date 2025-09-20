import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Investors = () => {
  const marketData = [
    {
      title: "Total Addressable Market",
      value: "$45.8B",
      description: "Global healthcare communication software market by 2028"
    },
    {
      title: "Market Growth Rate",
      value: "12.4%",
      description: "CAGR for healthcare IT solutions (2023-2028)"
    },
    {
      title: "Target Facilities",
      value: "6,090",
      description: "US hospitals and 12,000+ therapy centers"
    }
  ];

  const businessModel = [
    {
      title: "SaaS Subscription",
      description: "Monthly per-facility licensing with tiered pricing based on size and features"
    },
    {
      title: "Implementation Services",
      description: "Professional onboarding, training, and customization services"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom integrations with existing EHR systems and hospital infrastructure"
    }
  ];

  const traction = [
    {
      metric: "Revenue Growth",
      value: "340%",
      period: "Year-over-year"
    },
    {
      metric: "Customer Retention",
      value: "96%",
      period: "Annual retention rate"
    },
    {
      metric: "Pipeline Value",
      value: "$2.8M",
      period: "Qualified opportunities"
    }
  ];

  return (
    <section id="investors" className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Investment</span>{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Opportunity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionizing healthcare communication with proven traction and massive market potential
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Market Opportunity</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {marketData.map((data, index) => (
              <Card key={index} className="text-center shadow-card border-0 bg-card/80 backdrop-blur">
                <CardContent className="pt-8">
                  <div className="text-3xl font-bold text-primary mb-2">{data.value}</div>
                  <div className="text-lg font-semibold mb-2">{data.title}</div>
                  <div className="text-sm text-muted-foreground">{data.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Model */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Scalable Business Model</h3>
            <div className="space-y-4">
              {businessModel.map((model, index) => (
                <Card key={index} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">{model.title}</h4>
                    <p className="text-muted-foreground">{model.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Proven Traction</h3>
            <div className="space-y-6">
              {traction.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <div className="font-semibold">{item.metric}</div>
                    <div className="text-sm text-muted-foreground">{item.period}</div>
                  </div>
                  <div className="text-2xl font-bold text-primary">{item.value}</div>
                </div>
              ))}
            </div>

            <Card className="mt-6 shadow-card border-0 bg-secondary/10">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-secondary mb-2">Recent Milestone</h4>
                <p className="text-muted-foreground">
                  Completed successful Series A funding round of $3.2M led by HealthTech Ventures, 
                  with participation from Innovation Capital and strategic healthcare investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Differentiators */}
        <Card className="mb-16 shadow-glow border-0 bg-gradient-subtle">
          <CardHeader className="pb-8">
            <CardTitle className="text-2xl text-center">Competitive Advantages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">First-Mover Advantage</h4>
                <p className="text-sm text-muted-foreground">Only solution addressing both neurodivergent therapy and medical hierarchy challenges</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-secondary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Clinical Validation</h4>
                <p className="text-sm text-muted-foreground">Peer-reviewed studies showing measurable patient and safety outcomes</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Strong IP Portfolio</h4>
                <p className="text-sm text-muted-foreground">3 granted patents with 5 pending applications in key markets</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h4 className="font-semibold mb-2">Expert Team</h4>
                <p className="text-sm text-muted-foreground">Led by healthcare veterans with 50+ years combined experience</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <Card className="shadow-glow border-0 bg-gradient-hero text-primary-foreground">
          <CardContent className="p-12 text-center">
            <CardTitle className="text-3xl mb-4">Partner With Us</CardTitle>
            <CardDescription className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join us in revolutionizing healthcare communication. Currently raising Series B to accelerate market expansion and product development.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="xl" className="bg-white text-primary border-white hover:bg-white/90">
                Download Investor Deck
              </Button>
              <Button variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-primary">
                Schedule Investor Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Investors;