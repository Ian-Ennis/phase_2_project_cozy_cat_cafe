import React from "react";

function Cat({ cat, newRandomCat, viewAdoptableCats }) {
  const catURLStub = `https://cataas.com`;

  return (
    <div>
      <div className="cafeCats">
        <img
          className="cafeCatImg"
          src={`${catURLStub}${cat.url}`}
          alt="cafe_cat"
        />
        <button onClick={() => newRandomCat(cat)}>
          Want a new cat companion for the day?
        </button>
      </div>
      <div className="adoptable">
          <button onClick={() => viewAdoptableCats}>Click here to see adoptable cats!</button>
      </div>
    </div>
  );
}

export default Cat;
