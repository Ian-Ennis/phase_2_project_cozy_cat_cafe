import React from "react";

function Search({ handleSearch }) {
    return (
        // <form id="form"> 
        //     <input type="search" id="query" name="bookSearch" placeholder="Search books..." />
        //     <button>Search</button>
        // </form onSubmitonClick={() => {handleSearch()}}>
        <div className="searchBar">
            <label htmlFor="search">Search Books:</label>
            <input type="text" id="search" placeholder="Type title here"
                    onChange={(e) => handleSearch(e)}/>
        </div>
    );
};

export default Search;
