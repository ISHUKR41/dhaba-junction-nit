import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#home");
                }}
                className={`font-serif text-xl sm:text-2xl font-bold transition-colors ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
                data-testid="link-logo"
              >
                Dhaba Junction
              </a>
            </motion.div>

            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    isScrolled
                      ? "text-foreground hover:bg-accent"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  data-testid={`link-nav-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                href="tel:+919811824555"
                className={`flex items-center gap-2 text-sm ${
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                }`}
                data-testid="link-phone-nav"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+91 98118 24555</span>
              </motion.a>
              <Button
                size="sm"
                onClick={() => scrollToSection("#contact")}
                data-testid="button-book-table-nav"
              >
                Book Table
              </Button>
            </div>

            <div className="lg:hidden">
              <Button
                size="icon"
                variant={isScrolled ? "ghost" : "ghost"}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={isScrolled ? "" : "text-white hover:bg-white/10"}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-background/98 backdrop-blur-lg border-b border-border lg:hidden overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="px-4 py-3 text-foreground font-medium rounded-md hover:bg-accent transition-colors"
                    data-testid={`link-mobile-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="pt-4 border-t border-border mt-2 space-y-3">
                  <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+919811824555">+91 98118 24555</a>
                  </div>
                  <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>11 AM - 1:30 AM Daily</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Sector-11, Faridabad</span>
                  </div>
                  <Button
                    className="w-full mt-2"
                    onClick={() => scrollToSection("#contact")}
                    data-testid="button-book-table-mobile"
                  >
                    Book Table
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
