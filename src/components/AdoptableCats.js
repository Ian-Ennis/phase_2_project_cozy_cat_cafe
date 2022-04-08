import React, { useEffect, useState } from "react";
import Cat from "./Cat";

function AdoptableCats() {
  const [adoptableCats, setAdoptableCats] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/adoptableCats`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => setAdoptableCats(data));
  }, []);

  function handleAdoptionForm(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/potentialAdopters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        catName: e.target.catName.value,
      }),
    }).then((r) => {
      r.json();
      alert("We have received your inquiry. Thank you!");
    });
  }

  return (
    <>
      <div className="cat-adoption-form">
        <h2>Adoption Inquiry Form</h2>
        <form onSubmit={(e) => handleAdoptionForm(e)}>
          <input type="text" name="name" placeholder="Your name" />
          <input type="phone" name="phone" placeholder="Your phone number" />
          <input type="email" name="email" placeholder="Your email" />
          <input type="text" name="catName" placeholder="Cat's name" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="inquiry">
        <p id="inquiry_response">
          <em>We will respond to inquiries within two business days</em>
        </p>
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
