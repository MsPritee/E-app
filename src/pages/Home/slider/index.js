import React from "react";
import Slider from "react-slick";
import "./index.css";
import Slide1 from "../../../assets/images/banner1.jpg";
import Slide2 from "../../../assets/images/banner2.jpg";
import Slide3 from "../../../assets/images/banner3.jpg";
import Slide4 from "../../../assets/images/banner4.jpg";
import { Button } from "@mui/material";
import { SendOutlined } from "@mui/icons-material";
import NewsLetter from "../../../components/newsLetter/newsLetter";

const HomeSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="homeSlider position-relative">
      <div className="container-fluid  ">
        <Slider {...settings} className="home_slider_Main">
          <div className="item">
            <img src={Slide1} className="w-100" />
          </div>
          <div className="item">
            <img src={Slide2} className="w-100" />
          </div>
          <div className="item">
            <img src={Slide3} className="w-100" />
            <div className="info">
              <h2 className="mb-4">
                Dont miss Amazing <br /> grocery deals
              </h2>
              <p>Sign Up for the daily newsletter </p>
            </div>
          </div>
          <div className="item">
            <img src={Slide4} className="w-100" />
          </div>
        </Slider>
        <NewsLetter />
      </div>
    </section>
  );
};

export default HomeSlider;
