import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

//Creamos el contexto y lo almacenamos en una variable
export const SWContext = createContext();

const BASEURL = "http://localhost:8069";

//Creamos el componente funcional que va a proveer a unos "children" de cierta información
export const SWContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [herramientas, setHerramientas] = useState([]);
  const [experiencia, setExperiencia] = useState([]);

  //Ejecutamos todas las llamadas para que al ejecutar el SWContextProvider ya tengamos la información de una API
  useEffect(() => {
    const getusers = async () => {
      const usersAPI = await axios.get(`${BASEURL}/users`);
      setUsers(usersAPI.data.Users);
      
    };
    getusers();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      const projectsAPI = await axios.get(`${BASEURL}/projects`);
      setProjects(projectsAPI.data.Projects);
    };
    getProjects();
  }, []);

  useEffect(() => {
    const getHerramientas = async () => {
      const herramientasAPI = await fetch(`${BASEURL}/herramientas`);
      const herramientasJSON = await herramientasAPI.json();
      setHerramientas(herramientasJSON.Herramientas);
    };
    getHerramientas();
  }, []);

  useEffect(() => {
    const getExperiencia = async () => {
      const experienciaAPI = await axios.get(`${BASEURL}/experiencia`);
      setExperiencia(experienciaAPI.data.Experiencia);
    };
    getExperiencia();
  }, []);

  //En el retorno le indicamos que provea del SWContext a los children de x valores
  
  return (
    <SWContext.Provider value={{ users, projects, herramientas, experiencia }}>
      {children}
    </SWContext.Provider>
  );
};
