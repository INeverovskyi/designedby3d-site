import { HeroSection } from "@/components/sections/hero-section";
import { CategoryShowcase } from "@/components/sections/category-showcase";
import { HotSaleSection } from "@/components/sections/hot-sale-section";
import { ProductCarousel } from "@/components/sections/product-carousel";
import { AboutSection } from "@/components/sections/about-section";
import { HowWeWork } from "@/components/sections/how-we-work";
import { SeoContent } from "@/components/sections/seo-content";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryShowcase />
      <HotSaleSection />
      <ProductCarousel />
      <AboutSection />
      <HowWeWork />
      <SeoContent />
    </>
  );
}
