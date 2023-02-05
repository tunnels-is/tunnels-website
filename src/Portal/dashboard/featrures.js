import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
const Features = (props) => {


  const navigate = useNavigate();


  return (
    <div className="features row row-spacing">

      <div className="card teal-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">Niceland VPN</h5>
          <p className="card-text">nicelandVPN is designed to not know anything about our users. No DNS logs, no Event logs, no Session logs, no logs at all.</p>
        </div>
      </div>

      <div className="card teal-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">Double VPN by default</h5>
          <p className="card-text">Our custom routing and tunneling protocol routes through two servers by default, sometimes even three!</p>
        </div>
      </div>

      <div className="card teal-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">Unblock content</h5>
          <p className="card-text">Unblock GEO-Location blocked video and gaming content</p>
        </div>
      </div>

      <div className="col-12 feature-button-col"><button className="btn all-features-button">See All Features</button></div>

    </div >
  );
}

export default Features;