import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="searchBar">
      <label htmlFor="search">Search Books:</label>
      <br />
      <input
        type="text"
        id="search"
        placeholder="By title"
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
}

export default Search;
