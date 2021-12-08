import React from "react";
import Cat from "./Cat.js";

function RenderCat({ cats, nextCat, previousCat }) {
  return (
    <div>
      {cats.map(cat => (
        <Cat key={cat.id} cat={cat} nextCat={nextCat} previousCat={previousCat} />
      ))}
    </div>
  );
}

export default RenderCat;

