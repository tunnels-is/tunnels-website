import { HashRouter, Link, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import SupportPage from "./Portal/Support";
import Nav from "./Portal/Nav";
import STORE from "./store";

import './assets/style/bootstrap/bootstrap.min.css';
import './assets/js/bootstrap.min.js';
import "./assets/style/portal.scss";
import Footer from "./Portal/footer";
import FeaturesPage from "./Portal/features";
import HomePage from "./Portal/Home";

const root = createRoot(document.getElementById('web-container'));


const LaunchPortal = () => {
  console.log("LAUNCHING PORTAL")

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  return (
    <>
      < HashRouter >
        {/* <Nav setError={setError} /> */}

        <Routes>
          <Route path="/" element={<HomePage setError={setError} setSuccess={setSuccess} />} />
          {/* <Route path="support" element={<SupportPage setError={setError} setSuccess={setSuccess} />} />
          <Route path="features" element={<FeaturesPage setError={setError} setSuccess={setSuccess} />} /> */}

          <Route path="*" element={<HomePage setError={setError} setSuccess={setSuccess} />} />
        </Routes>

        <Footer></Footer>


        {/* <div className="notification-container">
          {error && <div className="error">{error}</div>}
          {success && <div className="success">{success}</div>}
        </div> */}
        {/* <div className="row container-row">

          <div className="content-container">
          </div>

        </div> */}
      </HashRouter >
    </>
  )


}


try {
  console.log("HIGHEST RENDER")
  root.render(<LaunchPortal />)

} catch (error) {
  console.dir(error)
  STORE.Cache.Clear()
  root.render(<div>
    The website had an unexpected error, please try reloading. If reloading does not work please try re-opening the website
    {/* <button onClick={() => ResetApp()} className={`btn`} > RESET APP </button> */}
  </div>
  )
}
