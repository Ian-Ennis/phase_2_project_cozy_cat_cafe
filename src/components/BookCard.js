import React from "react";

function BookCard({ book, showSpec }) {
    // console.log("BOOK", book);
    return (
        <div className="BookCard">
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <img src={book.image} alt={book.title}/>
            {/* <p>{book.plot}</p> */}
            <button onClick={() => showSpec(book)}>See More</button>
        </div>
    );
}

export default BookCard;
