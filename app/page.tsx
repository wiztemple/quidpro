import FAQSection from "./components/FAQSection";
import FooterHeroSection from "./components/FooterHeroSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialSection from "./components/TestimonialSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <TestimonialSection />
      <FooterHeroSection />
      <FooterSection />
    </div>
  );
}
