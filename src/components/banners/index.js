import React from "react";
// import Slider from "react-slick";
import "./style.css";
import Banner1 from "../../assets/images/b1.jpeg";
import Banner2 from "../../assets/images/b2.jpg";
import Banner3 from "../../assets/images/b4.jpg";
import Banner4 from "../../assets/images/b5.jpg";

const Banners = () => {
  return (
    <div className="bannerSection">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="box">
              <img src={Banner1} className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={Banner2} className="w-100 transition" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <img src={Banner3} className="w-100 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
