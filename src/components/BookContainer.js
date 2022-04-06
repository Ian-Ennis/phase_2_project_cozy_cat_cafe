import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import Search from "./Search";

function BookContainer({ handleSearch }) {
  const [cardVisible, setCardVisible] = useState(true);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/books`)
      .then((r) => r.json())
      .then((data) => setBooks(data))
      .catch((error) => console.log("ERROR fetching bookAPI", error));
  }, []);

  function handleSearch(e) {
    setBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <>
      <Search handleSearch={handleSearch} />
      {cardVisible && (
        <div className="bookContainer">
          {books.map((b) => (
            <BookCard key={b.id} book={b} setCardVisible={setCardVisible} />
          ))}
        </div>
      )}
    </>
  );
}

export default BookContainer;
