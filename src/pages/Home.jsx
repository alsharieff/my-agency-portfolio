import Hero from "../components/sections/Hero";
import Featured from "../components/sections/Featured";
import Services from "../components/sections/Services";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
import FeaturedCarousel from "../components/sections/FeaturedWorkCarousel";
import About from "../components/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <FeaturedCarousel />
      <About />
      <Contact />
    </>
  );
}
