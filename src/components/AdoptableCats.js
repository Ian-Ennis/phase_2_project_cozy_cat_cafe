import React from "react";
import Cat from "./Cat";

function AdoptableCats({ adoptableCats, nextCat, previousCat, backIsOn, nextIsOn }) {
    return (
      <div className="adoptableCats">
        <p>Adoptable cats</p>
        {/* added so the page will render. feel free to change! -Seen */}
        {adoptableCats.map(c => (
          <Cat key={c.id} cat={c} nextCat={nextCat} previousCat={previousCat} backIsOn={backIsOn} nextIsOn={nextIsOn} />
        ))}
      </div>
    );
}

export default AdoptableCats;
