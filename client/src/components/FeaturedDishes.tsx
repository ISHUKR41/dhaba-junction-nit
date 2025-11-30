import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import dalMakhaniImage from "@assets/generated_images/dal_makhani_in_copper_bowl.png";
import paneerButterImage from "@assets/generated_images/paneer_butter_masala_dish.png";
import paneerTikkaImage from "@assets/generated_images/tandoori_paneer_tikka_platter.png";
import biryaniImage from "@assets/generated_images/vegetable_biryani_in_handi.png";
import kadhaiPaneerImage from "@assets/generated_images/kadhai_paneer_in_iron_pan.png";
import tandooriPlatterImage from "@assets/generated_images/assorted_tandoori_platter.png";

const dishes = [
  {
    id: 1,
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter, tomatoes and aromatic spices",
    price: "₹170",
    image: dalMakhaniImage,
    category: "Signature"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Cottage cheese simmered in a velvety tomato gravy with butter and spices",
    price: "₹219",
    image: paneerButterImage,
    category: "Popular"
  },
  {
    id: 3,
    name: "Kadhai Paneer",
    description: "Cottage cheese cooked with bell peppers, onions and aromatic kadhai masala",
    price: "₹219",
    image: kadhaiPaneerImage,
    category: "Spicy"
  },
  {
    id: 4,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese grilled in tandoor with bell peppers and onions",
    price: "₹380",
    image: paneerTikkaImage,
    category: "Starter"
  },
  {
    id: 5,
    name: "Tandoori Platter",
    description: "Assorted tandoori starters including paneer tikka, chaap and more",
    price: "₹450",
    image: tandooriPlatterImage,
    category: "Special"
  },
  {
    id: 6,
    name: "Veg Biryani",
    description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices",
    price: "₹280",
    image: biryaniImage,
    category: "Rice"
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function FeaturedDishes() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground">
            Signature Dishes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Authentic North Indian flavors prepared fresh daily with traditional recipes
          </p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {dishes.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants}>
              <Card 
                className="overflow-hidden hover-elevate cursor-pointer group h-full"
                data-testid={`card-dish-${dish.id}`}
              >
                <div className="aspect-square sm:aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-start justify-between mb-2 gap-2 flex-wrap">
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-foreground">
                      {dish.name}
                    </h3>
                    <span className="font-sans font-semibold text-primary whitespace-nowrap text-base sm:text-lg" data-testid={`text-price-${dish.id}`}>
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
