import React from 'react'
import data from "./data"
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn} from "../utils/frameMotion"

import ProjectCard from './ProjectCard'

const Projects = () => {
    let [btn,setBtn]=React.useState("All")
    let [projects,setProjects]=React.useState(data)
    React.useEffect(()=>{
        setProjects(data)
        if(btn==="All"){
            setProjects(data)
        }
        else{
            setProjects((pre)=>pre.filter((all)=>all?.id===btn))
        }
    },[btn])

  
  return (
    <div className='main-div-margins' style={{overflow:"hidden"}} >
       <h2 className='text-center'>My Creative <span className='portfolio'>Portfolio</span> Section</h2>

       <div className='main-div-margins div-center-40 project-boxes-main '>
          <button className={`btn ${btn==="All"?"active-btn":""}`} onClick={()=>setBtn("All")}>All</button>
          <button className={`btn ${btn==="Design"?"active-btn":""}`} onClick={()=>setBtn("Design")}>React Design</button>
          <button className={`btn ${btn==="Api"?"active-btn":""}`} onClick={()=>setBtn("Api")}>React API</button>
          <button className={`btn ${btn==="Dev"?"active-btn":""}`} onClick={()=>setBtn("Dev")}>React Dev</button>
       </div>

       <div className='div-center-80 main-div-margins grid-12'>
          {
            projects.map((project)=>{
                return <ProjectCard project={project}/>
            })
          }
       </div>


    </div>
  )
}

export default Projects
