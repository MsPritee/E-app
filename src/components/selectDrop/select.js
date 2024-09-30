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

  console.log("Data:", data, "Type:", typeof data);
  console.log("ListData:", listData, "Type:", typeof listData);

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
                {placeholder} hi
              </li>
              {Array.isArray(listData) &&
                listData.map((item, index) => {
                  return (
                    <li
                      key={index + 1}
                      onClick={() =>
                        closeSelect(
                          index + 1,
                          view !== "cat" ? item : item?.name,
                          item?._id
                        )
                      }
                      className={`${
                        selectedIndex === index + 1 ? "active" : ""
                      }`}
                    >
                      {view !== "cat" ? item : item?.name}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Select;
