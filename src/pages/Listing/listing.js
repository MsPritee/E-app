import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Listing = () => {
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
            <div className="col-md-9 rightContent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Listing;
