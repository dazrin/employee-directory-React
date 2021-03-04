import React from "react";
import "./style.css";

// Header component; Renders main header
const Header = () => {
  return (
    <div>
      <div className="jumbotron header">
        <h1 className="title mb-8">Employee Directory</h1>
        <h5>Select a category from the table to sort by that category, or search using the search bar</h5>
      </div>
      <div className="header-bottom"></div>
    </div>
  )
}

export default Header;