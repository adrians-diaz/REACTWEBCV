import React, { useContext } from 'react'
import { SWContext } from "../../context/context";
import "./Projects.scss";



const Projects = () => {

  const { projects } = useContext(SWContext);

  return (
    <>
    <article>
      {projects.map((project) => (
        <figure key={project._id}>
          <h3>{project.name}</h3>
          <img className="imgP" src={project.image} alt={project.name}></img>
          <p>{project.description}</p>
          <h4>URL:</h4>
          <a target="_blank" href={project.URL}>
            <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="github"></img></a>
          <h4>programming language:</h4>
          <div className="HerramientaClass">
            {project.id_herramientas.map((herramientas) => (
              <div className="divHerramienta" key={herramientas._id}>
                <img src={herramientas.ico}></img>
              </div>
            ))}
          </div>
        </figure>
      ))}
      </article>
    </>
  )
}

export default Projects

