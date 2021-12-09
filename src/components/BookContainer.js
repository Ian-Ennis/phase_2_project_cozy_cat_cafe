import React from "react";
import BookCard from "./BookCard";

function BookContainer({ books, showSpec }) {
    return (
        <div className="BookContainer">
            {books.map(b => (
                <BookCard key={b.id} book={b} showSpec={showSpec}/>
            ))}
        </div>
    )
};

export default BookContainer;
