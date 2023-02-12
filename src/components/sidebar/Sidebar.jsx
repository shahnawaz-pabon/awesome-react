import React, { useState } from "react";
import { Link } from "react-router-dom";
// import {
//   ItemsList,
//   ItemContainer,
//   ItemWrapper,
//   ItemName,
// } from "./SidebarStyles";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";

import { dummyData } from "..";

const Sidebar = ({ displaySidebar, showNav }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={`l-navbar${showNav ? " show" : ""}`}>
      <nav className="nav">
        <div>
          <a href="#" target="_blank" className="nav_logo">
            {/* <i className="bi bi-alexa nav_logo-icon" />{" "} */}
            <TwoWheelerIcon className="nav_logo-icon" />{" "}
            <span className="nav_logo-name">Pabon</span>
          </a>
          <div className="nav_list">
            {dummyData &&
              dummyData.map((itemData, index) => (
                <a
                  key={index}
                  onClick={() => setActiveItem(itemData.id)}
                  className="nav_link"
                  href={itemData.path}
                  // className={itemData.id === activeItem ? "active" : ""}
                >
                  {itemData.icon}
                  <span className="nav_name">{itemData.name}</span>
                </a>
              ))}
          </div>
        </div>
        <a href="https://cluemediator.com" target="_blank" className="nav_link">
          <i className="bi bi-box-arrow-left nav_icon" />
          <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>
    // <ItemsList>
    //   {dummyData.map((itemData, index) => (
    //     <ItemContainer
    //       key={index}
    //       onClick={() => setActiveItem(itemData.id)}
    //       className={itemData.id === activeItem ? "active" : ""}
    //     >
    //       <Link to={itemData.path}>
    //         <ItemWrapper>
    //           {itemData.icon}
    //           <ItemName displaySidebar={displaySidebar}>
    //             {itemData.name}
    //           </ItemName>
    //         </ItemWrapper>
    //       </Link>
    //     </ItemContainer>
    //   ))}
    // </ItemsList>
  );
};

export default Sidebar;
