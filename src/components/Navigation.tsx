import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gradient-to-br from-coral via-accent to-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">KT</span>
          </div>
          <div className="hidden md:block">
            <p className="font-bold text-foreground text-sm">KARANG PKP 05</p>
            <p className="text-xs text-muted-foreground">PABUARAN BOGOR</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          <Link to="/">
            <Button variant="ghost" className="font-medium">
              Home
            </Button>
          </Link>
          <Link to="/join-kartar">
            <Button variant="ghost" className="font-medium">
              Join Kartar
            </Button>
          </Link>
          <Link to="/struktur-organisasi">
            <Button variant="ghost" className="font-medium">
              Struktur Organisasi
            </Button>
          </Link>
          <Link to="/gallery">
            <Button variant="ghost" className="font-medium">
              Gallery
            </Button>
          </Link>
        </div>

        <Link to="/login">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Login
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
