import { Calendar, MapPin, Clock, Users, Star, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Calendar,
    title: "Open Daily",
    description: "7 Days a Week\nYear Round",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Sector-11, Near Bata Flyover\nMathura Road, Faridabad",
  },
  {
    icon: Clock,
    title: "Hours",
    description: "11:00 AM - 1:30 AM\nDaily",
  },
];

const highlights = [
  { icon: Users, text: "Event Hosting 10-200 Guests" },
  { icon: Star, text: "4.2 Rating on Zomato" },
  { icon: Utensils, text: "Veg & Chinese Options" },
];

export default function PopUpInfo() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-foreground">
            Welcome to Dhaba Junction
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the authentic taste of North India at Dhaba Junction, Faridabad's premier 
            casual dining destination. We serve traditional dhaba-style cuisine made with the finest 
            ingredients and cooked with love. From our signature Dal Makhani to sizzling Tandoori delights, 
            every dish celebrates the rich culinary heritage of Punjab and North India.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-card hover-elevate"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-xs sm:text-sm">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center text-sm sm:text-base whitespace-pre-line">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-foreground text-sm"
            >
              <highlight.icon className="w-4 h-4 text-primary" />
              <span>{highlight.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
