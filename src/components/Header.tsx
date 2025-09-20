import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import DemoRequestDialog from "./DemoRequestDialog";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🔉</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">SilentSpeak</span>
            <span className="text-xs text-muted-foreground">Empowering Every Voice</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Solutions
          </a>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <DemoRequestDialog>
            <Button variant="outline" size="sm">
              Request Demo
            </Button>
          </DemoRequestDialog>
          <DemoRequestDialog>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </DemoRequestDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;