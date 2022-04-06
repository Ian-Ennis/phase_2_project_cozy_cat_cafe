import React, { useState } from "react";
import BookCard from "./BookCard";
import Search from "./Search";
import { useNavigate } from "react-router-dom";

function BookContainer({ books, handleSearch }) {
  const history = useNavigate();
  const [cardVisible, setCardVisible] = useState(true);

  function showSpec(book) {
    history(`/books/${book.id}`);
    setCardVisible(false);
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      {cardVisible && (
        <div className="bookContainer">
          {books.map((b) => (
            <BookCard key={b.id} book={b} showSpec={showSpec} />
          ))}
        </div>
      )}
    </>
  );
}

export default BookContainer;
