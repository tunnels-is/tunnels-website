import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AiFillApple, AiFillWindows } from "react-icons/ai"
import { FaLinux } from "react-icons/fa"

const Download = (props) => {

  const navigate = useNavigate();

  return (
    <div className="download row row-spacing">
      <div className="col download-col">
        <div className="download-button" onClick={() => navigate("/download/windows")}>
          <AiFillWindows size={100}></AiFillWindows>
          <div className="title">Download for Windows</div>
        </div>
      </div>
      <div className="col download-col">
        <div className="download-button" onClick={() => navigate("/download/windows")}>
          <AiFillApple size={100}></AiFillApple>
          <div className="title">Download for MacOS</div>
        </div>
      </div>
      <div className="col download-col">
        <div className="download-button" onClick={() => navigate("/download/windows")}>
          <FaLinux size={100}></FaLinux>
          <div className="title">Download for Linux</div>
        </div>
      </div>
    </div >
  );
}

export default Download;