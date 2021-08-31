import React from 'react';
import Aboutme from '../assets/images/Aboutme.jpg';

export default function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="aboutSection_ _left">
          <img src={Aboutme} alt="" />
        </div>
        <div className="aboutSection_ _right">
          <text>
            My name is shatha Hanya... I am an Engineer, a Developer and Forever
            a student. I graduated from JU 2019 and currently I am a CES in one
            of Cisco Partners and willing to be a highly-Qualified Developer.
          </text>
        </div>
      </div>
    </div>
  );
}
