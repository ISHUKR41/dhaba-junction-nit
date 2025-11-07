import Hero from "@/components/Hero";
import PopUpInfo from "@/components/PopUpInfo";
import FeaturedDishes from "@/components/FeaturedDishes";
import AmbianceSection from "@/components/AmbianceSection";
import MenuHighlights from "@/components/MenuHighlights";
import PrintableMenu from "@/components/PrintableMenu";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <PopUpInfo />
      <FeaturedDishes />
      <AmbianceSection />
      <MenuHighlights />
      <PrintableMenu />
      <LocationContact />
      <Footer />
    </div>
  );
}
