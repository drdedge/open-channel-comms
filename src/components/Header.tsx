import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import DemoRequestDialog from "./DemoRequestDialog";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b shadow-soft">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🔉</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">SilentSpeak</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">Silent participation made possible</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/#critical-healthcare-challenges"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            onClick={(e) => {
              if (window.location.pathname === "/" || window.location.pathname === "/silentspeak-website/") {
                e.preventDefault();
                document.getElementById("critical-healthcare-challenges")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Solutions
          </Link>
          <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <DemoRequestDialog>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Request Demo
            </Button>
          </DemoRequestDialog>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-6 mt-8">
                <Link
                  to="/#critical-healthcare-challenges"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={(e) => {
                    setOpen(false);
                    if (window.location.pathname === "/" || window.location.pathname === "/silentspeak-website/") {
                      e.preventDefault();
                      document.getElementById("critical-healthcare-challenges")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Solutions
                </Link>
                <Link
                  to="/about"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
                <DemoRequestDialog>
                  <Button variant="outline" size="lg" className="w-full">
                    Request Demo
                  </Button>
                </DemoRequestDialog>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        </div>

        {/* Tagline bar */}
        <div className="border-t border-border bg-gradient-hero">
          <div className="container py-2 text-center">
            <p className="text-sm font-medium text-primary-foreground">
              SilentSpeak™ gives every person a voice and a choice
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
