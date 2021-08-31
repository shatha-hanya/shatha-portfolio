import React from 'react';
import Servicess from '../assets/images/Services.jpg';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="Services_ _left">
          <img src={Servicess} alt="" />
        </div>
        <div className="Services_ _right">
          <text>
            we provide you with highly qualified service of software
            development, Technical support services, customer support experience
            and computer repairing
          </text>
        </div>
      </div>
    </div>
  );
}
