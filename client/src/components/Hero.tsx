import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Moody_bistro_hero_image_7ee9fca6.png";

export default function Hero() {
  const handleReserve = () => {
    console.log('Reserve clicked - scrolling to contact');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen min-h-[600px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-8">
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 tracking-tight">
          Dhaba Junction
        </h1>
        <p className="text-white/90 text-lg sm:text-xl md:text-2xl mb-2 font-light tracking-wide uppercase" style={{ letterSpacing: '0.15em' }}>
          Authentic North Indian Cuisine
        </p>
        <p className="text-white/80 text-base sm:text-lg mb-8 max-w-md">
          Faridabad's Favorite Family Dhaba Since Years
        </p>
        <Button 
          size="lg"
          className="px-8 py-6 text-lg font-serif backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border border-white/40"
          onClick={handleReserve}
          data-testid="button-reserve-hero"
        >
          View Menu & Order Now
        </Button>
      </div>
    </div>
  );
}
