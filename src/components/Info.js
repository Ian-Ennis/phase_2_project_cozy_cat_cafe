import React from "react";

function Info({viewAdoptableCats}) {
  return (
    <div className="info">
      <h2>Adoption Services</h2>
      <p>
        Looking for a fuzzy new addition to your home? Answer a few questions to see
        if we have a cat that's right for you!
      </p>
      <button onClick={() => viewAdoptableCats}>Match with a cat!</button>
      <h2>Company Info</h2>
    </div>
  );
}

export default Info;
