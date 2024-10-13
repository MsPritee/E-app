import { FilterAltOutlined } from "@mui/icons-material";
import { Button, Checkbox, Slider } from "@mui/material";
import React from "react";
import bannerImg from "../../assets/images/b4.jpg";

function valuetext(value) {
  return `${value}°C`;
}

const label = { inputProps: { "aria-label": "checkbox demo" } };

const Sidebar = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>

          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img
                  width={30}
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img
                  width={30}
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img
                  width={30}
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img
                  width={30}
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                30
              </span>
            </div>
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img
                  width={30}
                  src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg"
                />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center justify-content-center rounded-circle ml-auto">
                30
              </span>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow">
          <h3>Fill by Price</h3>

          <Slider
            min={0}
            step={1}
            max={1000}
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            color="success"
          />

          <div className="d-flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-success">${value[0]}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-success">${value[1]}</strong>
            </span>
          </div>

          <div className="filters">
            <h5>Color</h5>
            <ul className="mb-0">
              <li>
                <Checkbox {...label} color="success" /> Red (56)
              </li>
              <li>
                <Checkbox {...label} color="success" /> White (43)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Black (69)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Purple (28)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Red (56)
              </li>
              <li>
                <Checkbox {...label} color="success" /> White (43)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Black (69)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Purple (28)
              </li>
            </ul>
          </div>

          <div className="filters">
            <h5>Item Condition</h5>
            <ul>
              <li>
                <Checkbox {...label} color="success" /> New (156)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Refurbished (43)
              </li>
              <li>
                <Checkbox {...label} color="success" /> Used (69)
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <Button className="btn bg-g">
              <FilterAltOutlined /> Filter
            </Button>
          </div>
        </div>

        <img src={bannerImg} className="w-100" />
      </div>
    </>
  );
};
export default Sidebar;
