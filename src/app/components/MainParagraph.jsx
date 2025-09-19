'use client';
import { textVariant } from "../styles/motion";
import styles from "../styles/style";
import { motion } from 'framer-motion'

{/*
variants={textVariant(0.4)}
  initial='hidden'
  whileInView='show'  
*/}

export default function MainParagraph({ text }) {
  return (
  <p
  
  className={`${styles.paragraph} mb-8`}>
   {text}
  </p>
  );
}
