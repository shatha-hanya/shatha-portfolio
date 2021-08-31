import React from 'react';
import Contactt from '../assets/images/Contact.jpg';

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="Contact_ _left">
          <img src={Contactt} alt="" />
        </div>
        <div className="Contact_ _right">
          <text>
            phone:0780182134 email:shatha.hanya@gmail.com Adress:Amman-Jordan
          </text>
        </div>
      </div>
    </div>
  );
}
