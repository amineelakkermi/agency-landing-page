import React from "react";
import styles from "../styles/style";
import MainTitle from "./MainTitle";
import Gradient2 from "./Gradient2";
import MainParagraph from "./MainParagraph";

const about1 = "/images/about1.png";
const about2 = "/images/about2.png";
const about3 = "/images/about3.png";

export default function AboutUs() {
  return (
    <section
      id="about"
      className={`relative background2 overflow-hidden min-h-screen ${styles.padding}`}
    >
    {/* Dégradé décoratif */}
    <Gradient2 />
     
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          {/* Colonne gauche (images) */}
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              {/* Images gauche */}
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                {[about1, about2].map((src, index) => (
                  <div key={index} className="py-3 sm:py-4">
                    <img
                      src={src}
                      alt={`About ${index + 1}`}
                      className="w-full h-auto min-h-[250px] max-h-[500px] object-cover rounded-[25px]"
                    />
                  </div>
                ))}
              </div>

              {/* Image droite */}
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src={about3}
                    alt="About 3"
                    className="w-full h-auto min-h-[400px] max-h-[500px] object-cover rounded-[25px]"
                  />
                  {/* Décoration en SVG */}
                  <span className="absolute -right-7 -bottom-7 z-[-1]">
                    <DotsPattern />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite (texte) */}
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0 flex flex-col gap-5">
              

              <MainTitle
              title="Make your customers "
              span="happy"
              restTitle=" by giving services"
              />
              
               <MainParagraph
               text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
              />
                <MainParagraph
               text="A domain name is one of the first steps to establishing your brand. Secure a consistent brand image with a domain name that matches your business."
              />
            

        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* SVG décoratif extrait في كومبوننت خاص */
function DotsPattern() {
  return (
    <svg
      width={134}
      height={106}
      viewBox="0 0 134 106"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {Array.from({ length: 10 }).map((_, row) =>
        Array.from({ length: 10 }).map((_, col) => {
          const cx = col * 15 + 1.66667;
          const cy = row * 15 + 1.66667;
          return (
            <circle
              key={`${row}-${col}`}
              cx={cx}
              cy={cy}
              r="1.66667"
              transform={`rotate(-90 ${cx} ${cy})`}
              fill="#3056D3"
            />
          );
        })
      )}
    </svg>
  );
}
