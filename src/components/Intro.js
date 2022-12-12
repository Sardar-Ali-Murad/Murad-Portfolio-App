import React from 'react'
import Img1 from "../assets/about01.png"
import Img2 from "../assets/about02.png"
import Img3 from "../assets/about03.png"
import Img4 from "../assets/about04.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"

const Intro = () => {
  return (
    <div className='main-div-margins' id="about" style={{overflow:"hidden"}} >

      <h2 className='text-center'>I Know That <span className='blue'>Good Design</span> </h2>
      <h3 className='text-center'>Means <span className='blue'>Good Business</span></h3>

      <div className='div-center-70 grid-even-4 intro-content'>
         <motion.div  initial="hidden" whileInView="show"   variants={fadeIn('left', 'tween', .2, 1)}
 className='card'>
             <img src={Img1}/>
             <h3>Web Designer</h3>
             <p>I am a web designer with a passion of creating responsive and attractive web layouts with a custom design.</p>
         </motion.div>
         <motion.div  initial="hidden" whileInView="show"   variants={fadeIn('left', 'tween', .4, 1)} className='card'>
             <img src={Img2}/>
             <h3>React Developer</h3>
             <p>I am a React Js Developer with problem-solving capabilities and custom React design abilities.</p>
         </motion.div>
         <motion.div  initial="hidden" whileInView="show"   variants={fadeIn('left', 'tween', .6, 1)} className='card'>
             <img src={Img3}/>
             <h3>Front End Developer</h3>
             <p>I am a front-end React developer with a bit of knowledge of Node Js and Other Mern Stack technologies.</p>
         </motion.div>
         <motion.div  initial="hidden" whileInView="show"   variants={fadeIn('left', 'tween', .8, 1)} className='card'>
             <img src={Img4}/>
             <h3>BackEnd Developer</h3>
             <p>I am aware of back-end technologies such as working with API and Node JS, MongoDB, and Express JS.</p>
         </motion.div>
      </div>

    </div>
  )
}

export default Intro
