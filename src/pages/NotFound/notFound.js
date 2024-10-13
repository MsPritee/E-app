import React from "react";
import "./notFound.css";
import NotFoundImg from "../../assets/images/404-pages.jpg";
import { Button, Link } from "@mui/material";

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container-fluid">
        <div className="box">
          <img src={NotFoundImg} width={500} />
          <br />
          {/* <br /> */}
          <h1>Page Not Found</h1>
          <p>
            The link you clicked may be broken or the page may have been
            removed. visit the Homepage or Contact us about the problem
          </p>
          <br />

          <div className="d-flex">
            <Button className="btn-g btn-lg m-auto">
              <Link to={"/"}>Back to Home Page</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
