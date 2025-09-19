'use client';

import { useTheme } from "next-themes";
import { textVariant } from "../styles/motion";
import styles from "../styles/style";
import { motion } from 'framer-motion'


{/*
variants={textVariant(0.6)}
    initial='hidden'
    whileInView='show'    
*/}

export default function ButtonPart(){
    const { theme, setTheme } = useTheme();
    const darkMode = theme === "dark";


    return(
    <div
    
    className="flex flex-col sm:flex-row justify-center items-center gap-4">
    <a href="#contact"
    className={`bg-blue-500 text-white hover:border-none  hover:bg-blue-600 font-medium py-3 px-10
    rounded-full transition-colors duration-600`}
    >
    Get Started
    </a>
    <a href="#about"
    className={`${darkMode ? "text-white" : "text-blue-500"} hover:border-none  font-medium py-3 px-10
    rounded-full transition-colors duration-600`}
    >
    About Us
    </a>
    </div>
    )
}