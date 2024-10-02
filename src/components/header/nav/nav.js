import React from "react";
import "./nav.css";
import Button from "@mui/material/Button";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import GridView from "@mui/icons-material/GridView";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav d-flex align-items-center">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-3 part1">
            <Button className="bg-g text-white catTab">
              <GridView /> &nbsp; Browse All Categories <KeyboardArrowDown />
            </Button>
          </div>

          <div className="col-sm-7 part2">
            <nav>
              <ul className="list list-inline mb-0">
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
                    <Link>Mega Menu</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Blog</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Pages</Link>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button>
                    <Link>Contact</Link>
                  </Button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-sm-2 part3"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
