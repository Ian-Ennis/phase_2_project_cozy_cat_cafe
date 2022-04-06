import React from "react";

function Cat({ cat }) {
  return (
    <div>
      <div className="cat">
        <img className="catImage" src={cat.url} alt={cat.name} />
        <br />
        <div className="catInfo">
          {cat.name}, {cat.gender}, {cat.age}
        </div>
      </div>
    </div>
  );
}

export default Cat;
