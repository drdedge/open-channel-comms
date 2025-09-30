import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ericaImage from "@/assets/erica_picture_cartoon.png";
import mayaImage from "@/assets/maya_profile.jpg";
import davidImage from "@/assets/DaveProfessional.jpeg";

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


          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start max-w-6xl mx-auto">
              <Card className="shadow-card text-center">
                <CardContent className="pt-8 space-y-4">
                  <img
                    src={ericaImage}
                    alt="Portrait illustration of Erica Lyon"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Ccircle cx="48" cy="48" r="48" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23999"%3EEL%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Erica Lyon</h3>
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
                    src={mayaImage}
                    alt="Professional profile photograph of Maya Rehill"
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="96" height="96"%3E%3Ccircle cx="48" cy="48" r="48" fill="%23e0e0e0"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23999"%3EMR%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Maya Rehill</h3>
                    <p className="text-muted-foreground mb-2">Director of Operations & Governance</p>
                    <p className="text-sm text-muted-foreground">
                      Maya brings 17+ years of programme and project management across Technology, Financial Services, and Government sectors. As founder of Riari J'Dorn, she uses diamond jewellery sales to fund ADHD/ASD assessments for children, turning each purchase into two assessments—one for the buyer's family and one for a child in need.
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
                      David applies a decade of machine learning leadership across finance and AI product delivery. With a PhD in computational pharmacy modelling drug compounds, he now guides SilentSpeak's data architecture, safeguarding intelligence, and responsible AI roadmap.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-glow border-0 bg-gradient-hero text-primary-foreground">
            <CardContent className="p-12">
              <CardTitle className="text-3xl mb-6 text-center">Why SilentSpeak Exists</CardTitle>
              <div className="space-y-4 text-base text-primary-foreground/95 max-w-4xl mx-auto leading-relaxed">
                <p>
                  <strong>The Crisis:</strong> Suicide was the leading cause of death for people aged 5-35 in England in 2022, with three-quarters being boys or young men. Suicide rates among 15-19 year olds rose by 35% from 2020 to 2021—the highest in over 30 years. In 2023/24, 78,577 young people waited over a year for NHS mental health treatment, with 59% reporting their mental health worsened while waiting.
                </p>

                <p>
                  <strong>The Problem:</strong> Many teenagers—especially those with anxiety, shyness, or neurodivergence (autism, ADHD, dyslexia)—struggle to speak during group therapy. Research shows communication failures contribute to over 70% of adverse events in healthcare settings. Yet most digital mental health tools focus on individual therapy or crisis support. Very few enable silent, secure participation within live group settings where connection and community feeling are vital.
                </p>

                <p>
                  <strong>The Evidence:</strong> Early surveys with 62 respondents (teens, parents, clinicians, and adults) showed remarkable support. Among teens, 81% said SilentSpeak would make speaking up easier, 76% preferred typing over talking, and 71% felt it would help them be heard. Every teacher and clinician surveyed agreed it could improve inclusion and focus. Among parents, 93% would support their child using it, and 86% believed it could ease communication anxiety. More than half of adults said they would consider using it themselves.
                </p>

                <p>
                  <strong>Our Solution:</strong> SilentSpeak is a patent-pending AI tool that allows teens to type their thoughts during group therapy sessions. Messages appear on the facilitator's device and can be read aloud with consent, displayed on a screen, or followed on participants' devices. Privacy panels shield contributors. AI gently rephrases content, offers prompts, and draws on stoicism, radical acceptance, and Adlerian therapy principles—emphasizing social connection, encouragement, and community feeling. A safeguarding feature under development will quietly alert facilitators to high-risk language, enabling earlier interventions when someone feels unsafe.
                </p>

                <p>
                  <strong>Our Inspiration:</strong> SilentSpeak draws from leaders like Florence Nightingale, who used data and empathy to transform hospital care, and Alfred Nobel, who turned something once feared into a force for human progress. Similarly, SilentSpeak uses AI—a technology some fear—to offer connection, healing, and inclusion. It shows that technology can support, protect, and mend rather than divide.
                </p>

                <p>
                  <strong>Beyond Group Therapy:</strong> While designed for anxious and neurodivergent teens, SilentSpeak has potential to reshape communication across settings—adult therapy groups, medical teams (reducing surgical errors and hierarchical silence), workplaces, schools, refugee support, palliative care, and legal testimony for trauma survivors. We imagine therapy rooms, classrooms, clinics, and workplaces where silence is invited, not questioned—where every voice can be heard, even when speaking feels impossible.
                </p>

                <p className="font-semibold pt-2">
                  SilentSpeak is more than a tool. It is a step toward changing how we listen to those who cannot speak out loud. We are gathering funding, partnerships, and support to bring SilentSpeak to life—so that silence can become another way to be heard, and no young person feels invisible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
