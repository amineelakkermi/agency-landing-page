'use client';

import Image from 'next/image';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const partners = Array.from({ length: 6 }, (_, i) => ({
    src: `../public/brand${i + 1}.png`,
    alt: `Partner ${i + 1}`,
  }));

  // Dupliquez les partenaires pour créer un effet de boucle continu
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="w-full flex flex-col py-10 px-4 md:px-16 bg-white text-center relative">
      
      <div className={styles.wrapper}>
        {Array.from({ length: 6 }, (_, index) => (
          <div 
            key={index + 1}
            className={`flex item flex-col gap-5 p-4 rounded-[25px] border-1 border-[#777]
              shadow-md
              ${styles['item' + (index + 1)]}`}
          > 
           
          </div>
        ))}
      </div>

     


    </section>
  );
}