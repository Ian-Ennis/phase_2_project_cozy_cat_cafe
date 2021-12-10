import React from "react";
import Cat from "./Cat";

function AdoptableCats({ adoptableCats }) {
    return (
      <>
        <div className="cat-adoption-form">
          <h2>Cat Adoption Form</h2>
          <form onSubmit={(e) => console.log(e)}>
            <input type="text" name="name" placeholder="Your name" />
            <input type="phone" name="phone" placeholder="Your phone number" />
            <input type="email" name="email" placeholder="Your email" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="adoptableCats">
          {adoptableCats.map(c => (
            <Cat key={c.id} cat={c} />
          ))}
        </div>
      </>
    );
}

export default AdoptableCats;
