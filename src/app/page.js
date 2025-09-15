import AboutUs from "./components/AboutUs";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
      <main>
       <Hero />
       <AboutUs />
       <Features />
       <Pricing />
       <Faq />
       <Contact />
      </main>
    </div>
  );
}
