import React from "react";

function Info({takeSurvey}) {
  return (
    <div className="info">
      <h2 className="adoptionHeader">Adoption Services</h2>
      <p className={"adoptionParagraph"}>
        Looking for a fuzzy new addition to your home? Answer a few questions to see
        if we have a cat that's right for you!
      </p>
      <button className="surveyButton" onClick={() => takeSurvey()}>Match with a cat!</button>
      <div className="companyInfo">
      <p>Why don't cats play poker in the jungle? There's too many cheetahs!</p>
      <h2>Company Info</h2>
      <p>2346 Meow Lane</p>
      <p>Corvallis, Oregon</p>
      <p>541-477-9876</p>
      <p>CozyCatCafe@gmail.com</p>
      </div>
    </div>
  );
};

export default Info;
