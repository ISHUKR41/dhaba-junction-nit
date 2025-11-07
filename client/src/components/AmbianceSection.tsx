import ambianceImage from "@assets/generated_images/Cozy_dining_ambiance_f4f97011.png";

export default function AmbianceSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 sm:px-8">
          <div className="order-2 lg:order-1">
            <img 
              src={ambianceImage} 
              alt="Intimate bistro dining atmosphere"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground">
              An Atmosphere of Intimacy
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Step into a world where every detail has been thoughtfully curated. Our intimate 
              space features warm candlelight, exposed brick walls, and an open kitchen where 
              you can watch our talented chefs at work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With seating for just 32 guests, each evening becomes a shared celebration of 
              culinary artistry. Our rotating menu showcases the season's finest offerings, 
              paired with carefully selected wines from boutique vineyards.
            </p>
            <div className="pt-4">
              <h3 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">
                Chef's Philosophy
              </h3>
              <p className="text-muted-foreground italic">
                "Every plate is a canvas, every ingredient a brushstroke in our culinary narrative."
              </p>
              <p className="text-muted-foreground mt-2">
                — Chef Marie Laurent
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
