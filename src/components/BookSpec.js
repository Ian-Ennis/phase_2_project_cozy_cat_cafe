import React from "react";

function BookSpec({book, checkout}) {
    console.log(book)
    return (
        <div class="parentContainer">
            <div class="twoColumnCenteredGrid">
                <div class="row">
                    <div class="bookCoverContainer">
                        <img className="bookCover"
                            src={book.image}
                            alt={book.title}/>
                    </div>
                    <div class="bookInfo">
                        <h2>{book.title}</h2>
                        <h3>by {book.author}</h3>
                        <button onClick={() => checkout(book)}>Check out</button>
                    </div>
                    <div class="plot">
                        <p>{book.plot}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSpec;