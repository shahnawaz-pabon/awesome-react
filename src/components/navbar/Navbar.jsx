import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";
// import { Styles } from "./NavbarStyles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";

export const NavigationBar = ({ showNav, setShowNav }) => {
  const handleClick = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={`header${showNav ? " body-pd" : ""}`}>
      <div className="header_toggle">
        {showNav ? (
          <CloseRoundedIcon onClick={handleClick} />
        ) : (
          <WidgetsRoundedIcon onClick={handleClick} />
        )}
      </div>
      <div className="header_img">
        <img
          src="https://avatars.githubusercontent.com/u/10698930?v=4"
          alt="Pabon"
        />
      </div>
    </header>
  );
};
