import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/f1.svg";
import icon2 from "../../assets/images/f2.svg";
import icon3 from "../../assets/images/f3.svg";
import icon4 from "../../assets/images/f4.svg";
import icon5 from "../../assets/images/f5.svg";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import {
  EmailOutlined,
  HeadphonesOutlined,
  LocationOnOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerBoxes">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon1} />
                </span>
                <div className="info">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon2} />
                </span>
                <div className="info">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon3} />
                </span>
                <div className="info">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon4} />
                </span>
                <div className="info">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="box d-flex align-items-center w-100">
                <span>
                  <img src={icon5} />
                </span>
                <div className="info">
                  <h4>Best prices & offers</h4>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-3 part1">
              <Link to="/">
                <img src={Logo} />
              </Link>
              <br />
              <br />
              <p> Awesome grocery store website template</p>
              <br />
              <p>
                <LocationOnOutlined />
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                states
              </p>
              <p>
                <HeadphonesOutlined />
                <strong>Call us:</strong> (+91) - 540-025-124553
              </p>
              <p>
                <EmailOutlined />
                <strong>Email :</strong> sale@Nest.com
              </p>
              <p>
                <WatchLaterOutlined />
                <strong>Hours: </strong>10:10 - 18:00, Mon - Sat
              </p>
            </div>

            <div className="col-md-6 part2">
              <div className="row">
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Account</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">Sign In</a>
                    </li>
                    <li>
                      <a href="#">View Cart</a>
                    </li>
                    <li>
                      <a href="#">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Delivery Information</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms &amp; Conditions</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
