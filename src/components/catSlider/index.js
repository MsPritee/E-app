import React, { useState } from "react";
import Slider from "react-slick";
import "./style.css";

const CatSlider = () => {
  const [itemBg, setItemBg] = useState([
    "#fffceb",
    "#ecffec",
    "#feefea",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#fff3eb",
    "#fff3ff",
    "#f2fce4",
    "#feefea",
    "#fffceb",
    "#feefea",
    "#ecffec",
    "#fff3eb",
  ]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  return (
    <>
      <div className="catSliderSection">
        <div className="container-fluid">
          <h2 className="hd">Featured Category</h2>
          <Slider {...settings} className="cat_Slider_Main">
            {itemBg.length !== 0 &&
              itemBg.map((item, index) => {
                return (
                  <div className="item">
                    <div className="info" style={{ background: item }}>
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" />
                      <h6>Cake & Milk</h6>
                      <p>26 items</p>
                    </div>
                  </div>
                );
              })}

            {/* <div className="item">
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
              </div> */}
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
