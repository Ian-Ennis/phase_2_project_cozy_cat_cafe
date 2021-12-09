import React from "react";
import Cat from "./Cat.js";

function RenderCat({ cat, nextCat, previousCat, backIsOn, nextIsOn }) {
  return (
    <div>
      {cat.map(cat => (
        <Cat key={cat.id} cat={cat} nextCat={nextCat} previousCat={previousCat} backIsOn={backIsOn} nextIsOn={nextIsOn} />
      ))}
    </div>
  );
}

export default RenderCat;

