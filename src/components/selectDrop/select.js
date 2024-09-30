import React, { useState } from "react";
import "./select.css";
  import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

  const Select = () => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState("All Categories");

    const openSelect = () => {
      setIsOpenSelect(!isOpenSelect);
    };

    const closeSelect = (index) => {
      setSelectedIndex(index);
      setIsOpenSelect(false);
    };

    return (
      <div className="selectDropWrapper cursor position-relative">
        <span className="openSelect" onClick={openSelect}>
          {selectedItem}
          <KeyboardArrowDown className="arrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectDrop ">
            <div className="searchField">
              <input type="text" />
              <ul className="searchResults">
                <li
                  onClick={() => closeSelect(0)}
                  className={`${selectedIndex === 0 ? "active" : ""}`}
                >
                  Milk and Diaries
                </li>
                <li
                  onClick={() => closeSelect(1)}
                  className={`${selectedIndex === 1 ? "active" : ""}`}
                >
                  Wines & Drinks
                </li>
                <li
                  onClick={() => closeSelect(2)}
                  className={`${selectedIndex === 2 ? "active" : ""}`}
                >
                  Clothing & Beauty
                </li>
                <li
                  onClick={() => closeSelect(3)}
                  className={`${selectedIndex === 3 ? "active" : ""}`}
                >
                  Fresh Seafood
                </li>
                <li
                  onClick={() => closeSelect(4)}
                  className={`${selectedIndex === 4 ? "active" : ""}`}
                >
                  Pet Food
                </li>
                <li
                  onClick={() => closeSelect(5)}
                  className={`${selectedIndex === 5 ? "active" : ""}`}
                >
                  Fast Food
                </li>
                <li
                  onClick={() => closeSelect(6)}
                  className={`${selectedIndex === 6 ? "active" : ""}`}
                >
                  Baking material
                </li>
                <li
                  onClick={() => closeSelect(7)}
                  className={`${selectedIndex === 7 ? "active" : ""}`}
                >
                  Vegitables
                </li>
                <li
                  onClick={() => closeSelect(8)}
                  className={`${selectedIndex === 8 ? "active" : ""}`}
                >
                  Fresh Fruits
                </li>
                <li
                  onClick={() => closeSelect(9)}
                  className={`${selectedIndex === 9 ? "active" : ""}`}
                >
                  Bread & Juice
                </li>
                <li
                  onClick={() => closeSelect(10)}
                  className={`${selectedIndex === 10 ? "active" : ""}`}
                >
                  Milks and Diaries
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Select;
