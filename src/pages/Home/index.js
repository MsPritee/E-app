import React from "react";
import Slider from "react-slick";
import HomeSlider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";
import "./style.css";
import topProduct from "./TopProduct/topProduct";
import Product from "../../components/product";
import Banner4 from "../../assets/images/45555.jpg";
import TopProduct from "./TopProduct/topProduct";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    // autoplay: 3000,
  };
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <Banners />
      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Product</h2>
            <ul className="list list-inline ml-auto  filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">All</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Dairy Product</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Fruits</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Dry Fruits</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Grocery</a>
              </li>
            </ul>
          </div>

          <div className=" row productRow">
            <div className="item">
              <Product tag="sale" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="new" />
            </div>
            <div className="item">
              <Product tag="hot" />
            </div>
            <div className="item">
              <Product tag="best" />
            </div>
            <div className="item">
              <Product tag="sale" />
            </div>
          </div>
        </div>
      </section>
      <section className="homeProducts pt-0">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Daily Best Sells</h2>
            <ul className="list list-inline ml-auto  filterTab mb-0">
              <li className="list-inline-item">
                <a className="cursor">Featured</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">Popular</a>
              </li>
              <li className="list-inline-item">
                <a className="cursor">New Added</a>
              </li>
            </ul>
          </div>

          <div className="row">
            <div className="col-md-3 pr-5">
              <img src={Banner4} className="w-100" />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className="prodSlider">
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
                <div className="item">
                  <Product tag="sale" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="topProductsSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProduct title="Top Selling" />
            </div>
            <div className="col">
              <TopProduct title="Trending Products" />
            </div>
            <div className="col">
              <TopProduct title="Recently Added" />
            </div>
            <div className="col">
              <TopProduct title="Top Rated" />
            </div>
          </div>
        </div>
      </section>
      {/* <br /> <br /> <br /> <br /> <br /> <br /> */}
    </>
  );
};
export default Home;
