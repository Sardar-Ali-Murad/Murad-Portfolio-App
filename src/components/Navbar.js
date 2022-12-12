import React from 'react'
import "./index.css"
import {GiCrossMark} from "react-icons/gi"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose}  from "react-icons/ai"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"



const Navbar = () => {
    let [ham,setHam]=React.useState(true)
  return (
   <motion.div  initial="hidden" whileInView="show"  variants={navVariants} className='nav' style={{overflowX:"hidden"}}>

    <div className='nav-main'>
      <div className='nav-front'>
          <h2><span className='sar'>SAR</span><span className='dar'>DAR</span></h2>
      </div>  

      <nav className='big-screen-nav'>
         <ul>
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#project">PROJECTS</a></li>
            <li><a href="#skill">SKILLS</a></li>
            <li><a href="#contact">CONTACT</a></li>
         </ul>
      </nav>  

     
             <GiHamburgerMenu className='ham' onClick={()=>setHam(false)}/>
    
    </div>

      <div className={`smal-screen-nav ${!ham?"small-screen-nav-active":""}`}>
      <AiOutlineClose onClick={()=>setHam(true)} className='small-screen-close'/>
     <nav>
           <ul>
               <li><a className='links' onClick={()=>setHam(true)} href="#home">HOME</a></li>
               <li><a className='links' onClick={()=>setHam(true)} href="#about">ABOUT</a></li>
               <li><a className='links' onClick={()=>setHam(true)} href="#project">PROJECTS</a></li>
               <li><a className='links' onClick={()=>setHam(true)} href='#skill'>SKILLS</a></li>
               <li><a className='links' onClick={()=>setHam(true)} href="#contact">CONTACT</a></li>
           </ul>
        </nav>

     </div>
   </motion.div>
  )
}

export default Navbar
