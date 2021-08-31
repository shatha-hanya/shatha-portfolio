import React from 'react';
import Contact from '../assets/images/Contact.jpg';

export default function ContactSection() {
  return (
    <div>
      <div className="container">
        <div className="ContactSection_ _left">
          <img src={Contact} alt="" />
        </div>
        <div className="ContactSection_ _right">
          <text>
            phone:0780182134 email:shatha.hanya@gmail.com Adress:Amman-Jordan
          </text>
        </div>
      </div>
    </div>
  );
}
