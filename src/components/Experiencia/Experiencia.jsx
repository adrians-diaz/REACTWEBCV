import React from 'react'
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import { CV } from "../../CV/CV";
import { useState } from "react";

const {education, experience} = CV;
const Experiencia = () => {
const [showEducation, setShowEducation] = useState(true);

  return (
    <div>
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
        </button>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}

    </div>
  )
}

export default Experiencia