import { Button } from "@/components/ui/button";
import { ChevronDown, Phone, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import dhabaImage from "@assets/generated_images/traditional_dhaba_interior.png";

export default function Hero() {
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${dhabaImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      
      <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-primary font-medium text-sm sm:text-base uppercase tracking-[0.2em] mb-4"
          >
            Authentic North Indian Cuisine
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 sm:mb-6 tracking-tight leading-tight"
          >
            Dhaba Junction
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
          >
            Faridabad's Favorite Family Dhaba - Where Tradition Meets Taste
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <Button 
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium"
              onClick={() => handleScroll('menu')}
              data-testid="button-view-menu"
            >
              View Our Menu
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50"
              onClick={() => handleScroll('contact')}
              data-testid="button-book-table-hero"
            >
              Book a Table
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-10"
        >
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-white/70 text-xs sm:text-sm px-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>11 AM - 1:30 AM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-center">Sector-11, Faridabad</span>
            </div>
            <a href="tel:+919811824555" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 98118 24555</span>
            </a>
          </div>
          
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => handleScroll('about')}
              className="text-white/60 hover:text-white transition-colors"
              aria-label="Scroll down"
              data-testid="button-scroll-down"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
