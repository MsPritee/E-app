import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="card border-0 shadow">
          <h3>Category</h3>

          <div className="catList">
            <div className="catItem d-flex align-items-center">
              <span className="img">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" />
              </span>
              <h4 className="mb-0 ml-3 mr-3">Milk & Diaries</h4>
              <span className="d-flex align-items-center rounded-circle ml-auto">
                30
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
