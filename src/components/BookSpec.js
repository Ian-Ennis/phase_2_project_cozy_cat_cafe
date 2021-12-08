import React from "react";

function BookSpec({ book, checkout, clickedBook, backToBooks }) {
  console.log(clickedBook);
  return (
    <div className="parentContainer">
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
            <button></button>
          </div>
          <div className="plot"></div>
        </div>
      </div>
    </div>
  );
}

export default BookSpec;

//title, author, plot, category, pages, cover
