import { motion } from "framer-motion";
import { Check } from "lucide-react";
import dhabaInteriorImage from "@assets/generated_images/traditional_dhaba_interior.png";

const features = [
  "Authentic Dhaba-style Ambiance",
  "Family-friendly Environment",
  "Event Hosting (10-200 Guests)",
  "Pure Vegetarian Kitchen",
  "AC & Open-air Seating",
  "Ample Parking Space"
];

export default function AmbianceSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <img 
                src={dhabaInteriorImage} 
                alt="Dhaba Junction dining atmosphere"
                className="w-full h-auto object-cover rounded-xl shadow-xl"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
                <p className="font-serif text-lg sm:text-2xl font-semibold">Since Years</p>
                <p className="text-xs sm:text-sm opacity-90">Serving Faridabad</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 space-y-4 sm:space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
              Family Dining at Its Best
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Dhaba Junction, we believe in creating memorable dining experiences for families 
              and friends. Our spacious venue combines the warmth of traditional dhaba hospitality 
              with modern comfort and hygiene standards.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Located conveniently on Delhi-Mathura Highway near Bata Flyover in Sector-11, Faridabad, 
              we're the perfect stop for authentic North Indian cuisine. Whether it's a family celebration, 
              casual dinner, or event hosting, we've got you covered.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm sm:text-base text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 sm:pt-6 border-t border-border">
              <h3 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-xs sm:text-sm">
                Our Specialty
              </h3>
              <p className="text-muted-foreground italic text-sm sm:text-base">
                "From our signature Dal Makhani to fresh Tandoori breads, every dish is crafted with authentic spices and traditional cooking methods."
              </p>
              <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">
                <span className="font-medium">Cuisine:</span> North Indian & Chinese | <span className="font-medium">Type:</span> Casual Dining & Dhaba
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
