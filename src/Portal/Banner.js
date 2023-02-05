import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "./Spinner";

const Banner = (props) => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false)

  return (
    <div className="banner-container">
      <div className="banner">
        <div className="title">Tunnels</div>
        {/* <div className="sub-title"></div> */}
        <img className=".img-fluid large-banner" src="https://github.com/tunnels-is/media/raw/master/tunnels-website/banner-2kv2.png"></img>
      </div >
    </div>
  );
}

export default Banner;