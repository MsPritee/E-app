import React, { useEffect, useState } from "react";
import "./select.css";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { ClickAwayListener } from "@mui/material";

const Select = (data, placeholder, icon, view, selectedSelectBoxItem) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");

  const [listData, setListData] = useState([]);
  const [listData2, setListData2] = useState([]);

  const openSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  useEffect(() => {
    if (data.length !== 0) {
      setListData(data);
      setListData2(data);
    }
    setSelectedItem(placeholder);
  }, [data]);

  useEffect(() => {
    setSelectedItem(localStorage.getItem("location"));
    setSelectedIndex(parseInt(localStorage.getItem("locationTableIndex")));
  }, [selectedItem, selectedIndex]);

  const closeSelect = (index, name, id) => {
    localStorage.setItem("locationTabIndex", index);
    setSelectedIndex(index);
    setIsOpenSelect(false);
    setSelectedItem(name);
    selectedSelectBoxItem(name, id);
  };

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    const list = listData2.filter((item) => {
      return view === "cat"
        ? item?.name?.toLowerCase().includes(keyword)
        : item?.toLowerCase().includes(keyword);
    });

    const list2 = list.filter((item, index) => list.indexOf(item) === index);

    setListData(list2);
  };

  return (
    <ClickAwayListener onClickAway={() => setIsOpenSelect(false)}>
      <div className="selectDropWrapper cursor position-relative">
        {icon}
        <span className="openSelect" onClick={openSelect}>
          {selectedItem?.length > 25
            ? selectedItem?.substr(0, 25) + "..."
            : selectedItem}
          <KeyboardArrowDown className="arrow" />
        </span>
        {isOpenSelect === true && (
          <div className="selectDrop ">
            <div className="searchField">
              <input
                type="text"
                placeholder="Search Here...."
                onChange={filterList}
              />
            </div>
            <ul className="searchResults">
              <li
                onClick={() => closeSelect(0, placeholder, "")}
                className={`${selectedIndex === 0 ? "active" : ""}`}
              >
                {placeholder}
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
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
