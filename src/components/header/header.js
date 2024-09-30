import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Header = () => {
  const [categories, setCategories] = useState([
    "All Categories",
    "Milks and Daries",
    "Wines & Drinks",
    "Food and Toy",
    "Fast Food",
    "Baking material",
    "Vegitables",
    "Cloths",
    "Fresh Fruits",
    "Bread and Juice",
    "Baby product",
    "Groceries",
    "Beauty",
    "Footwear",
    "Electronics",
  ]);

  const selectedSelectBoxItem = (name, id) => {
    if (name === "Your Location") {
      localStorage.setItem("location", "All");
    } else {
      localStorage.setItem("location", name);
    }
    window.location.href = window.location.href;
  };

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} />
            </div>
            {/* header search start here */}
            <div className="col-sm-5">
              <div className="headerSearch d-flex align-items-center">
                <div className="selectDrop cursor position-relative">
                  All Categories
                  <Select
                    data={categories}
                    placeholder={"All Categories"}
                    icon={false}
                    selectedSelectBoxItem={selectedSelectBoxItem}
                    view="category"
                  />
                </div>
                <div className="search">
                  <input type="text" placeholder="Search for items..." />
                  <SearchIcon className="searchIcon cursor" />
                </div>
              </div>
            </div>
            {/* header search end here */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
