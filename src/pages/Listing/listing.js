import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Product from "../../components/product";
import { Button } from "@mui/material";
import { FilterListOutlined, GridViewOutlined } from "@mui/icons-material";

const Listing = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  return (
    <section className="listingPage">
      <div className="container-fluid">
        <div className="breadcrumb flex-column">
          <h1>Snack</h1>
          <ul className="list list-inline mb-0">
            <li className="list-inline-item">
              <Link to={``}>Home</Link>
            </li>
            <li className="list-inline-item">
              <Link to={``}>Shop</Link>
            </li>
            <li className="list-inline-item">
              <Link to={``}>Snack</Link>
            </li>
          </ul>
        </div>
        <div className="listingData">
          <div className="row">
            <div className="sidebarWrapper col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 rightContent homeProducts pt-0">
              <div className="topStrip d-flex align-items-center">
                <p className="mb-0">
                  We found <span className="text-success">29</span>items for
                  you!
                </p>
                <div className="ml-auto d-flex align-items-center">
                  <div className="tab_ position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                    >
                      <GridViewOutlined />
                      Show: 50
                    </Button>
                    {isOpenDropDown != false && (
                      <ul className="dropdownMenu">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            50
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            100
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            150
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            200
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown(false)}
                          >
                            250
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                  <div className="tab_ ml-2 position-relative">
                    <Button
                      className="btn_"
                      onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
                    >
                      <FilterListOutlined />
                      Sort by:
                    </Button>
                    {isOpenDropDown2 != false && (
                      <ul className="dropdownMenu">
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown2(false)}
                          >
                            Featured
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown2(false)}
                          >
                            Price: Low to High
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown2(false)}
                          >
                            Price: High to Low
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown2(false)}
                          >
                            Release Date
                          </Button>
                        </li>
                        <li>
                          <Button
                            className="align-items-center"
                            onClick={() => setIsOpenDropDown2(false)}
                          >
                            Avg. Rating
                          </Button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>

              <div className="productRow pl-4 pr-3">
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
                <div className="item">
                  <Product tag="new" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
