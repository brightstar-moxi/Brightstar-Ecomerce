import CategoriesSection from "./components/home/CategoriesSection";
import HeroSection from "./components/home/HeroSection";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection/>
      <CategoriesSection/>
    </main>
  );
}