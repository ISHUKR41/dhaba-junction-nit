import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Flame } from "lucide-react";
import dalMakhaniImage from "@assets/generated_images/dal_makhani_in_copper_bowl.png";
import paneerButterImage from "@assets/generated_images/paneer_butter_masala_dish.png";

const menuData = {
  combos: {
    individual: [
      { name: "Dal Makhani with Lachha Parantha Combo", description: "Dal Makhani + Lachha Paratha 2 pieces", price: "₹269" },
      { name: "Dal Makhani with Naan Combo", description: "Dal Makhani + Naan 1 pic", price: "₹269" },
      { name: "Shahi Paneer with Lachha Combo", description: "Shahi Paneer + Lachha Parantha 2 pic", price: "₹289" },
      { name: "Shahi Paneer with Naan Combo", description: "Shahi Paneer + Naan 1 piece", price: "₹289" }
    ],
    superDeals: [
      { name: "Handi Paneer with Dal Tadka & 3 Lachha Parantha", description: "Serves 3", price: "₹850" },
      { name: "Aloo Gobhi with Dal Handi & 4 Lachha Parantha", description: "Serves 3", price: "₹850" },
      { name: "Paneer Butter Masala with Dal Tadka & 4 Lachha Parantha", description: "Serves 3", price: "₹789" },
      { name: "Dum Aloo Kashmiri with Dal Fry & 3 Butter Naan", description: "Serves 3", price: "₹789" },
      { name: "Honey Chilli Potato with Spring Roll & Crispy Corn", description: "Serves 3", price: "₹699" },
      { name: "Veg Noodles with Chilli Potato and Spring Roll", description: "Serves 3", price: "₹599" }
    ]
  },
  soups: [
    { name: "Tomato Soup", description: "Tangy and flavorful tomato soup", price: "₹140" },
    { name: "Veg Clear Soup", description: "Light and healthy vegetable soup", price: "₹140" },
    { name: "Veg Sweet Corn Soup", description: "Creamy corn soup with vegetables", price: "₹140" },
    { name: "Veg Manchow Soup", description: "Indo-Chinese spicy soup", price: "₹140" },
    { name: "Veg Hot and Sour Soup", description: "Tangy and spicy soup", price: "₹140" },
    { name: "Tomato Dhania Shorba", description: "Tomato coriander soup", price: "₹140" },
    { name: "Mushroom Soup", description: "Creamy mushroom soup", price: "₹140" }
  ],
  starters: [
    { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor", price: "₹380" },
    { name: "Paneer Malai Tikka", description: "Creamy marinated paneer tikka", price: "₹380" },
    { name: "Achari Paneer Tikka", description: "Pickle flavored paneer tikka", price: "₹380" },
    { name: "Paneer Hariyali Tikka", description: "Green herb marinated paneer", price: "₹380" },
    { name: "Mushroom Tikka", description: "Spiced mushrooms grilled to perfection", price: "₹340" },
    { name: "Tandoori Masala Chaap", description: "Soya chaap with tandoori spices", price: "₹340" },
    { name: "Malai Chaap", description: "Creamy marinated soya chaap", price: "₹340" },
    { name: "Punjabi Masala Chaap", description: "Traditional Punjabi style chaap", price: "₹310" },
    { name: "Hara Bhara Kebab", description: "Spinach and vegetable patties", price: "₹320" },
    { name: "Dahi ke Sholay", description: "Spiced yogurt fritters", price: "₹340" },
    { name: "Stuffed Chaap", description: "Chaap stuffed with cheese and spices", price: "₹180" },
    { name: "Stuffed Mushroom", description: "Mushroom stuffed with paneer", price: "₹199" },
    { name: "Achaari Chaap", description: "Pickle flavored soya chaap", price: "₹190" }
  ],
  vegMainCourse: [
    { name: "Dal Makhani", description: "Creamy black lentils slow-cooked with butter", price: "₹170" },
    { name: "Dal Tadka", description: "Yellow lentils with tempering", price: "₹160" },
    { name: "Dal Fry", description: "Spiced fried lentils", price: "₹150", spicy: true },
    { name: "Dal Handi", description: "Traditional handi dal", price: "₹170", spicy: true },
    { name: "Bebey Ke Rajma", description: "Kidney beans curry", price: "₹170" },
    { name: "Chana Masala", description: "Spiced chickpeas curry", price: "₹190" },
    { name: "Mixed Vegetable", description: "Seasonal mixed vegetables", price: "₹199" },
    { name: "Aloo Gobhi", description: "Potato and cauliflower curry", price: "₹190" },
    { name: "Gobhi Adraki", description: "Cauliflower with ginger", price: "₹190" },
    { name: "Aloo Jeera", description: "Cumin flavored potatoes", price: "₹160" },
    { name: "Dum Aloo Kashmiri", description: "Kashmiri style baby potatoes", price: "₹219" },
    { name: "Dum Aloo Banarsi", description: "Banarsi style potato curry", price: "₹209", spicy: true },
    { name: "Methi Malai Matar", description: "Fenugreek and peas in cream", price: "₹219" },
    { name: "Tawa Masala Chaap", description: "Soya chaap cooked on tawa", price: "₹199" },
    { name: "Gravy Chaap", description: "Soya chaap in rich gravy", price: "₹199" },
    { name: "Kali Mirch Chaap", description: "Black pepper flavored chaap", price: "₹219" },
    { name: "Malai Kofta", description: "Cottage cheese dumplings in rich gravy", price: "₹229" },
    { name: "Palak Corn", description: "Spinach with sweet corn", price: "₹190" }
  ],
  paneerMainCourse: [
    { name: "Paneer Taka Tak", description: "Spicy paneer tawa preparation", price: "₹219" },
    { name: "Shahi Paneer", description: "Royal cottage cheese curry", price: "₹219" },
    { name: "Matar Paneer", description: "Cottage cheese with green peas", price: "₹219" },
    { name: "Kadhai Paneer", description: "Paneer with bell peppers and kadhai masala", price: "₹219", spicy: true },
    { name: "Spicy Handi Paneer", description: "Spicy paneer in handi", price: "₹219", spicy: true },
    { name: "Palak Paneer", description: "Paneer in fresh spinach gravy", price: "₹219" },
    { name: "Paneer Butter Masala", description: "Cottage cheese in velvety tomato gravy", price: "₹219" },
    { name: "Kali Mirch Paneer", description: "Black pepper flavored paneer", price: "₹219" },
    { name: "Paneer Lababdar", description: "Paneer in tangy creamy kaju gravy", price: "₹219" },
    { name: "Paneer Bhujia", description: "Scrambled paneer with spices", price: "₹229" },
    { name: "Paneer Do Pyaza", description: "Paneer with double onions", price: "₹219" },
    { name: "Matar Mushroom", description: "Peas and mushroom curry", price: "₹219" },
    { name: "Kadhai Mushroom", description: "Mushroom in kadhai masala", price: "₹219" },
    { name: "Mushroom Masala", description: "Spiced mushroom curry", price: "₹219" },
    { name: "Handi Mushroom", description: "Mushroom in handi style", price: "₹219", spicy: true },
    { name: "Paneer Korma", description: "Paneer in rich korma gravy", price: "₹219" },
    { name: "Paneer Khurchan", description: "Grated paneer preparation", price: "₹219" },
    { name: "Paneer Badshahi", description: "Royal badshahi paneer", price: "₹219" },
    { name: "Mushroom Do Pyaza", description: "Mushroom with double onions", price: "₹219" },
    { name: "Mushroom Curry", description: "Traditional mushroom curry", price: "₹219" }
  ],
  breads: [
    { name: "Plain Roti", description: "Whole wheat flatbread", price: "₹20" },
    { name: "Butter Roti", description: "Roti topped with butter", price: "₹25" },
    { name: "Lachha Parantha", description: "Multi-layered flaky bread", price: "₹80" },
    { name: "Green Mirch Paratha", description: "Green chili flavored paratha", price: "₹80" },
    { name: "Pudina Parantha", description: "Mint flavored paratha", price: "₹70" },
    { name: "Garlic Parantha", description: "Garlic flavored paratha", price: "₹80" },
    { name: "Plain Naan", description: "Soft leavened bread", price: "₹60" },
    { name: "Butter Naan", description: "Naan topped with butter", price: "₹80" },
    { name: "Garlic Naan", description: "Naan topped with fresh garlic", price: "₹90" },
    { name: "Stuffed Naan", description: "Naan with choice filling", price: "₹90" },
    { name: "Onion Kulcha", description: "Naan stuffed with onions", price: "₹90" },
    { name: "Cheese Kulcha", description: "Naan stuffed with cheese", price: "₹90" },
    { name: "Missi Roti", description: "Gram flour flatbread", price: "₹50" },
    { name: "Onion Missi Roti", description: "Missi roti with onions", price: "₹60" },
    { name: "Aloo Parantha", description: "Bread stuffed with spiced potatoes", price: "₹90" },
    { name: "Aloo Pyaz Parantha", description: "Potato and onion paratha", price: "₹90" },
    { name: "Gobhi Parantha", description: "Cauliflower stuffed paratha", price: "₹90" },
    { name: "Paneer Parantha", description: "Bread stuffed with spiced paneer", price: "₹120" },
    { name: "Mix Parantha", description: "Mixed vegetable paratha", price: "₹120" },
    { name: "Onion Paratha", description: "Onion stuffed paratha", price: "₹90" }
  ],
  rice: [
    { name: "Plain Rice", description: "Steamed basmati rice", price: "₹90" },
    { name: "Peas Pulao", description: "Rice with green peas", price: "₹95" },
    { name: "Veg Pulao", description: "Aromatic rice with mixed vegetables", price: "₹95" },
    { name: "Kashmiri Pulao", description: "Sweet pulao with dry fruits", price: "₹160" },
    { name: "Veg Biryani", description: "Fragrant basmati rice with vegetables", price: "₹280" },
    { name: "Jeera Rice", description: "Cumin-flavored basmati rice", price: "₹119" },
    { name: "Hydrabadi Biryani", description: "Hyderabadi style vegetable biryani", price: "₹280" }
  ],
  noodles: [
    { name: "Veg Noodles", description: "Stir-fried vegetable noodles", price: "₹99" },
    { name: "Hakka Noodles", description: "Indo-Chinese hakka noodles", price: "₹109" },
    { name: "Singapori Noodles", description: "Singapore style noodles", price: "₹109" },
    { name: "Garlic Noodles", description: "Garlic flavored noodles", price: "₹109" },
    { name: "Fried Rice", description: "Vegetable fried rice", price: "₹129" },
    { name: "Chilli Garlic Fried Rice", description: "Spicy garlic fried rice", price: "₹180" }
  ],
  chinese: [
    { name: "Chilly Dry Paneer", description: "Spicy dry paneer preparation", price: "₹219" },
    { name: "Chilli Paneer Gravy", description: "Paneer in spicy gravy", price: "₹219" },
    { name: "Chilly Mushroom", description: "Spicy mushroom preparation", price: "₹219" },
    { name: "Veg Dry Manchurian", description: "Dry vegetable manchurian", price: "₹190" },
    { name: "Veg Manchurian Gravy", description: "Manchurian in gravy", price: "₹190" },
    { name: "Chilly Chaap", description: "Spicy soya chaap", price: "₹190" },
    { name: "Honey Chilly Potato", description: "Sweet and spicy potatoes", price: "₹149" },
    { name: "Chilly Potato", description: "Spicy potato preparation", price: "₹149" },
    { name: "Chilli Gobhi", description: "Spicy cauliflower", price: "₹180" },
    { name: "Crispy Veg Salt and Pepper", description: "Crispy vegetables with salt & pepper", price: "₹240" },
    { name: "Spring Roll", description: "Crispy vegetable spring rolls", price: "₹99" },
    { name: "Finger Chips", description: "Crispy french fries", price: "₹89" },
    { name: "Peri Peri Fries", description: "Spicy peri peri fries", price: "₹140" },
    { name: "Crispy Corn", description: "Crispy fried corn kernels", price: "₹179" },
    { name: "Cheese Cigar Rolls", description: "Cheese filled crispy rolls", price: "₹190" },
    { name: "Mushroom Duplex", description: "Double style mushroom preparation", price: "₹200" }
  ],
  accompaniments: [
    { name: "Plain Raita", description: "Fresh yogurt", price: "₹120" },
    { name: "Boondi Raita", description: "Yogurt with crispy boondi", price: "₹160" },
    { name: "Mix Veg Raita", description: "Yogurt with mixed vegetables", price: "₹160" },
    { name: "Pineapple Raita", description: "Yogurt with pineapple chunks", price: "₹200" },
    { name: "Papad", description: "Crispy papad", price: "₹15" },
    { name: "Masala Papad", description: "Papad with spicy topping", price: "₹35" },
    { name: "Green Salad", description: "Fresh mixed greens", price: "₹90" }
  ],
  desserts: [
    { name: "Gulab Jamun (2 Pieces)", description: "Sweet milk dumplings in sugar syrup", price: "₹70" }
  ]
};

type MenuSection = {
  key: string;
  title: string;
  data: Array<{ name: string; description: string; price: string; spicy?: boolean }>;
  columns?: number;
};

const menuSections: MenuSection[] = [
  { key: "combos", title: "Combo Deals", data: [...menuData.combos.individual, ...menuData.combos.superDeals] },
  { key: "soups", title: "Soups", data: menuData.soups },
  { key: "starters", title: "Tandoori Starters", data: menuData.starters },
  { key: "vegMainCourse", title: "Vegetable Main Course", data: menuData.vegMainCourse },
  { key: "paneerMainCourse", title: "Paneer & Mushroom", data: menuData.paneerMainCourse },
  { key: "breads", title: "Fresh Tandoori Breads", data: menuData.breads, columns: 3 },
  { key: "rice", title: "Rice & Biryani", data: menuData.rice },
  { key: "noodles", title: "Noodles & Fried Rice", data: menuData.noodles },
  { key: "chinese", title: "Chinese Dishes", data: menuData.chinese },
  { key: "accompaniments", title: "Accompaniments", data: menuData.accompaniments, columns: 3 },
  { key: "desserts", title: "Desserts", data: menuData.desserts },
];

function MenuSection({ section, isExpanded, onToggle }: { section: MenuSection; isExpanded: boolean; onToggle: () => void }) {
  const gridCols = section.columns === 3 
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" 
    : "grid-cols-1 md:grid-cols-2";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between font-serif text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 text-primary border-b-2 border-primary/20 pb-2 hover:text-primary/80 transition-colors text-left"
        data-testid={`button-toggle-${section.key}`}
      >
        <span>{section.title}</span>
        {isExpanded ? <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" /> : <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />}
      </button>
      
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={`grid ${gridCols} gap-2 sm:gap-3`}>
              {section.data.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start gap-2 sm:gap-4 py-2 sm:py-3 px-2 sm:px-3 rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h5 className="font-sans font-medium text-foreground text-sm sm:text-base">{item.name}</h5>
                      {item.spicy && <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-destructive flex-shrink-0" />}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1">{item.description}</p>
                  </div>
                  <span className="font-sans font-semibold text-primary whitespace-nowrap text-sm sm:text-base">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function MenuHighlights() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(["combos", "starters", "paneerMainCourse"]));
  const [showAll, setShowAll] = useState(false);

  const toggleSection = (key: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const displayedSections = showAll ? menuSections : menuSections.slice(0, 5);

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground">
            Complete Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Authentic North Indian cuisine with Chinese favorites - All dishes prepared fresh with love
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-16">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={dalMakhaniImage} 
            alt="Dhaba Junction Dal Makhani"
            className="w-full aspect-square sm:aspect-[4/3] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={paneerButterImage} 
            alt="Paneer Butter Masala"
            className="w-full aspect-square sm:aspect-[4/3] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        <div className="space-y-8 sm:space-y-12">
          {displayedSections.map((section) => (
            <MenuSection
              key={section.key}
              section={section}
              isExpanded={expandedSections.has(section.key)}
              onToggle={() => toggleSection(section.key)}
            />
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 sm:mt-12 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => setShowAll(true)}
              data-testid="button-show-full-menu"
            >
              Show Full Menu
            </Button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center p-6 sm:p-8 bg-primary/5 rounded-xl"
        >
          <p className="text-base sm:text-lg text-foreground font-serif mb-2">
            All prices are inclusive of taxes
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            For bulk orders or party bookings, please call{" "}
            <a href="tel:+919811824555" className="text-primary font-medium">+91 98118 24555</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
