import React from "react";
import Cat from "./Cat";

function Info(cafeCats) {
  return (
    <>
      <div className="info">
        <h2>Welcome to our Cozy Cat Cafe!</h2>
        <p>
          Established in 2021. We are a coffee cafe with wonderful cats to
          adopt. Come have a drink, read a book, and hang out with us!
        </p>
        <h2>Company Info</h2>
        <p>Open Daily from 7AM - 5PM!</p>
        <p>2346 Meow Lane, Corvallis, Oregon</p>
        <p>541-477-9876</p>
        <p>CozyCatCafe@gmail.com</p>
        <h2 className="adoptionHeader">Adoption Services</h2>
        <p className={"adoptionParagraph"}>
          Looking for a fuzzy new addition to your home? See the Adoptable Cats
          page.
        </p>
        <p>
          Why don't cats play poker in the jungle? There's too many cheetahs!
        </p>
        <h2>Our Cafe Cats</h2>
        <p>
          Cafe cats are a part of the Cozy Cat family and are not available for
          adoption. You are always welcome to come by to spend time with any one
          of them!
        </p>
        <div className="cafeCats">
          {cafeCats.cafeCats.map((c) => (
            <Cat key={c.id} cat={c} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Info;
