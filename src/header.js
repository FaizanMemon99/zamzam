import { Typography } from "antd";
import React from "react";
import Logo from "./assets/icon/default-monochrome-white.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
