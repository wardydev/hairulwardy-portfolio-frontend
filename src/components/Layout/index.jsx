import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Heading from "../Heading";
import Navbar from "../Navabar";

const Layout = ({ children, isHeader = false, titleHeader }) => {
  return (
    <div>
      <Navbar isLight={isHeader} />
      {isHeader && <Header title={titleHeader} />}
      <div className="w-full lg:w-2/4 mx-auto px-4 lg:px-0">
        {children}
        <div className="py-12">
          <Heading title="CONNECT" />
          <div className="mt-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
