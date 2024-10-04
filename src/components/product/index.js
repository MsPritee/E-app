import React from "react";
import "./style.css";
import { Button, Rating, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import {
  CompareArrowsOutlined,
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";

const Product = (props) => {
  return (
    <div className="productThumb">
      {props.tag !== null && props.tag !== undefined && (
        <span className={`badge ${props.tag}`}>{props.tag}</span>
      )}

      <Link>
        <div className="imgWrapper">
          <img
            src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
            className="w-100"
          />

          <div className="overlay transition">
            <ul className="list list-inline mb-0">
              <li className="list-inline-item">
                <a className="cursor" tooltip="Add to Wishlist">
                  <FavoriteBorderOutlined />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" tooltip="Compare">
                  <CompareArrowsOutlined />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="cursor" tooltip="Quick a View">
                  <RemoveRedEyeOutlined />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Link>
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
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <span className="price">$28.85</span>
            <span className="oldPrice">$32.85</span>
          </div>
          <Button className="bg-g">Add</Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
