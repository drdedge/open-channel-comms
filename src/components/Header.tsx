import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🔉</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">SilentSpeak</span>
            <span className="text-xs text-muted-foreground">Empowering Every Voice</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#solutions" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#impact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Impact
          </a>
          <a href="#investors" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            For Investors
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Request Demo
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;