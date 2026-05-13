import CategoriesSection from "./components/home/CategoriesSection";
import FeaturedProducts from "./components/home/FeatureProducts";
import FeaturesSection from "./components/home/FeaturesSection";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/home/HeroSection";
import PromoBanner from "./components/home/PromoBanner";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <CategoriesSection/>
      <FeaturedProducts/>
      <PromoBanner/>
      <FeaturesSection/>
      <Footer/>
    </main>
  );
}