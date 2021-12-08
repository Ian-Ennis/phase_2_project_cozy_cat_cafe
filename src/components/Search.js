import React from "react";

function Search() {
    return (
        <form id="form"> 
            <input type="search" id="query" name="q" placeholder="Search books..." />
            <button>Search</button>
        </form>
    );
};

export default Search;
