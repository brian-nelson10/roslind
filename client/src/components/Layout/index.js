import React from "react";
// import Navbar from "../Nav";
// import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-columns-2 gap-2 mx-0 my-0">
      {/* <Navbar /> */}
      <main className="">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;