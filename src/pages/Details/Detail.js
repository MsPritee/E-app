import React, { useRef, useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import Slider from "react-slick";

const DetailsPage = () => {
  const zoomSlider = useRef();

  const [zoomImage, setZoomImage] = useState(
    "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-5.jpg"
  );

  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smlImageSize, setSmlImageSize] = useState([150, 150]);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    alert(index);
  };

  return (
    <section className="detailsPage">
      <div className="breadcrumbWrapper mb-4">
        <div className="container-fluid">
          <ul className="breadcrumb breadcrumb2 mb-0">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Vegetables</Link>
            </li>
            <li>
              <Link>Seeds of Change Organic</Link>
            </li>
            {/* <li>
              Italy
            </li> */}
          </ul>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 leftPart">
              <div className="row">
                {/* product zoom code start here */}
                <div className="col-md-5  ">
                  <div className="productZoom">
                    <InnerImageZoom
                      src={`https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-16-5.jpg?im=Resize=(${
                        (bigImageSize[0], bigImageSize[1])
                      })`}
                      zoomType="hover"
                      zoomScale={1}
                    />
                  </div>

                  <Slider {...settings} className="zoomSlider">
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg"
                        className="w-100"
                        onClick={() => goto(0)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg"
                        className="w-100"
                        onClick={() => goto(1)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg"
                        className="w-100"
                        onClick={() => goto(2)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg"
                        className="w-100"
                        onClick={() => goto(3)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg"
                        className="w-100"
                        onClick={() => goto(4)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg"
                        className="w-100"
                        onClick={() => goto(5)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg"
                        className="w-100"
                        onClick={() => goto(6)}
                      />
                    </div>
                    <div className="item">
                      <img
                        src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg"
                        className="w-100"
                        onClick={() => goto(7)}
                      />
                    </div>
                  </Slider>
                </div>
                {/* product zoom code ends here */}

                {/* product info code start here */}
                <div className="col-md-7 productInfo ">
                  <h1>Seeds of Change Organic Quinoa, Brown</h1>
                  <div className="d-flex align-items-center">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.5}
                      readOnly
                    />
                    <span className="text-light">(32 reviews)</span>
                  </div>
                  <div className="priceSec d-flex align-items-center">
                    <span className="text-g">$63</span>
                    <div className="ml-2 d-flex flex-column">
                      <span className="text-g">26% Off</span>
                      <span className="text-light">$52</span>
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>

                {/* product info  code ends here */}
              </div>
            </div>

            <div className="col-md-2 rightPart"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailsPage;
