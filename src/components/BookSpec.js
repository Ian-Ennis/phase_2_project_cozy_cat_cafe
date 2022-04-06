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
      <Link id="backToBooks" to="/books">Back to library</Link>
      <div className="twoColumnCenteredGrid">
            <img
              className="bookCover"
              src={`${bookCoverURLStub}${bookDetail.image}`}
              alt=""
            />
            <div><b>{bookDetail.title}</b></div>
            <div>by {bookDetail.author}</div>
            <div>Category: <em>{bookDetail.category}</em></div>
            <div>Length: {bookDetail.pages} pages</div>
            <p id="plot">{bookDetail.plot}</p>
          </div>
    </div>
  );
}

export default BookSpec;
