import styles from "../styles/style";
import ButtonPart from "./ButtonPart";
import Gradient from "./Gradient";
import MainTitle from "./MainTitle";
import Partners from "./Partners";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative background z-20 w-full min-h-screen flex flex-col justify-center items-center text-center gap-16 p-4"
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
        <ButtonPart />

      </div>

      {/* Logos des partenaires */}
      <Partners />
    </section>
  );
}
