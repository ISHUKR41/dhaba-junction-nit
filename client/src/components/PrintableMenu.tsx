import { Button } from "@/components/ui/button";
import { Download, Phone } from "lucide-react";
import { motion } from "framer-motion";
import dalMakhaniImage from "@assets/generated_images/dal_makhani_in_copper_bowl.png";
import paneerButterImage from "@assets/generated_images/paneer_butter_masala_dish.png";
import paneerTikkaImage from "@assets/generated_images/tandoori_paneer_tikka_platter.png";
import biryaniImage from "@assets/generated_images/vegetable_biryani_in_handi.png";
import naanImage from "@assets/generated_images/hot_butter_naan_bread.png";
import tandooriPlatterImage from "@assets/generated_images/assorted_tandoori_platter.png";
import gulabJamunImage from "@assets/generated_images/gulab_jamun_dessert.png";
import choleBhatureImage from "@assets/generated_images/chole_bhature_combo.png";

const dishImages = [
  { id: 1, image: dalMakhaniImage, name: "Dal Makhani" },
  { id: 2, image: paneerButterImage, name: "Paneer Butter Masala" },
  { id: 3, image: paneerTikkaImage, name: "Paneer Tikka" },
  { id: 4, image: biryaniImage, name: "Veg Biryani" },
  { id: 5, image: naanImage, name: "Fresh Butter Naan" },
  { id: 6, image: tandooriPlatterImage, name: "Tandoori Platter" },
  { id: 7, image: gulabJamunImage, name: "Gulab Jamun" },
  { id: 8, image: choleBhatureImage, name: "Chole Bhature" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 }
  }
};

export default function PrintableMenu() {
  const handleDownload = () => {
    window.print();
  };

  const handleCall = () => {
    window.location.href = 'tel:+919811824555';
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground">
            Our Dishes Gallery
          </h2>
          <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
            Browse our authentic North Indian delicacies
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleDownload}
              data-testid="button-download-menu"
              className="gap-2 w-full sm:w-auto"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Print Menu
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleCall}
              data-testid="button-call-order"
              className="gap-2 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call to Order
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          id="printable-menu"
        >
          {dishImages.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-lg sm:rounded-xl shadow-md hover-elevate">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
                {dish.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-muted-foreground print:block hidden">
          <p className="font-serif text-xl sm:text-2xl mb-2">Dhaba Junction</p>
          <p>A-8, Sector-11, Near Bata Flyover, Mathura Road, Faridabad 121001</p>
          <p>Open Daily: 11:00 AM - 1:30 AM | Phone: +91 98118 24555</p>
        </div>
      </div>
    </section>
  );
}
