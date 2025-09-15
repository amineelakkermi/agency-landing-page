'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

export default function Partners() {

  const partners = Array.from({ length: 6 }, (_, i) => ({
    src: `../../../public/images/brand${i + 1}.png`,
    alt: `Partner ${i + 1}`,
  }));

  // Dupliquez les partenaires pour créer un effet de boucle continu
  const duplicatedPartners = [...partners, ...partners];

  return (
    <div className={`w-full absolute bottom-0 left-0
     flex flex-col  px-4 md:px-16  text-center`}>
      
      <div className={styles.wrapper}>
        {Array.from({ length: 6 }, (_, index) => (
          <div 
            key={index + 1}
            className={`${styles.item} ${styles['item' + (index + 1)]}`}
          >
            <Image 
            src={`/brand${index + 1}.png`} 
            alt={`Partner ${index + 1}`} 
              width={200} 
              height={200} 
              className="object-contain"
            />
          </div>
        ))}
      </div>

     


    </div>
  );
}