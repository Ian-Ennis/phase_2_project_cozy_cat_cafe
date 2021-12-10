import React from "react";

function Cat({cat, nextCat, previousCat, backIsOn, nextIsOn}) {
  //nextIsOn = true
  //backIsOn = false
  return (
<div>
      <div className="cat">
        <img className="catImage" src={cat.url} alt={cat.name} />
        <br />
        <div clasName="catInfo">{cat.name}, {cat.gender}, {cat.age}</div>
        {/* {backIsOn ? (
          <button className="oldCompanion" onClick={() => previousCat(cat)}>
            Previous cat
          </button>
        ) : null}
        {nextIsOn ? (
          <button className="newCompanion" onClick={() => nextCat(cat)}>
            Next cat
          </button>
        ) : null} */}
      </div>
    </div>
  );
}

export default Cat;