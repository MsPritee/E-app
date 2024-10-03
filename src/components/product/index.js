import React from "react";
import "./style.css";
import { Button, Rating } from "@mui/material";

const Product = () => {
  return (
    <div className="productThumb">
      <div className="imgWrapper">
        <img
          src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg"
          className="w-100"
        />
      </div>
      <div className="info">
        <span className="d-block brand">Snack</span>
        <h6 className="title">
          Seeds of Change Organic Quino, Brown & Red Rice
        </h6>
        <Rating
          //   name="read-only"
          name="half-rating-read"
          defaultValue={2.5}
          precision={0.5}
          readOnly
        />
        <span className="brand d-block">
          By <a className="text-g">NestFood</a>
        </span>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center">
          <span className="price">$28.85</span>
          <span className="oldPrice">$32.85</span>
        </div>
        <Button className="bg-g">Add</Button>
      </div>
    </div>
  );
};
export default Product;
