import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-primary">About</span>{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">SilentSpeak</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering voices in healthcare through innovative communication technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  [Mission statement placeholder - To revolutionize healthcare communication by giving voice to those who might otherwise remain silent, breaking down barriers in therapeutic and medical environments.]
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  [Vision statement placeholder - A healthcare system where every voice is heard, every opinion matters, and communication barriers no longer limit patient care or safety.]
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">[Founder Name]</h3>
                  <p className="text-muted-foreground mb-2">[Title]</p>
                  <p className="text-sm text-muted-foreground">[Brief bio placeholder]</p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">[Team Member Name]</h3>
                  <p className="text-muted-foreground mb-2">[Title]</p>
                  <p className="text-sm text-muted-foreground">[Brief bio placeholder]</p>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-8">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">[Team Member Name]</h3>
                  <p className="text-muted-foreground mb-2">[Title]</p>
                  <p className="text-sm text-muted-foreground">[Brief bio placeholder]</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-glow border-0 bg-gradient-hero text-primary-foreground">
            <CardContent className="p-12 text-center">
              <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
                [Company story placeholder - Founded by healthcare professionals who witnessed firsthand the communication challenges in medical settings, SilentSpeak was born from the need to create inclusive environments where every voice matters.]
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;