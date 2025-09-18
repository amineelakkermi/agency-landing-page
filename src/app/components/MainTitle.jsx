'use client';
import { textVariant } from "../styles/motion";
import styles from "../styles/style";
import { motion } from 'framer-motion'


export default function MainTitle({ title, span, restTitle }) {
  return (
    <motion.h1
    variants={textVariant(0.3)}
    initial='hidden'
    whileInView='show'
    className={`${styles.title} mb-6 text-primary`}>
      {title}
      {span && <span className="text-blue-400">{span}</span>}
      {restTitle}
    </motion.h1>
  );
}
