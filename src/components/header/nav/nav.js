import React from "react";
import "./nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import GridView from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";
import { HeadphonesOutlined } from "@mui/icons-material";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-3 part1 d-flex align-items-center">
            <Button className="bg-g text-white catTab">
              <GridView /> &nbsp; Browse All Categories <KeyboardArrowDown />
            </Button>
          </div>

          <div className="col-sm-7 part2">
            <nav>
              <ul className="list list-inline-item list-inline mb-0">
                <li className="list-inline-item">
                  <Button>
                    <Link>Home</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>About</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Shop</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Vendors</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Mega Menu <KeyboardArrowDown />
                    </Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>
                      Pages <KeyboardArrowDown />
                    </Link>
                  </Button>
                  <div className="dropdown_menu">
                    <ul>
                      <li>
                        <Button>
                          <Link to="/about">About Us</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Contact</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">My Account</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Login</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Register</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Forget Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Reset Password</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Purchase Guide</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Privacy Policy</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">Terms of Services</Link>
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <Link to="/about">404 Page</Link>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-2 part3 d-flex align-items-center">
            <div className="phNo d-flex align-items-center ml-auto">
              <span>
                <HeadphonesOutlined />
              </span>
              <div className="info ml-3">
                <h3 className=" text-g mb-0">1900-888</h3>
                <p className="mb-0">24/7 Support Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
