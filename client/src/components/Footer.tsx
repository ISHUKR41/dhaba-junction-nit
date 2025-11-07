import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-foreground">Maison Éphémère</h3>
            <p className="text-muted-foreground text-sm">
              A limited-time culinary experience celebrating French bistro cuisine with modern artistry.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-foreground mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <div className="space-y-2">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Menu
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Reservations
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-foreground mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate text-primary"
                data-testid="link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate text-primary"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate text-primary"
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Maison Éphémère. All rights reserved. | Limited engagement: December 15-30, 2025</p>
        </div>
      </div>
    </footer>
  );
}
