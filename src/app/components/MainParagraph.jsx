'use client';
import { textVariant } from "../styles/motion";
import styles from "../styles/style";
import { motion } from 'framer-motion'


export default function MainParagraph({ text }) {
  return (
  <motion.p
  variants={textVariant(0.4)}
  initial='hidden'
  whileInView='show'
  className={`${styles.paragraph} mb-8`}>
   {text}
  </motion.p>
  );
}
