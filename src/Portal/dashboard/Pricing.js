import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "../Spinner";
import Banner from "../Banner";

const Pricing = (props) => {

  return (
    <div className="pricing row row-spacing">

      <div className="card pink-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">1 Month</h5>
          <h5 className="card-title card-header">$9
            <p className="small-text small-text-fix">per month</p>
          </h5>
          <p className="small-text small-text-fix">Billed every month</p>
          <p className="small-text small-text-fix">30-day money-back guarantee</p>
        </div>
      </div>


      <div className="card teal-card middle-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">6 Months</h5>
          <h5 className="card-title card-header">$8
            <p className="small-text small-text-fix">per month</p>
          </h5>
          <p className="small-text small-text-fix">Billed every 6 months</p>
          <p className="small-text small-text-fix">30-day money-back guarantee</p>
        </div>
      </div>

      <div className="card pink-card" onClick={() => navigate("/features")}>
        <div className="card-body">
          <h5 className="card-title card-header">12 Months</h5>
          <h5 className="card-title card-header">$7
            <p className="small-text small-text-fix">per month</p>
          </h5>
          <p className="small-text small-text-fix">Billed every 12 months</p>
          <p className="small-text small-text-fix">30-day money-back guarantee</p>
        </div>
      </div>

    </div >
  );
}

export default Pricing;