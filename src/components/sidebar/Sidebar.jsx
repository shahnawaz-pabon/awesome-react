import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import {
//   ItemsList,
//   ItemContainer,
//   ItemWrapper,
//   ItemName,
// } from "./SidebarStyles";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { dummyData } from "..";

const Sidebar = ({ displaySidebar, showNav }) => {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation();

  return (
    <div className={`l-navbar${showNav ? " show" : ""}`}>
      <nav className="nav">
        <div>
          <Link to="/" className="nav_logo" onClick={() => setActiveItem(0)}>
            <TwoWheelerIcon className="nav_logo-icon" />{" "}
            <span className="nav_logo-name">Pabon</span>
          </Link>

          <div className="nav_list">
            {dummyData &&
              dummyData.map((itemData, index) => (
                <Link
                  key={index}
                  onClick={() => setActiveItem(itemData.id)}
                  className={
                    itemData.id === activeItem ? "nav_link active" : "nav_link"
                  }
                  to={itemData.path}
                >
                  {itemData.icon}
                  <span className="nav_name">{itemData.name}</span>
                </Link>
              ))}
          </div>
        </div>
        <a href="https://cluemediator.com" target="_blank" className="nav_link">
          <i className="bi bi-box-arrow-left nav_icon" />
          <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
