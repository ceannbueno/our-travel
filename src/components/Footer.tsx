import { Heart, Mountain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Our Adventures</span>
          </div>
          
          <p className="text-center text-muted-foreground max-w-md">
            Exploring the world one trail at a time. Follow our journey through nature's most beautiful places.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary" />
            <span>by two adventurers</span>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Our Travel Adventures. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
