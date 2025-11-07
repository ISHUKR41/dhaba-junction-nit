import { Calendar, MapPin, Clock } from "lucide-react";

export default function PopUpInfo() {
  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
          Welcome to Dhaba Junction
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Experience the authentic taste of North India at Dhaba Junction, Faridabad's premier 
          casual dining destination. We serve traditional dhaba-style cuisine made with the finest 
          ingredients and cooked with love. From our signature Dal Makhani to sizzling Tandoori delights, 
          every dish celebrates the rich culinary heritage of Punjab and North India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Open Daily</h3>
            <p className="text-muted-foreground">7 Days a Week<br />Year Round</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Location</h3>
            <p className="text-muted-foreground">Sector-11, Near Bata Flyover<br />Mathura Road, Faridabad</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Hours</h3>
            <p className="text-muted-foreground">11:00 AM - 1:30 AM<br />Daily</p>
          </div>
        </div>
      </div>
    </section>
  );
}
