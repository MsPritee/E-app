import React from "react";
import "./topProduct.css";
import img1 from "../../../assets/images/img1.png";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const TopProduct = ({ title }) => {
  return (
    <>
      <div className="topSelling_box">
        <h3>{title}</h3>

        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>
            </Link>
            <Rating
              //   name="read-only"
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center w-100">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.85</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>
            </Link>
            <Rating
              //   name="read-only"
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center w-100">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.85</span>
            </div>
          </div>
        </div>
        <div className="items d-flex align-items-center">
          <div className="img">
            <Link to="">
              <img src={img1} className="w-100" />
            </Link>
          </div>
          <div className="info px-3">
            <Link to="">
              <h6>Nestle Original Coffee-Mate Coffee Creamer</h6>
            </Link>
            <Rating
              //   name="read-only"
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="d-flex align-items-center w-100">
              <span className="price text-g font-weight-bold">$28.85</span>
              <span className="oldPrice">$32.85</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProduct;
