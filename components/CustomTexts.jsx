'use client';

import {motion} from 'framer-motion'
import {slideIn, textContainer, textVariant, textVariant2} from '../utils/motion'

export const TypingText = ({title, textStyle}) => (
  <motion.p
  variants={textContainer}
  className={` font-normal text-[14px] text-secondary-white ${textStyle}`}

  > 
  {
    Array.from(title).map((letter,index)=>(
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))
  }
  </motion.p>
  
);

export const TitleText = ({title, textStyle}) => (
  <motion.h2 variants={textVariant2} initial='hidden' whileInView='show'
  className={` mt-[8px] font-bold md:text-[32px] text-[40px] text-white ${textStyle}`}>
    {title}
  </motion.h2>
);
