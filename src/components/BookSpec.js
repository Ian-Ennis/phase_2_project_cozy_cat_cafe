import React from "react";

function BookSpec({book, checkout}) {
    console.log(book)
    return (
        <div class="parentContainer">
            <div class="twoColumnCenteredGrid">
                <div class="row">
                    <div class="bookCoverContainer">
                        <img className="bookCover"></img>
                            
                    </div>
                    <div class="bookInfo">
                        
                        <button onClick={() => checkout(book)}>Check out</button>
                    </div>
                    <div class="plot">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookSpec;