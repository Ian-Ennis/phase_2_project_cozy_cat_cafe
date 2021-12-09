import React from "react";
import Cat from "./Cat.js";

function RenderCat({ cat, nextCat, previousCat }) {
  return (
    <div>
      {cat.map(cat => (
        <Cat key={cat.id} cat={cat} nextCat={nextCat} previousCat={previousCat} />
      ))}
    </div>
  );
}

export default RenderCat;

