import React from "react";
import BookCard from "./BookCard";

function BookContainer({ books }) {
    return (
        <div id="bookContainer">
            Book container
            {books.map(b => (
                <BookCard book={b}/>
            ))}
        </div>
    )
};

export default BookContainer;
