import React from "react";

function Cat({cat, nextCat, previousCat, backIsOn, nextIsOn}) {
  //nextIsOn = true
  //backIsOn = false
  return (
<div>
      <div className="cafeCats">
        <img className="cafeCatImg" src={cat.url} alt="cafe_cat" />
        <br />
        <div>{cat.name}, {cat.gender}, {cat.age}</div>
        {backIsOn ? (
          <button className="oldCompanion" onClick={() => previousCat(cat)}>
            Previous cat
          </button>
        ) : null}
        {nextIsOn ? (
          <button className="newCompanion" onClick={() => nextCat(cat)}>
            Next cat
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Cat;