import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="searchbox position-relative d-flex align-items-center">
      <FaSearch
        style={{ marginLeft: "15px", fontSize: "15px", color: "#4e4e4e" }}
      />
      <input type="text" placeholder="search here..." />
    </div>
  );
};

export default SearchBox;
