import React from "react";
import "./select.css";

const Select = () => {
  return (
    <div className="selectDrop">
      <div className="selectDrop cursor position-relative">
        <span className="openSelect">All Categories</span>
      </div>
      <div className="searchField">
        <input type="text" />
        <ul className="searchResults">
          <li>Milk and Diaries</li>
          <li>Wines & Drinks</li>
          <li>Clothing & Beauty</li>
          <li>Fresh Seafood</li>
          <li>Pet Food</li>
          <li>Fast Food</li>
          <li>Baking material</li>
          <li>Vegitables</li>
          <li>Fresh Fruits</li>
          <li>Bread & Juice</li>
          <li>Milks and Diaries</li>
          {/* <li></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Select;
