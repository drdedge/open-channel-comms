import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">🔉</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">SilentSpeak</span>
                <span className="text-sm opacity-80">Silent participation for shared therapy spaces</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              SilentSpeak lets anxious and neurodivergent young people contribute by typing,
              with facilitators sharing messages aloud only when consent is given.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Group Therapy Prototype</a></li>
              <li><a href="#critical-healthcare-challenges" className="hover:text-primary-foreground transition-colors">Healthcare Team Exploration</a></li>
              <li><a href="#features" className="hover:text-primary-foreground transition-colors">Safeguarding Pathway</a></li>
              <li><a href="#critical-healthcare-challenges" className="hover:text-primary-foreground transition-colors">Future Applications</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/about" className="hover:text-primary-foreground transition-colors">About SilentSpeak</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <div className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} SilentSpeak. Prototype currently in proposal and partnership stage.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
