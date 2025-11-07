import charcuterieImage from "@assets/generated_images/Charcuterie_board_f42f7164.png";
import platingImage from "@assets/generated_images/Plating_detail_close-up_f7c49b07.png";

const menuSections = {
  starters: [
    { name: "Paneer Tikka", description: "Marinated cottage cheese grilled in tandoor", price: "₹380" },
    { name: "Tandoori Masala Chaap", description: "Soya chaap with tandoori spices", price: "₹340" },
    { name: "Malai Chaap", description: "Creamy marinated soya chaap", price: "₹340" },
    { name: "Mushroom Tikka", description: "Spiced mushrooms grilled to perfection", price: "₹340" },
    { name: "Hara Bhara Kebab", description: "Spinach and vegetable patties", price: "₹320" }
  ],
  mains: [
    { name: "Dal Makhani", description: "Creamy black lentils slow-cooked with butter", price: "₹170" },
    { name: "Paneer Butter Masala", description: "Cottage cheese in velvety tomato gravy", price: "₹219" },
    { name: "Kadhai Paneer", description: "Paneer with bell peppers and kadhai masala", price: "₹219" },
    { name: "Shahi Paneer", description: "Royal cottage cheese curry", price: "₹219" },
    { name: "Palak Paneer", description: "Paneer in fresh spinach gravy", price: "₹219" },
    { name: "Malai Kofta", description: "Cottage cheese dumplings in rich gravy", price: "₹229" },
    { name: "Dum Aloo Kashmiri", description: "Baby potatoes in aromatic Kashmiri gravy", price: "₹219" },
    { name: "Chana Masala", description: "Spiced chickpeas in tangy curry", price: "₹190" }
  ],
  breads: [
    { name: "Butter Naan", description: "Soft leavened bread with butter", price: "₹80" },
    { name: "Garlic Naan", description: "Naan topped with fresh garlic", price: "₹90" },
    { name: "Lachha Paratha", description: "Multi-layered flaky bread", price: "₹80" },
    { name: "Butter Roti", description: "Whole wheat bread with butter", price: "₹25" },
    { name: "Stuffed Naan", description: "Naan stuffed with choice filling", price: "₹90" },
    { name: "Paneer Paratha", description: "Bread stuffed with spiced paneer", price: "₹120" }
  ],
  rice: [
    { name: "Veg Biryani", description: "Fragrant basmati rice with vegetables", price: "₹280" },
    { name: "Jeera Rice", description: "Cumin-flavored basmati rice", price: "₹119" },
    { name: "Veg Pulao", description: "Aromatic rice with mixed vegetables", price: "₹95" },
    { name: "Kashmiri Pulao", description: "Sweet pulao with dry fruits", price: "₹160" }
  ]
};

export default function MenuHighlights() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-center text-foreground">
          Our Menu
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={charcuterieImage} 
              alt="Dhaba Junction starters"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md mb-8"
            />
          </div>
          
          <div>
            <img 
              src={platingImage} 
              alt="Fresh preparation"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md mb-8"
            />
          </div>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-3xl mb-6 text-foreground">Tandoori Starters</h3>
            <div className="space-y-4">
              {menuSections.starters.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div className="flex-1">
                    <h4 className="font-serif text-xl text-foreground mb-1">{item.name}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-3xl mb-6 text-foreground">Main Course</h3>
            <div className="space-y-4">
              {menuSections.mains.map((item, index) => (
                <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0">
                  <div className="flex-1">
                    <h4 className="font-serif text-xl text-foreground mb-1">{item.name}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-3xl mb-6 text-foreground">Fresh Breads</h3>
              <div className="space-y-4">
                {menuSections.breads.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-foreground mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-3xl mb-6 text-foreground">Rice & Biryani</h3>
              <div className="space-y-4">
                {menuSections.rice.map((item, index) => (
                  <div key={index} className="flex justify-between items-start gap-4 pb-4 border-b border-border last:border-0">
                    <div className="flex-1">
                      <h4 className="font-serif text-xl text-foreground mb-1">{item.name}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                    <span className="font-sans font-medium text-primary whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
