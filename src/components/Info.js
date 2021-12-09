import React from "react";

function Info(oneCat, nextIsOn, backIsOn, nextCat, previousCat) {
  return (
    <>
      <div className="cafeCats">
          <img className="cafeCatImg" src={oneCat.url} alt="cafe_cat" />
          <br />
          {backIsOn ? (
            <button className="oldCompanion" onClick={() => previousCat(oneCat)}>
              Previous cat
            </button>
          ) : null}
          {nextIsOn ? (
            <button className="newCompanion" onClick={() => nextCat(oneCat)}>
              Next cat
            </button>
          ) : null}
      </div>

      
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
    </>
  );
};

export default Info;
