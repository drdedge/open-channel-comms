import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import Impact from "@/components/Impact";
import Investors from "@/components/Investors";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Impact />
        <Investors />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
