import charcuterieImage from "@assets/generated_images/Charcuterie_board_f42f7164.png";
import platingImage from "@assets/generated_images/Plating_detail_close-up_f7c49b07.png";

const menuSections = {
  starters: [
    { name: "Pan-Seared Scallops", description: "Citrus beurre blanc, microgreens", price: "$28" },
    { name: "Burrata & Heirloom Tomatoes", description: "Basil oil, aged balsamic", price: "$18" },
    { name: "Artisan Charcuterie Board", description: "Cured meats, aged cheeses, fig jam", price: "$24" },
    { name: "French Onion Soup", description: "Gruyère crouton, caramelized onions", price: "$16" }
  ],
  mains: [
    { name: "Herb-Crusted Lamb Rack", description: "Rosemary jus, seasonal vegetables", price: "$42" },
    { name: "Truffle Tagliatelle", description: "Black truffle cream, aged parmesan", price: "$34" },
    { name: "Atlantic Salmon", description: "Lemon butter sauce, asparagus", price: "$36" },
    { name: "Duck Confit", description: "Cherry reduction, roasted fingerlings", price: "$38" },
    { name: "Wagyu Beef Tenderloin", description: "Red wine demi-glace, pommes purée", price: "$52" }
  ],
  desserts: [
    { name: "Chocolate Lava Cake", description: "Vanilla bean ice cream, gold leaf", price: "$14" },
    { name: "Crème Brûlée", description: "Madagascar vanilla, fresh berries", price: "$12" },
    { name: "Tarte Tatin", description: "Caramelized apples, crème fraîche", price: "$13" }
  ]
};

export default function MenuHighlights() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-center text-foreground">
          Complete Menu
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={charcuterieImage} 
              alt="Artisan charcuterie board"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md mb-8"
            />
          </div>
          
          <div>
            <img 
              src={platingImage} 
              alt="Chef plating detail"
              className="w-full aspect-[4/3] object-cover rounded-lg shadow-md mb-8"
            />
          </div>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-serif text-3xl mb-6 text-foreground">Starters</h3>
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
            <h3 className="font-serif text-3xl mb-6 text-foreground">Main Courses</h3>
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
          
          <div>
            <h3 className="font-serif text-3xl mb-6 text-foreground">Desserts</h3>
            <div className="space-y-4">
              {menuSections.desserts.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
}
