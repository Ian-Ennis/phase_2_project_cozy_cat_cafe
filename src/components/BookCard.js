import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookCard({ book, setCardVisible }) {
  const history = useNavigate();

  function showSpec(book) {
    history(`/books/${book.id}`);
    setCardVisible(false);
  }

  return (
    <div className="bookCard">
      <h2 className="bookTitle">{book.title}</h2>
      <h3>Author: {book.author}</h3>
      <p>Category: {book.category}</p>
      <p>Pages: {book.pages}</p>
      <div className="bookImg">
        <img src={book.image} alt={book.title} />
      </div>
      <button id="viewDetails" onClick={() => showSpec(book)}>View details</button>
    </div>
  );
}

export default BookCard;
