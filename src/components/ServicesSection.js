import React from 'react';
import Services from '../assets/images/Services.jpg';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="ServicesSection_ _left">
          <img src={Services} alt="" />
        </div>
        <div className="ServicesSection_ _right">
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
