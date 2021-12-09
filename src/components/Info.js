import React from "react";
import Cat from "./Cat";

function Info(cat, nextCat, previousCat, backIsOn, nextIsOn) {
  return (
    <>
    <div>
      {cat.map(cat => (
        <Cat key={cat.id} cat={cat} nextCat={nextCat} previousCat={previousCat} backIsOn={backIsOn} nextIsOn={nextIsOn} />
      ))}
    </div>

      
      <div className="info">
        <h2 className="adoptionHeader">Adoption Services</h2>
        <p className={"adoptionParagraph"}>
          Looking for a fuzzy new addition to your home?
        </p>
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
    </>
  );
};

export default Info;
