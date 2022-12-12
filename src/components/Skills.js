import React from 'react'
import css from "../assets/css.png"
import html from "../assets/html.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import mu5 from "../assets/mu5.png"
import node from "../assets/node.png"
import react from "../assets/react.png"
import tailwand from "./img/tail.jpg"
import redux from "../assets/redux.png"
import typescript from "../assets/typescript.png"
import spotify from "../assets/spotify.png"
import mongodb from "./img/mongo.png"
import javascript from "../assets/javascript.png"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,zoomIn} from "../utils/frameMotion"


const Skills = () => {
  return (
    <div className='main-div-margins' id="skill" style={{overflow:"hidden"}} >
      <h2 className='text-center'>Skills & Experiences</h2>
      <div className='div-center-80 skills-main grid-even-2 main-div-margins skills-main'>

        {/*  */}
        <div className='grid-even-4'>

        {/*  */}
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.2,1)}>
            <img src={html}/>
            <p>HTML</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.3,1.1)}>
            <img src={css}/>
            <p>CSS</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.4,1.2)}>
            <img src={javascript}/>
            <p>JAVASCRIPT</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.5,1.3)}>
            <img src={react}/>
            <p>REACT JS</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.6,1.4)}>
            <img src={redux}/>
            <p>REDUX</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.7,1.5)}>
            <img src={mu5}/>
            <p>MATERIAL UI</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.8,1.6)}>
            <img src={tailwand}/>
            <p>TAILWAND</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.9,1.7)}>
            <img src={git}/>
            <p>GIT</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(1,1.8)}>
            <img src={node}/>
            <p>NODE JS</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.2,1.9)}>
            <img src={mongodb}/>
            <p>MONGO DB</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.2,2)}>
            <img src={spotify} style={{height:"80px",width:"80px"}}/>
            <p>SPOTIFY</p>
        </motion.div>
        <motion.div  initial="hidden" whileInView="show"   variants={zoomIn(.2,1)}>
            <img src={typescript}/>
            <p>TYPESCRIPT</p>
        </motion.div>
        </div>
         {/*  */}
      {/*  */}

      <div className='skills-content'>
        <h3>Here Is My <span>Expertise</span></h3>
        <p>
Are you looking for an attractive website for your business? Let me help you. I am a React Js developer having over 1 year of experience in React Js. I am capable of creating Pixel-perfect, Fast loading, Responsive React Web applications. I also have a bit of knowledge in Mern Stack and know Node Js, MongoDB, Mongoose, and Express.I have a bit of experience in Restful APIS but my primary focus is React Js or most precisely front-end Web Applications.</p>
      </div>

      {/*  */}
      </div>
    </div>
  )
}

export default Skills
