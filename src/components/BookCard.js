import React from "react";

function BookCard({ book, showSpec }) {
  return (
    <div className="bookCard">
      <h2 className="bookTitle">{book.title}</h2>
      <h3>Author: {book.author}</h3>
      <p>Category: {book.category}</p>
      <p>Pages: {book.pages}</p>
      <div className="bookImg">
        <img src={book.image} alt={book.title} />
      </div>
      <button onClick={() => showSpec(book)}>View details</button>
    </div>
  );
}

export default BookCard;
