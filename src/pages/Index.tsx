import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { PromoBanner } from "@/components/PromoBanner";
import { ShopByTeam } from "@/components/ShopByTeam";
import { PlayerSpotlight } from "@/components/PlayerSpotlight";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <PromoBanner />
        <ShopByTeam />
        <PlayerSpotlight />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
