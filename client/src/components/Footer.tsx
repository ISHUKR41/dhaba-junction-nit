import { Instagram, Facebook, Twitter, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About Us", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/dhabajunctionfaridabad/", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-serif text-xl sm:text-2xl mb-3 sm:mb-4 text-foreground">Dhaba Junction</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Experience authentic North Indian dhaba cuisine in Faridabad. 
              Serving families with love since years.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center hover-elevate text-primary"
                  data-testid={`link-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-sans font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-muted-foreground hover:text-foreground transition-colors text-sm"
                  data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-sans font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
              Contact Info
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+919811824555" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 98118 24555</span>
              </a>
              <div className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Sector-11, Near Bata Flyover, Faridabad</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>11 AM - 1:30 AM Daily</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-sans font-medium text-foreground mb-3 sm:mb-4 uppercase tracking-wider text-xs sm:text-sm">
              Highlights
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Pure Vegetarian Kitchen</p>
              <p>North Indian & Chinese</p>
              <p>Event Hosting Available</p>
              <p>Family-friendly Ambiance</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-6 sm:pt-8 border-t border-border text-center"
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            © 2025 Dhaba Junction, Faridabad. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1 sm:mt-2">
            A-8, Sector-11, Near Bata Flyover, Mathura Road, Faridabad 121001
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
