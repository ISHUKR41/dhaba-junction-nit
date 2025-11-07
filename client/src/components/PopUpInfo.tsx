import { Calendar, MapPin, Clock } from "lucide-react";

export default function PopUpInfo() {
  return (
    <section className="py-20 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl mb-6 text-foreground">
          An Intimate Culinary Experience
        </h2>
        <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
          Join us for a limited-time dining experience that celebrates the art of French cuisine 
          with a contemporary twist. Our pop-up bistro offers an intimate setting where every dish 
          tells a story and every ingredient is carefully sourced from local artisans.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Dates</h3>
            <p className="text-muted-foreground">December 15-30, 2025</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Location</h3>
            <p className="text-muted-foreground">142 Market Street<br />Downtown Arts District</p>
          </div>
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-sans font-medium text-foreground uppercase tracking-wider text-sm">Hours</h3>
            <p className="text-muted-foreground">Dinner Service<br />5:30 PM - 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
