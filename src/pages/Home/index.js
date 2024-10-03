import React from "react";
import HomeSlider from "./slider/index";
import CatSlider from "../../components/catSlider";
import Banners from "../../components/banners";
import "./style.css";
import Product from "../../components/product";

const Home = () => {
  return (
    <>
      <HomeSlider />

      <CatSlider />
      <Banners />

      <section className="homeProducts">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className="hd mb-0 mt-0">Popular Product</h2>
            <ul className="list list-inline ml-auto  filterTab">
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
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
            <div className="item">
              <Product />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
