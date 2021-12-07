import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Cat from "./Cat.js";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import adoptableCats from "./catData.js";

const catAPI = `https://cataas.com/cat?json=true`;

function App() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    fetch(catAPI)
      .then((r) => r.json())
      .then((data) => setCat(data));
  }, []);

  function newRandomCat(cat) {
      fetch(catAPI)
        .then((r) => r.json())
        .then((data) => setCat(data));
        console.log(cat.url)
  }

  function viewAdoptableCats() {
    console.log('adoptable')
  }

  return (
    <div>
      <Cat cat={cat} newRandomCat={newRandomCat} viewAdoptableCats={viewAdoptableCats}/>
    </div>
  );
}

export default App;
