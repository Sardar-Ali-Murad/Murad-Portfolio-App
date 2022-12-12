
import React from 'react'
import Man from "../assets/profile.png"
// import Hand from "./img/h2.png"
import CSS from "../assets/css.png"
import Js from "../assets/javascript.png"
import ReactJs from "../assets/react.png"
import figma from "../assets/figma.png"
import html from "../assets/html.png"
import mu5 from "../assets/mu5.png"
import TypingText from './TypingText'
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"



const Hero = () => {
  return (
    <div className='front-main' style={{overflow:"hidden"}} id="home">
        <div className='front-content'>
           <img className='man' src={Man}/>

           <div className='intro'>
             
              <TypingText text="Hello EveryOne I am," size="para" />
              <TypingText text="Sardar Ali Murad" />
            
           </div>

           <motion.div  initial="hidden" whileInView="show" variants={fadeIn('left', 'tween', .7, 1)}  className='skill'>
             <h4 > <span style={{color:"red"}}>React JS</span> <br/>  <span className='span'>Developer</span></h4>
           </motion.div>
          {/*  */}
           <div>

            <motion.div  initial="hidden" whileInView="show" variants={slideIn('up', 'tween', .7, 1)} className='logos css'>
              <img className='front-logos ' src={CSS}/>
            </motion.div>
            <motion.div  initial="hidden" whileInView="show" variants={slideIn('left', 'tween', .7, 1)}  className='logos js'>
              <img className='front-logos ' src={Js}/>
            </motion.div>
            <motion.div  initial="hidden" whileInView="show" variants={slideIn('down', 'tween', .7, 1)}  className='logos react'>
              <img className='front-logos ' style={{height:"80px"}} src={ReactJs}/>
            </motion.div>
            <motion.div  initial="hidden" whileInView="show" variants={slideIn('right', 'tween', .7, 1)}  className='logos html'>
              <img className='front-logos '  src={html}/>
            </motion.div>
            <motion.div  initial="hidden" whileInView="show" variants={fadeIn('up', 'tween', .7, 1)}  className='logos figma'>
              <img className='front-logos '  src={figma}/>
            </motion.div>
          

           </div>
           {/*  */}
        </div>
    </div>
  )
}

export default Hero
