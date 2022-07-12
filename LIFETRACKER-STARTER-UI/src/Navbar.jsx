import * as React from "react";
// //import App from "App.jsx";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks/NavLinks";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <NavLinks />
    </nav>
  );
}
