import { Card } from "@/components/ui/card";
import scallopsImage from "@assets/generated_images/Seared_scallops_appetizer_df668293.png";
import pastaImage from "@assets/generated_images/Truffle_pasta_main_course_1d3b7711.png";
import lambImage from "@assets/generated_images/Lamb_rack_main_course_56782b75.png";
import dessertImage from "@assets/generated_images/Chocolate_lava_cake_dessert_4e3bfdf2.png";
import saladImage from "@assets/generated_images/Burrata_salad_starter_4d0e97ee.png";
import salmonImage from "@assets/generated_images/Salmon_fillet_entree_bed9fba7.png";

const dishes = [
  {
    id: 1,
    name: "Pan-Seared Scallops",
    description: "Perfectly caramelized scallops with microgreens and citrus beurre blanc",
    price: "$28",
    image: scallopsImage,
    category: "starter"
  },
  {
    id: 2,
    name: "Truffle Tagliatelle",
    description: "Handmade pasta with black truffle cream sauce and aged parmesan",
    price: "$34",
    image: pastaImage,
    category: "main"
  },
  {
    id: 3,
    name: "Herb-Crusted Lamb Rack",
    description: "New Zealand lamb with rosemary jus and seasonal vegetables",
    price: "$42",
    image: lambImage,
    category: "main"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with vanilla bean ice cream and gold leaf",
    price: "$14",
    image: dessertImage,
    category: "dessert"
  },
  {
    id: 5,
    name: "Burrata & Heirloom Tomatoes",
    description: "Fresh burrata with basil oil and aged balsamic reduction",
    price: "$18",
    image: saladImage,
    category: "starter"
  },
  {
    id: 6,
    name: "Atlantic Salmon",
    description: "Pan-seared salmon with lemon butter sauce and asparagus",
    price: "$36",
    image: salmonImage,
    category: "main"
  }
];

export default function FeaturedDishes() {
  return (
    <section className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-center text-foreground">
          Signature Dishes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each dish is crafted with passion and precision, showcasing the finest seasonal ingredients
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              data-testid={`card-dish-${dish.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-serif text-2xl text-foreground">
                    {dish.name}
                  </h3>
                  <span className="font-sans font-medium text-primary whitespace-nowrap" data-testid={`text-price-${dish.id}`}>
                    {dish.price}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
