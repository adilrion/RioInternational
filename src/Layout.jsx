import React from "react";
import { Nav } from "./Components/Header/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Layout;
