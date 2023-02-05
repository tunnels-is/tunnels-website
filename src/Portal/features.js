import React, { useEffect, useState, useId } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Spinner from "./Spinner";
import Banner from "./Banner";
import Features from "./dashboard/featrures";
import BannerSmall from "./BannerSmall";


const FeaturesPage = (props) => {

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false)


  return (
    <>
      <BannerSmall></BannerSmall>

      <div className=" container">

        <div className="about row row-spacing">
          <div className="col">
            <img className="section-image" src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg"></img>
          </div>
          <div className="col">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div >

        <div className="features row row-spacing">

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="about row row-spacing">
            <div className="col">
              <img className="section-image" src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg"></img>
            </div>
            <div className="col">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div >


          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

          <div className="card" style={{ width: "14rem" }}>
            <img src="https://img.lovepik.com/background/20211021/large/lovepik-blue-technology-brief-background-banner-image_500432279.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>

        </div >
      </div >
    </>
  );
}

export default FeaturesPage;