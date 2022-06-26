import React, { useContext } from "react";
import "./Experience.scss";
import { SWContext } from "../../context/context";

const Experience = ({ experience }) => {

  const { experiencia } = useContext(SWContext);
  /* console.log(experiencia); */
  return (
    <div>
      <div className="experience card">
        {!experiencia && experience.map((item) => {
          return (
            <div key={JSON.stringify(item)}>
              <p className="name">📕 {item.name}</p>
              <p>{item.where}</p>
              <p>{item.date}</p>
            </div>
          );
        })}
        {experiencia && experiencia.map((item) => {
          return (
            <div key={JSON.stringify(item)} className="slotExp">
              <div >
                <p className="name">{item.name}</p>
                <p>{item.descripcion}</p>
                <p>{item.fecha_inicio} - {item.fecha_fin}</p>
              </div>
              <div>
                <img src={item.image} alt={item.name} />
                <p>url: www.enlace.com</p>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Experience;