import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
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
      title: "Reservation Request Received",
      description: "We'll contact you within 24 hours to confirm your booking.",
    });
    setFormData({ name: '', email: '', partySize: '', preferredDate: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl sm:text-5xl mb-12 text-center text-foreground">
          Reserve Your Table
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">Location & Details</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Address</h4>
                <p className="text-muted-foreground">
                  142 Market Street<br />
                  Downtown Arts District<br />
                  San Francisco, CA 94103
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Hours</h4>
                <p className="text-muted-foreground">
                  Tuesday - Sunday<br />
                  Dinner Service: 5:30 PM - 10:00 PM<br />
                  Closed Mondays
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Contact</h4>
                <p className="text-muted-foreground">
                  Phone: (555) 123-4567<br />
                  Email: contact@maisonephemere.com
                </p>
              </div>
              
              <div>
                <h4 className="font-sans font-medium text-foreground mb-2 uppercase tracking-wider text-sm">Parking & Transit</h4>
                <p className="text-muted-foreground">
                  Street parking available<br />
                  BART: Montgomery Station (0.3 mi)<br />
                  Valet service available
                </p>
              </div>
            </div>
            
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <p className="font-serif text-xl mb-2">Map View</p>
                  <p className="text-sm">142 Market Street, Downtown Arts District</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl mb-6 text-foreground">Request a Reservation</h3>
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
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  data-testid="input-email"
                  placeholder="your@email.com"
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
                    placeholder="2"
                    min="1"
                    max="8"
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
                  placeholder="Dietary restrictions, special occasions, etc."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                data-testid="button-submit-reservation"
              >
                Submit Reservation Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
