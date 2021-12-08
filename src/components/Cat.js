import React from "react";

function Cat({ cat, newRandomCat, viewAdoptableCats }) {
  return (
    <div>
      <div className="cafeCats">
        <img
          className="cafeCatImg"
          src={cat}
          alt="cafe_cat"
        />
        <br/>
        <button className="newCompanion" onClick={() => newRandomCat(cat)}>
          Want a new cat companion for the day?
        </button>
      </div>
    </div>
  );
}

export default Cat;
