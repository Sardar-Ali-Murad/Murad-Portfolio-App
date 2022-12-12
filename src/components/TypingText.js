import React from 'react'
import { textVariant } from "../utils/frameMotion"
import { motion } from 'framer-motion';

const TypingText = ({text,size}) => {
    console.log(text.split(""))
  return (
    <div>

      {
      size==="para"?
        <div>

        <p style={{fontSize:size}}>
        {
            text.split("").map((word,index)=><motion.span variants={ textVariant(index*.1) } initial="hidden" whileInView="show" >{word}</motion.span>)
        }
        </p>

        </div>:
        <h2>{
            text.split("").map((word,index)=><motion.span variants={ textVariant(index*.3) } initial="hidden" whileInView="show" >{word}</motion.span>)
            }</h2>
        }
        </div>

  )
}

export default TypingText
