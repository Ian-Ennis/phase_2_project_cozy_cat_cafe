import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function BookSpec() {
  const [bookDetail, setBookDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/books/${id}`)
      .then((r) => r.json())
      .then((book) => {
        setBookDetail(book);
      });
  }, [id]);

  const bookCoverURLStub = `http://localhost:3000/`;

  return (
    <div className="parentContainer">
      <Link id="backToBooks" to="/books">
        Back to library
      </Link>
        <img
          className="bookCover"
          src={`${bookCoverURLStub}${bookDetail.image}`}
          alt=""
        />
        <div className="bookInfo">
          <p className="infoLine">
            <b>{bookDetail.title}</b>
          </p>
          <p>by {bookDetail.author}</p>
          <p>
            Category: <em>{bookDetail.category}</em>
          </p>
          <p>Length: {bookDetail.pages} pages</p>
        </div>
        <p id="plot">{bookDetail.plot}</p>
      </div>
  );
}

export default BookSpec;
