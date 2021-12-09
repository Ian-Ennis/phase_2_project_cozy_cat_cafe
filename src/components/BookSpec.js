import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from 'react-router-dom';

function BookSpec({ checkout, clickedBook, backToBooks }) {
  const [book, setBook] = useState(null);
  const { id } = useParams();
  const history = useNavigate();

  function handleBack() {
    history.goBack();
  }

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBook(book);
      });
  }, [id]);

  return (
    <div className="parentContainer">
      <Link onClick={handleBack}>
            Go Back
      </Link>
      <div className="twoColumnCenteredGrid">
        <div className="row">
          <div className="bookCoverContainer">
            <img className="bookCover" src={clickedBook.image} alt=""></img>
            <div>{clickedBook.title}</div>
            <div>by {clickedBook.author}</div>
            <div>Category: {clickedBook.category}</div>
            <div>Length: {clickedBook.pages} pages</div>
            <p>Plot: {clickedBook.plot}</p>
          </div>
          <div className="bookInfo">
            <button onClick={() => checkout(book)}>Check out</button>
            <button onClick={() => backToBooks()}>Back</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSpec;

//title, author, plot, category, pages, cover
