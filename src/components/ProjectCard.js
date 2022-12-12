import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { motion } from 'framer-motion';
import {slideIn, navVariants,fadeIn,planetVariants } from "../utils/frameMotion"

const ProjectCard = ({ project }) => {
    const Url = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

      const Git = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
  return (
    <div className="single-project" id="project">
      <div className="card-front">
        <img src={project?.Img} />
        <div className="card-overlay"></div>
        <div className="card-icon-main">
          <div className="card-icon">
            <AiOutlineEye className="eye" onClick={()=>Url(project?.url)} />
          </div>

          <div className="card-icon">
            <FiGithub className="githup" onClick={()=>Git(project?.githup)} />
          </div>
        </div>
      </div>
        <div style={{padding:"10px"}}>
      <h5>{project?.title}</h5>
      <p>{project?.description}</p>
        </div>
    </div>
  );
};

export default ProjectCard;
