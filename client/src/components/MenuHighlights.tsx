import charcuterieImage from "@assets/generated_images/Charcuterie_board_f42f7164.png";
import platingImage from "@assets/generated_images/Plating_detail_close-up_f7c49b07.png";

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

export default function MenuHighlights() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Complete Menu
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Authentic North Indian cuisine with Chinese favorites - All dishes prepared fresh with love
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <img 
            src={charcuterieImage} 
            alt="Dhaba Junction dishes"
            className="w-full aspect-[4/3] object-cover rounded-lg shadow-md"
          />
          <img 
            src={platingImage} 
            alt="Fresh preparation"
            className="w-full aspect-[4/3] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-16">
          {/* Combos */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Combo Deals</h3>
            <div className="mb-8">
              <h4 className="font-serif text-xl mb-4 text-foreground">Individual Combos</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuData.combos.individual.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                    <div className="flex-1">
                      <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-4 text-foreground">Super Combo Deals</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {menuData.combos.superDeals.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                    <div className="flex-1">
                      <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Soups */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Soups</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.soups.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Starters */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Tandoori Starters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.starters.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Veg Main Course */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Vegetable Main Course</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.vegMainCourse.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">
                      {item.name} {item.spicy && <span className="text-xs text-destructive ml-1">🌶️</span>}
                    </h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Paneer Main Course */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Paneer & Mushroom Main Course</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.paneerMainCourse.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">
                      {item.name} {item.spicy && <span className="text-xs text-destructive ml-1">🌶️</span>}
                    </h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Breads */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Fresh Tandoori Breads</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.breads.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rice & Biryani */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Rice & Biryani</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.rice.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Noodles & Fried Rice */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Noodles & Fried Rice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.noodles.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chinese Dishes */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Chinese Dishes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.chinese.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Accompaniments */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Accompaniments</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuData.accompaniments.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap text-sm">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desserts */}
          <div>
            <h3 className="font-serif text-3xl mb-6 text-primary border-b-2 border-primary/20 pb-2">Desserts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {menuData.desserts.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-3 border-b border-border">
                  <div className="flex-1">
                    <h5 className="font-sans font-medium text-foreground">{item.name}</h5>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center p-8 bg-primary/5 rounded-lg">
          <p className="text-lg text-foreground font-serif mb-2">
            All prices are inclusive of taxes
          </p>
          <p className="text-muted-foreground">
            For bulk orders or party bookings, please call +91 98118 24555
          </p>
        </div>
      </div>
    </section>
  );
}
