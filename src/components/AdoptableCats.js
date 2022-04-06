import React from "react";
import Cat from "./Cat";

function AdoptableCats({ adoptableCats, handleAdoptionForm }) {
  return (
    <>
      <div className="cat-adoption-form">
        <h2>Cat Adoption Form</h2>
        <form onSubmit={(e) => handleAdoptionForm(e)}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="phone" name="phone" placeholder="Your phone number" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="catName" placeholder="Cat's name" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="adoptableCats">
        {adoptableCats.map((c) => (
          <Cat key={c.id} cat={c} />
        ))}
      </div>
    </>
  );
}

export default AdoptableCats;
