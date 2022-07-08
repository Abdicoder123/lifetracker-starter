import { useState } from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <Container
        maxWidth={false}
        sx={{ backgroundColor: "Orange", flexGrow: 1 }}
      >
        my Container
      </Container>
    </>
  );
}
