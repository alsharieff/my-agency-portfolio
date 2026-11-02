import Hero from "../components/sections/Hero";
import Featured from "../components/sections/Featured";
import SEOFeatured from "../components/sections/SEOFeatured";
import FeaturedServices from "../components/sections/FeaturedServices";
import FeaturedCarousel from "../components/sections/FeaturedWorkCarousel";
import About from "../components/sections/About";
import Process from "../components/sections/Process";
import Cta from "../components/sections/Cta";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <SEOFeatured />
      <FeaturedServices />
      <FeaturedCarousel />
      {/* <Process /> */}
      <About />
      <Cta />
      <Contact />
    </>
  );
}
