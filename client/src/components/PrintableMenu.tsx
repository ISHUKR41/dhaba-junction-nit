import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import scallopsImage from "@assets/generated_images/Seared_scallops_appetizer_df668293.png";
import pastaImage from "@assets/generated_images/Truffle_pasta_main_course_1d3b7711.png";
import lambImage from "@assets/generated_images/Lamb_rack_main_course_56782b75.png";
import dessertImage from "@assets/generated_images/Chocolate_lava_cake_dessert_4e3bfdf2.png";
import saladImage from "@assets/generated_images/Burrata_salad_starter_4d0e97ee.png";
import salmonImage from "@assets/generated_images/Salmon_fillet_entree_bed9fba7.png";
import charcuterieImage from "@assets/generated_images/Charcuterie_board_f42f7164.png";
import platingImage from "@assets/generated_images/Plating_detail_close-up_f7c49b07.png";

const dishImages = [
  { id: 1, image: scallopsImage, name: "Pan-Seared Scallops" },
  { id: 2, image: pastaImage, name: "Truffle Tagliatelle" },
  { id: 3, image: lambImage, name: "Herb-Crusted Lamb Rack" },
  { id: 4, image: dessertImage, name: "Chocolate Lava Cake" },
  { id: 5, image: saladImage, name: "Burrata & Heirloom Tomatoes" },
  { id: 6, image: salmonImage, name: "Atlantic Salmon" },
  { id: 7, image: charcuterieImage, name: "Artisan Charcuterie" },
  { id: 8, image: platingImage, name: "Chef's Special" }
];

export default function PrintableMenu() {
  const handleDownload = () => {
    console.log('Download menu clicked - would generate PDF');
    window.print();
  };

  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl mb-4 text-foreground">
            Printable Menu
          </h2>
          <p className="text-muted-foreground mb-8">
            Download our complete menu with beautiful dish photography
          </p>
          <Button 
            size="lg"
            onClick={handleDownload}
            data-testid="button-download-menu"
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Download Menu PDF
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" id="printable-menu">
          {dishImages.map((dish) => (
            <div key={dish.id} className="group">
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">{dish.name}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-sm text-muted-foreground print:block hidden">
          <p className="font-serif text-2xl mb-2">Maison Éphémère</p>
          <p>December 15-30, 2025 | 142 Market Street, Downtown Arts District</p>
          <p>Reservations: (555) 123-4567 | contact@maisonephemere.com</p>
        </div>
      </div>
    </section>
  );
}
