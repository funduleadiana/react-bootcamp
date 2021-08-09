import React from "react";
import "./searchBar.styles.css";

const SearchBar = ({ onSubmit, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="search"
        className="search-field"
        onChange={onChange}
        placeholder="search movie name"
      />
      <button className="search-button" onClick={onSubmit}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
