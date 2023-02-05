import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";


const Products = (props) => {

  return (
    <div className="product row row-spacing">
      <div className="col about-text">
        <div className="col-12 about-button-col"><a href="https://nicelandvpn.com" className="btn all-about-button">niceland VPN</a></div>

        Our VPN app uses advanced tunneling and encryption technology to ensure the privacy and security of our users. Our app creates a secure, encrypted connection between your device and the internet, protecting your online activity from prying eyes.
        <br />
        <br />With our app, you can browse the web, stream content, and download files without worrying about your privacy being compromised. Whether you're at home or on the go, our app provides a secure and private internet experience. So, if you want to protect your online privacy, <a href="https://nicelandvpn.com">try our VPN app today!</a><br />


      </div>
      <div className="col">
        <div className="nl-wrapper">

          <img className="section-image niceland-app" src="https://github.com/tunnels-is/media/raw/master/tunnels-website/nl-1.PNG"></img>
          <img className="section-image niceland-app-2" src="https://github.com/tunnels-is/media/raw/master/tunnels-website/nl-2.PNG"></img>
        </div>
      </div>
    </div >
  );
}

export default Products;