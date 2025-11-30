import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock, Car, Train, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "A-8, Sector-11\nNear Bata Flyover, Mathura Road\nMetro Pillar 839\nFaridabad, Haryana 121001"
  },
  {
    icon: Clock,
    title: "Hours",
    content: "Open 7 Days a Week\n11:00 AM - 1:30 AM Daily"
  },
  {
    icon: Phone,
    title: "Contact",
    content: "Phone: +91 98118 24555\nEvent Bookings: 8470804805"
  }
];

const facilities = [
  { icon: Train, text: "Faridabad NE Railway Station (~0.15 km)" },
  { icon: Car, text: "Ample Parking Available" },
  { icon: Users, text: "Event Hosting (10-200 guests)" }
];

export default function LocationContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partySize: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    toast({
      title: "Inquiry Received",
      description: "We'll contact you soon to confirm your booking. You can also call us directly!",
    });
    setFormData({ name: '', email: '', partySize: '', preferredDate: '', message: '' });
    setIsSubmitting(false);
  };

  const handleCall = () => {
    window.location.href = 'tel:+919811824555';
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 text-foreground">
            Visit Us or Book a Table
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Experience authentic North Indian cuisine at our Faridabad location
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-xl sm:text-2xl mb-6 text-foreground">Location & Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-4 sm:p-5 hover-elevate">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-sans font-medium text-foreground mb-1 uppercase tracking-wider text-xs sm:text-sm">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm sm:text-base whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Button 
              size="lg"
              onClick={handleCall}
              className="w-full sm:w-auto gap-2 mb-6 sm:mb-8"
              data-testid="button-call-now"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Call Now to Book
            </Button>

            <div className="space-y-3">
              <h4 className="font-sans font-medium text-foreground uppercase tracking-wider text-xs sm:text-sm mb-3 sm:mb-4">
                Getting Here & Facilities
              </h4>
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
                  <facility.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span>{facility.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-5 sm:p-6 lg:p-8">
              <h3 className="font-serif text-xl sm:text-2xl mb-6 text-foreground">Send Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Full Name</Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">Email or Phone</Label>
                  <Input
                    id="email"
                    data-testid="input-email"
                    placeholder="your@email.com or phone number"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-10 sm:h-11"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="partySize" className="text-sm">Party Size</Label>
                    <Input
                      id="partySize"
                      type="number"
                      data-testid="input-party-size"
                      placeholder="4"
                      min="1"
                      max="200"
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      required
                      className="h-10 sm:h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-sm">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      data-testid="input-preferred-date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      required
                      className="h-10 sm:h-11"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">Special Requests</Label>
                  <Textarea
                    id="message"
                    data-testid="input-message"
                    placeholder="Dietary requirements, event details, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit-inquiry"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
                <p className="text-xs sm:text-sm text-muted-foreground text-center">
                  For immediate booking, please call{" "}
                  <a href="tel:+919811824555" className="text-primary font-medium">+91 98118 24555</a>
                </p>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
