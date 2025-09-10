import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import MagicBento from "./components/MagicBento";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main>
       <Hero />
    
       <AboutUs />
       <MagicBento
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/>
       <Pricing />
       <Faq />
       <Contact />
      </main>
    </div>
  );
}
