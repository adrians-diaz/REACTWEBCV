import React from "react";
import "./Education.css";

const Education = ({ education }) => {
  return (
    <div>
      <div className="education card">
        {education.map((item) => {
          return (
            <div className="slotEduca" key={JSON.stringify(item)}>
              <div>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
              </div>
              <div>
                <p className="name">📕 {item.name}</p>
                <p>{item.where}</p>
                <p>{item.date}</p>
              </div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default Education;