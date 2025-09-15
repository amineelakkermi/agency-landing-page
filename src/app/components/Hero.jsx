import styles from "../styles/style";
import Gradient from "./Gradient";
import MainTitle from "./MainTitle";
import Partners from "./Partners";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-20 w-full min-h-screen flex flex-col justify-center items-center text-center gap-16 p-4 background"
    >
      {/* Effets de dégradés */}
      <Gradient />

      {/* Contenu principal */}
      <div className="relative max-w-4xl mx-auto px-4">
        <MainTitle
          title="We specialize in "
          span="UI/UX"
          restTitle=", Web Development, Digital Marketing."
        />

        <p className={`${styles.paragraph} mb-8`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla magna mauris. Nulla fermentum viverra sem eu rhoncus,
          consequat varius nisi quis, posuere magna.
        </p>

        {/* Boutons d’action */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-10 rounded-full transition-colors duration-200"
          >
            Get Started
          </a>
          <a
            href="#"
            className="border border-blue-600 text-blue-600 font-medium py-3 px-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            About Us
          </a>
        </div>
      </div>

      {/* Logos des partenaires */}
      <Partners />
    </section>
  );
}
