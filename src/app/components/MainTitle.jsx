'use client';
import { textVariant } from "../styles/motion";
import styles from "../styles/style";
import { motion } from 'framer-motion'

 {/*
     variants={textVariant(0.3)}
    initial='hidden'
    whileInView='show'  
    */}
export default function MainTitle({ title, span, restTitle }) {
  return (
    <h1
   
    className={`${styles.title} mb-6 text-primary`}>
      {title}
      {span && <span className="text-blue-400">{span}</span>}
      {restTitle}
    </h1>
  );
}
