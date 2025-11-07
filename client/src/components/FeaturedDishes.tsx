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
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked with butter, tomatoes and aromatic spices",
    price: "₹170",
    image: lambImage,
    category: "main"
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    description: "Cottage cheese simmered in a velvety tomato gravy with butter and spices",
    price: "₹219",
    image: scallopsImage,
    category: "main"
  },
  {
    id: 3,
    name: "Kadhai Paneer",
    description: "Cottage cheese cooked with bell peppers, onions and aromatic kadhai masala",
    price: "₹219",
    image: pastaImage,
    category: "main"
  },
  {
    id: 4,
    name: "Malai Kofta",
    description: "Deep-fried cottage cheese dumplings in rich, creamy gravy",
    price: "₹229",
    image: dessertImage,
    category: "main"
  },
  {
    id: 5,
    name: "Tandoori Masala Chaap",
    description: "Soya chaap marinated in tandoori spices and grilled to perfection",
    price: "₹340",
    image: saladImage,
    category: "starter"
  },
  {
    id: 6,
    name: "Veg Biryani",
    description: "Fragrant basmati rice layered with mixed vegetables and aromatic spices",
    price: "₹280",
    image: salmonImage,
    category: "rice"
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
          Authentic North Indian flavors prepared fresh daily with traditional recipes
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
