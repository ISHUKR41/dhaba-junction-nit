import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function LocationContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partySize: '',
    preferredDate: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Inquiry Received",
      description: "We'll contact you soon to confirm your booking. You can also call us directly!",
    });
    setFormData({ name: '', email: '', partySize: '', preferredDate: '', message: '' });
  };

  const handleCall = () => {
    window.location.href = 'tel:+919811824555';
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-center text-foreground">
          Visit Us or Book a Table
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">Location & Details</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Address</h4>
                <p className="text-muted-foreground">
                  A-8, Sector-11<br />
                  Near Bata Flyover, Mathura Road<br />
                  Metro Pillar 839<br />
                  Faridabad, Haryana 121001
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Hours</h4>
                <p className="text-muted-foreground">
                  Open 7 Days a Week<br />
                  11:00 AM - 1:30 AM Daily
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Contact</h4>
                <p className="text-muted-foreground mb-4">
                  Phone: +91 98118 24555<br />
                  Event Bookings: 8470804805
                </p>
                <Button 
                  onClick={handleCall}
                  className="gap-2"
                  data-testid="button-call-now"
                >
                  <Phone className="w-4 h-4" />
                  Call Now to Book
                </Button>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Getting Here</h4>
                <p className="text-muted-foreground">
                  <strong>Metro:</strong> Faridabad NE Railway Station (~0.15 km)<br />
                  <strong>Location:</strong> Delhi-Mathura Highway (NH-19)<br />
                  <strong>Parking:</strong> Available on-site
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Facilities</h4>
                <p className="text-muted-foreground">
                  Family Dining | Event Hosting (10-200 guests)<br />
                  North Indian & Chinese Cuisine<br />
                  Vegetarian Menu Available
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">Send Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  data-testid="input-name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email or Phone</Label>
                <Input
                  id="email"
                  data-testid="input-email"
                  placeholder="your@email.com or phone number"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="partySize">Party Size</Label>
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
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">Preferred Date</Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    data-testid="input-preferred-date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Special Requests</Label>
                <Textarea
                  id="message"
                  data-testid="input-message"
                  placeholder="Dietary requirements, event details, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                data-testid="button-submit-inquiry"
              >
                Submit Inquiry
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                For immediate booking, please call +91 98118 24555
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
