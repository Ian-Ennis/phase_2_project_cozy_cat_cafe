import React from "react";

function Cat({ cat }) {
  return (
    <div className="cat">
      <img className="catImg" src={cat.url} alt={cat.name} />
        <p className="cafeCatInfo">{cat.name}, {cat.gender}, {cat.age}</p>
    </div>
  );
}

export default Cat;
