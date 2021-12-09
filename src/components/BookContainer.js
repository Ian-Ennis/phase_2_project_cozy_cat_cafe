import React from "react";
import BookCard from "./BookCard";
import Search from "./Search";

function BookContainer({ books, handleSearch, showSpec }) {
    return (
        <>
        <Search handleSearch={handleSearch}/>
        <div className="BookContainer">
            {books.map(b => (
                <BookCard key={b.id} book={b} showSpec={showSpec}/>
            ))}
        </div>
        </>
    )
};

export default BookContainer;
