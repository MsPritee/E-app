import React from "react";
import "./footer.css";
import icon1 from "../../assets/images/f1.svg";
import icon2 from "../../assets/images/f2.svg";
import icon3 from "../../assets/images/f3.svg";
import icon4 from "../../assets/images/f4.svg";
import icon5 from "../../assets/images/f5.svg";

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
    </div>
  );
};
export default Footer;
