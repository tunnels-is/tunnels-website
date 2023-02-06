import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";


const About = (props) => {

  return (
    <div className="about row row-spacing">

      <div className="col-6 d-none d-xl-flex">
        <img className="section-image iceland-map" src="https://github.com/tunnels-is/media/raw/master/tunnels-website/aboutv3.png"></img>
      </div>

      <div className="col-12 col-xl-6 about-text">
        Our startup company is born from the rugged and beautiful landscapes of Iceland, where the power of nature inspires us to strive for greatness. We are a team of passionate individuals, dedicated to bringing cutting-edge technology to the masses and improving the world through innovation.
        <br />
        <br />
        We believe in a future where technology enhances our lives and brings people closer together, and it is our mission to play a pivotal role in shaping that future. We are driven by a deep commitment to excellence, and are constantly pushing the boundaries of what is possible.

        <br />
        <br />
        As we enter the big tech market, we do so with humility and a fierce determination to make a difference. We are proud to call Iceland our home, and it is our hope to bring a piece of its spirit to the world through our work. Join us on this journey as we strive to make a lasting impact on the world, one innovation at a time.<br />

      </div>

      <div className="col-12 d-flex d-xl-none just-cent">
        <img className="section-image iceland-map" src="https://github.com/tunnels-is/media/raw/master/tunnels-website/aboutv3.png"></img>
      </div>
    </div >
  );
}

export default About;