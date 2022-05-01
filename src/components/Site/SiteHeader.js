import React from "react";
import HeaderDate from "../HeaderDate";

const SiteHeader = () => {
  return (
    <header className="site-header">
      <HeaderDate />
      <div className="brand-logo">
        <h1 className="site-title">Security Soup</h1>
        <img
          src="https://pngimg.com/uploads/soup/soup_PNG1.png"
          alt="soup"
          className="soup"
        />
      </div>
    </header>
  );
};

export default SiteHeader;
