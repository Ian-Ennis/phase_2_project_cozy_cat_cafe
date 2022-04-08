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
        <h2>Adoption Services</h2>
        <p>
          Looking for a fuzzy new addition to your home? See the Adoptable Cats
          page.
        </p>
        <p>
          Joke of the month: Why don't cats play poker in the jungle? There's too many cheetahs!
        </p>
        <h2>Our Cafe Cats</h2>
        <p>
          Cafe cats are a part of the Cozy Cat family and are not available for
          adoption. Mainly because they will: make your socks disappear, likely alienate your dog, and most defintely annihilate your sleep schedule. (On second thought, maybe you can have some of them!). All jokes and seriousness aside, you are always welcome to come by and spend time with them!
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
