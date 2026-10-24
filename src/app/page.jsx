import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import GallerySection from "@/components/sections/GallerySection";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import MenuSection from "@/components/sections/MenuSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

const Home = () => {
  return (
    <main id="home" className="bg-background text-foreground">

      <HeroSection />

      <AboutSection />

      <MenuSection />

      <GallerySection />

      <TestimonialSection />

      <LocationSection />

      <ContactSection />

    </main>
  );
}

export default Home;