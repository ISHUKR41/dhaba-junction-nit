import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Flame, Utensils, Soup, ChefHat, Wheat, Coffee, UtensilsCrossed } from "lucide-react";
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

type MenuItem = {
  name: string;
  description: string;
  price: string;
  spicy?: boolean;
};

type MenuSectionType = {
  key: string;
  title: string;
  icon: any;
  data: MenuItem[];
  highlight?: boolean;
};

const menuSections: MenuSectionType[] = [
  { key: "combos", title: "Combo Deals", icon: Utensils, data: [...menuData.combos.individual, ...menuData.combos.superDeals], highlight: true },
  { key: "soups", title: "Soups", icon: Soup, data: menuData.soups },
  { key: "starters", title: "Tandoori Starters", icon: ChefHat, data: menuData.starters, highlight: true },
  { key: "vegMainCourse", title: "Vegetable Main Course", icon: Utensils, data: menuData.vegMainCourse },
  { key: "paneerMainCourse", title: "Paneer & Mushroom", icon: ChefHat, data: menuData.paneerMainCourse, highlight: true },
  { key: "breads", title: "Fresh Tandoori Breads", icon: Wheat, data: menuData.breads },
  { key: "rice", title: "Rice & Biryani", icon: Utensils, data: menuData.rice },
  { key: "noodles", title: "Noodles & Fried Rice", icon: UtensilsCrossed, data: menuData.noodles },
  { key: "chinese", title: "Chinese Dishes", icon: UtensilsCrossed, data: menuData.chinese },
  { key: "accompaniments", title: "Accompaniments", icon: Utensils, data: menuData.accompaniments },
  { key: "desserts", title: "Desserts", icon: Coffee, data: menuData.desserts },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="flex justify-between items-start gap-3 py-3 px-3 sm:px-4 rounded-lg bg-background/50 hover:bg-accent/30 transition-all duration-200 border border-border/30"
      data-testid={`menu-item-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-medium text-foreground text-sm sm:text-base leading-tight">
            {item.name}
          </h4>
          {item.spicy && (
            <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-4">
              <Flame className="w-2.5 h-2.5 mr-0.5" />
              Spicy
            </Badge>
          )}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-2">
          {item.description}
        </p>
      </div>
      <span className="font-semibold text-primary whitespace-nowrap text-sm sm:text-base bg-primary/10 px-2 py-1 rounded">
        {item.price}
      </span>
    </motion.div>
  );
}

function MenuSection({ section, index }: { section: MenuSectionType; index: number }) {
  const Icon = section.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl overflow-hidden ${section.highlight ? 'bg-card border-2 border-primary/20' : 'bg-card/50 border border-border/50'}`}
    >
      <div className={`p-4 sm:p-6 ${section.highlight ? 'bg-primary/5' : 'bg-muted/30'}`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 sm:p-3 rounded-xl ${section.highlight ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground">
              {section.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {section.data.length} items
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-3 sm:p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
          {section.data.map((item, idx) => (
            <MenuCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuHighlights() {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <Badge variant="secondary" className="mb-4 text-xs sm:text-sm">
            Authentic North Indian Cuisine
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground">
            Our Complete Menu
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Discover our wide selection of authentic North Indian dishes and Chinese favorites - 
            all prepared fresh with love and traditional recipes
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={dalMakhaniImage} 
              alt="Dhaba Junction Dal Makhani"
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl">Dal Makhani</h3>
              <p className="text-xs sm:text-sm opacity-90">Our Signature Dish</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img 
              src={paneerButterImage} 
              alt="Paneer Butter Masala"
              className="w-full h-48 sm:h-64 md:h-80 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl">Paneer Butter Masala</h3>
              <p className="text-xs sm:text-sm opacity-90">Customer Favorite</p>
            </div>
          </motion.div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {menuSections.map((section, index) => (
            <MenuSection key={section.key} section={section} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center p-6 sm:p-8 md:p-10 bg-card rounded-2xl border-2 border-primary/20 shadow-lg"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-foreground font-serif mb-3">
            All prices are inclusive of taxes
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4">
            For bulk orders or party bookings, please contact us
          </p>
          <a 
            href="tel:+919811824555" 
            className="inline-flex items-center gap-2 text-primary font-semibold text-base sm:text-lg hover:underline"
            data-testid="link-call-order"
          >
            <span>+91 98118 24555</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
