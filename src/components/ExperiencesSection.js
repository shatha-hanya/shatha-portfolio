import React from 'react';
import Experiences from '../assets/images/Experiences.jpg';

export default function ExperiencesSection() {
  return (
    <div>
      <div className="container">
        <div className="ExperiencesSection_ _left">
          <img src={Experiences} alt="" />
        </div>
        <div className="ExperiencesSection_ _right">
          <text>
            PowerElectronics ...70% Matlab .............70% PowerElectronics
            ...70% Matlab .............70% PowerElectronics ...70% Matlab
            .............70%
          </text>
        </div>
      </div>
    </div>
  );
}
