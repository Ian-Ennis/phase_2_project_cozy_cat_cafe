import React from "react";

function Cat({cat, nextCat, previousCat}) {
  return (
    <div>
      <div className="cafeCats">
        <img className="cafeCatImg" src={cat.url} alt="cafe_cat" />
        <br />
        <button className="newCompanion" onClick={() => nextCat(cat)}>
          Next cat
        </button>
        <button className="oldCompanion" onClick={() => previousCat(cat)}>Previous cat</button>
      </div>
    </div>
  );
}

export default Cat;

