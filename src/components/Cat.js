import React from "react";

function Cat({cat, nextCat, previousCat}) {
  return (
    <div>
      <div className="cafeCats">
        <img className="cafeCatImg" src={cat.url} alt="cafe_cat" />
        <br />
        <button className="newCompanion" onClick={() => nextCat(cat)}>
          Click me for a new cat!
        </button>
        <button className="oldCompanion" onClick={() => previousCat(cat)}>Click here to see previous kitties!</button>
      </div>
    </div>
  );
}

export default Cat;

