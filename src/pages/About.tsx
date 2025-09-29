import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ericaImage from "@/assets/erica_picture_cartoon.png";
import davidImage from "@/assets/david_fw_profile.jpg";

const About = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-primary">About</span>{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">SilentSpeak</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              SilentSpeak is an AI-supported, patent-pending tool that lets young people join group therapy quietly through typed, anonymous contributions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  SilentSpeak was created to help anxious, shy, and neurodivergent teens stay engaged in therapy. By letting participants type during live sessions, facilitators can read reflections aloud with consent, keeping every young person included without forcing them to speak before they are ready.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We imagine therapy rooms, schools, clinics, and workplaces where silence is invited, not questioned. SilentSpeak nurtures environments that honour sensitivity, make room for gradual beginnings, and turn quiet observations into contributions that strengthen community feeling.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-4xl mx-auto">
              <Card className="shadow-card text-center">
                <CardContent className="pt-8 space-y-4">
                  <img
                    src={ericaImage}
                    alt="Portrait illustration of Erica Lyons"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Ccircle cx="48" cy="48" r="48" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23999"%3EEL%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Erica Lyons</h3>
                    <p className="text-muted-foreground mb-2">Founder & Trainee Doctor</p>
                    <p className="text-sm text-muted-foreground">
                      Erica brings over 15 years of nursing experience in the United States, is neurodivergent, and is raising two neurodivergent children—fueling her commitment to more compassionate, accessible mental health care.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card text-center">
                <CardContent className="pt-8 space-y-4">
                  <img
                    src={davidImage}
                    alt="Professional profile photograph of David Edgeley"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Ccircle cx="48" cy="48" r="48" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23999"%3EDE%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">David Edgeley</h3>
                    <p className="text-muted-foreground mb-2">Technical Lead</p>
                    <p className="text-sm text-muted-foreground">
                      David applies a decade of machine learning leadership across finance and AI product delivery. With a PhD in computational pharmacy modelling drug compounds, he now guides SilentSpeak’s data architecture, safeguarding intelligence, and responsible AI roadmap.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-glow border-0 bg-gradient-hero text-primary-foreground">
            <CardContent className="p-12 text-center">
              <CardTitle className="text-3xl mb-4">Our Story</CardTitle>
              <CardDescription className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
                SilentSpeak began with a simple observation: many young people leave therapy or stay silent because speaking out loud feels impossible. The project asks what would happen if technology offered a quieter path. Messages are typed, privacy panels protect participation, and safeguarding features alert facilitators when a teen may be at risk. Inspired by the compassion of Florence Nightingale and the transformative intent of Alfred Nobel, SilentSpeak uses AI to nurture inclusion rather than fear. We are gathering surveys, funding, and partnerships so that silence can become another way to be heard.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
