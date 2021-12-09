import React from "react";

function Info() {
  return (
    <div className="info">
      <h2 className="adoptionHeader">Adoption Services</h2>
      <p className={"adoptionParagraph"}>
        Looking for a fuzzy new addition to your home?
      </p>
      <button className="surveyButton">Match with a cat!</button>
      <div className="companyInfo">
      <p>Why don't cats play poker in the jungle? There's too many cheetahs!</p>
      <h2>Company Info</h2>
      <p>Open Daily from 7AM - 5PM!</p>
      <p>2346 Meow Lane</p>
      <p>Corvallis, Oregon</p>
      <p>541-477-9876</p>
      <p>CozyCatCafe@gmail.com</p>
      </div>
    </div>
  );
};

export default Info;
