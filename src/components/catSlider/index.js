import React from "react";
import Slider from "react-slick";
import "./style.css";

const CatSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Category</h2>
          <Slider {...settings} className="cat_slider_Main">
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-12.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-11.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-10.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-9.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-8.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-7.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-6.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-5.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-4.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-3.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
            <div className="item">
              <div className="info">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png" />
                <h5>Cake & Milk</h5>
                <p>26 items</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
export default CatSlider;
