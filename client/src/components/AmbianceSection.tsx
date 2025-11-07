import ambianceImage from "@assets/generated_images/Cozy_dining_ambiance_f4f97011.png";

export default function AmbianceSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-8">
          <div className="order-2 lg:order-1">
            <img 
              src={ambianceImage} 
              alt="Dhaba Junction dining atmosphere"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              Family Dining at Its Best
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Dhaba Junction, we believe in creating memorable dining experiences for families 
              and friends. Our spacious venue combines the warmth of traditional dhaba hospitality 
              with modern comfort and hygiene standards.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located conveniently on Delhi-Mathura Highway near Bata Flyover in Sector-11, Faridabad, 
              we're the perfect stop for authentic North Indian cuisine. Whether it's a family celebration, 
              casual dinner, or event hosting (10-200 guests), we've got you covered.
            </p>
            <div className="pt-4">
              <h3 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">
                Our Specialty
              </h3>
              <p className="text-muted-foreground italic">
                "From our signature Dal Makhani to fresh Tandoori breads, every dish is crafted with authentic spices and traditional cooking methods."
              </p>
              <p className="text-muted-foreground mt-4">
                <span className="font-medium">Cuisine:</span> North Indian & Chinese | <span className="font-medium">Type:</span> Casual Dining & Dhaba
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
