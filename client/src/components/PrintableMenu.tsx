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
  { id: 1, image: lambImage, name: "Dal Makhani" },
  { id: 2, image: scallopsImage, name: "Paneer Butter Masala" },
  { id: 3, image: pastaImage, name: "Kadhai Paneer" },
  { id: 4, image: dessertImage, name: "Malai Kofta" },
  { id: 5, image: saladImage, name: "Tandoori Chaap" },
  { id: 6, image: salmonImage, name: "Veg Biryani" },
  { id: 7, image: charcuterieImage, name: "Tandoori Platter" },
  { id: 8, image: platingImage, name: "Fresh Naan" }
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
            View Complete Menu
          </h2>
          <p className="text-muted-foreground mb-8">
            Download or print our full menu with all dishes and prices
          </p>
          <Button 
            size="lg"
            onClick={handleDownload}
            data-testid="button-download-menu"
            className="gap-2"
          >
            <Download className="w-5 h-5" />
            Print Menu
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
          <p className="font-serif text-2xl mb-2">Dhaba Junction</p>
          <p>A-8, Sector-11, Near Bata Flyover, Mathura Road, Faridabad 121001</p>
          <p>Open Daily: 11:00 AM - 1:30 AM | Phone: +91 98118 24555</p>
        </div>
      </div>
    </section>
  );
}
