import React from "react";
import "./searchBar.styles.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-field" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
