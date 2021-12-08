import React from "react";

function BookCard({ book }) {
    return (
        <div>
            <h2>{book.title}</h2>
            <img src={book.image} />
        </div>
    );
}

export default BookCard;
