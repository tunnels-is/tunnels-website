import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import Banner from "./Banner";
import Features from "./dashboard/featrures";
import About from "./dashboard/about";
import Pricing from "./dashboard/Pricing";
import Download from "./dashboard/Download";
import Products from "./dashboard/products";

const HomePage = (props) => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false)


  const getData = async () => {
    console.log("get data")
    return
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Banner></Banner>

      <div className="home container">
        {/* <Features></Features> */}
        {/* <Download></Download> */}
        {/* <Pricing></Pricing> */}
        <About></About>
        <Products></Products>
      </div >
    </>
  );
}

export default HomePage;