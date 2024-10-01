import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Select from "../selectDrop/select";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Button from "@mui/material/Button";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import axios from "axios";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
// import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [countryData, setCountryData] = useState([]);
  const [isOpenDropDown, setisOpenDropDown] = useState(false);
  const [isOpenAccDropDown, setisOpenAccDropDown] = useState(false);

  // const context = useContext(MyContext);
  const history = useNavigate();

  const headerRef = useRef();

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

  const countryList = [];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let position = window.pageYOffset;
      if (position > 100) {
        headerRef.current.classList.add("fixed");
      } else {
        headerRef.current.classList.remove("fixed");
      }
    });

    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  useEffect(() => {
    setCategories(context.categories);
  }, [context.categories]);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          //console.log(res.data.data);
          res.data.data.map((item, index) => {
            countryList.push(item.country);
            //console.log(item.country)
          });

          //console.log(countryList)
          setCountryData(countryList);
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

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

            <div className="col-sm-5 d-flex align-items-center part3 res-hide">
              <div className="ml-auto d-flex align-items-center">
                <div className="countryWrapper">
                  {countryData.length !== 0 && (
                    <Select
                      data={countryData}
                      placeholder={"All"}
                      icon={
                        <LocationOnOutlinedIcon style={{ opacity: "0.5" }} />
                      }
                      view="country"
                      selectedSelectBoxItem={selectedSelectBoxItem}
                    />
                  )}
                </div>
                <ClickAwayListener onClickAway={() => setisOpenDropDown(false)}>
                  <ul className="list list-inline mb-0 headerTabs">
                    <li className="list-inline-item">
                      <Link to="/myList">
                        <span>
                          <FavoriteBorderOutlinedIcon />
                          <span className="badge bg-success rounded-circle">
                            {context?.myListData?.length}
                          </span>
                          Wishlist
                        </span>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <span>
                        <Link to={"/cart"}>
                          <ShoppingCartOutlinedIcon />
                          <span className="badge bg-success rounded-circle">
                            {context.cartItems.length}
                          </span>
                          Cart
                        </Link>
                      </span>
                    </li>

                    {context.isLogin === true ? (
                      <li className="list-inline-item">
                        <span
                          onClick={() => setisOpenDropDown(!isOpenDropDown)}
                        >
                          <Person2OutlinedIcon />
                          Account
                        </span>

                        {isOpenDropDown !== false && (
                          <ul className="dropdownMenu">
                            <li>
                              <Link to="/my-account">
                                <Button
                                  className="align-items-center"
                                  onClick={() =>
                                    setisOpenDropDown(!isOpenDropDown)
                                  }
                                >
                                  <Person2OutlinedIcon /> My Account
                                </Button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/orders">
                                <Button
                                  onClick={() =>
                                    setisOpenDropDown(!isOpenDropDown)
                                  }
                                >
                                  <VerifiedIcon /> Orders
                                </Button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/myList">
                                <Button
                                  onClick={() =>
                                    setisOpenDropDown(!isOpenDropDown)
                                  }
                                >
                                  <FavoriteBorderOutlinedIcon /> My Wishlist
                                </Button>
                              </Link>
                            </li>

                            <li>
                              <Button onClick={logout}>
                                <LogoutOutlinedIcon /> Sign out
                              </Button>
                            </li>
                          </ul>
                        )}
                      </li>
                    ) : (
                      <li className="list-inline-item">
                        <Link to={"/signIn"}>
                          <Button className="btn btn-g">Sign In</Button>
                        </Link>
                      </li>
                    )}
                  </ul>
                </ClickAwayListener>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
