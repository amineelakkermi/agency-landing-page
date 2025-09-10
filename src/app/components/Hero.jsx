import styles from "../style";
import { BackgroundBeamsWithCollision } from "./BackgroundBeamsWithCollision";
import Gradient from "./Gradient";
import MainTitle from "./MainTitle";
import Partners from "./Partners";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative
      z-20 w-full background min-h-[100vh] flex flex-col text-center justify-center items-center gap-5 p-4
    "
    >
      
      {/* Dégradés colorés */}
      <Gradient />
      
      {/* Contenu */}
      <div className="relative max-w-4xl mx-auto px-4">
        <MainTitle 
          title="We specialize in "
          span="UI/UX"
          restTitle=", Web Development, Digital Marketing."
        />
        <p className={`${styles.paragraph} mb-8`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla magna mauris. 
          Nulla fermentum viverra sem eu rhoncus consequat varius nisi quis, posuere magna.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#" 
            className={`bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-10 rounded-full transition-colors duration-200
            bg-blue-500 hover:bg-blue-600   
            `}
          >
            Get Started
          </a>
          <a 
            href="#" 
            className={`font-medium py-3 px-10 rounded-full border transition-colors duration-200
          'bg-white border-primary text-blue-600 hover:bg-gray-100'`}
          >
            About Us
          </a>
        </div>
      </div>

      <Partners />
    </section>
  );
}