import React from "react";
import Cat from "./Cat";

function AdoptableCats({ adoptableCats, nextCat, previousCat, backIsOn, nextIsOn }) {
    return (
      <div className="adoptableCats">
        {adoptableCats.map(c => (
          <Cat key={c.id} cat={c} nextCat={nextCat} previousCat={previousCat} backIsOn={backIsOn} nextIsOn={nextIsOn} />
        ))}
      </div>
    );
}

export default AdoptableCats;
