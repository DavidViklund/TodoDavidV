import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <div style={logoContainerStyle}>
        <h1 style={logoStyle}>TTTD</h1>
      </div>
      <div style={linksContainerStyle}>
        <Link to="/LandingPage"> HOME / </Link>
        <span style={{ margin: "0 10px" }}> / </span>
        <Link to="/todolist"> TODO / </Link>
        <span style={{ margin: "0 10px" }}> / </span>
        <Link to="/about"> ABOUT </Link>
      </div>
    </nav>
  );
};

//stylesconst navStyle =
const navStyle = {
  fontSize: "1.5rem",
  borderBottom: "0.7px solid antiqueWhite",
  color: "#faebd7",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between",
};

const logoContainerStyle = {
  marginRight: "20px", // Justerar marginal emellan logotypen och länkarna
};

const logoStyle = {
  fontSize: "2rem",
  margin: "0",
  color: "#faebd7",
  letterSpacing: "-4px",
};

const linksContainerStyle = {
  display: "flex",
};
export default NavBar;
