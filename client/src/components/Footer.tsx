import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl mb-4 text-foreground">Dhaba Junction</h3>
            <p className="text-muted-foreground text-sm">
              Experience authentic North Indian dhaba cuisine in Faridabad. 
              Serving families with love since years.
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
                Contact & Location
              </a>
              <a href="tel:+919811824555" className="block text-muted-foreground hover:text-foreground transition-colors text-sm">
                Call: +91 98118 24555
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-sans font-medium text-foreground mb-4 uppercase tracking-wider text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/dhabajunctionfaridabad/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate text-primary"
                data-testid="link-facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
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
                data-testid="link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Dhaba Junction, Faridabad. All rights reserved. | Open Daily: 11 AM - 1:30 AM</p>
          <p className="mt-2">A-8, Sector-11, Near Bata Flyover, Mathura Road, Faridabad 121001</p>
        </div>
      </div>
    </footer>
  );
}
