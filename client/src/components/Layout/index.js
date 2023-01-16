import React from "react";
// import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;