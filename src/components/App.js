import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import BookCard from "./BookCard.js";
import Cat from "./Cat.js";
import Search from "./Search.js"
import Info from "./Info.js"
import BookSpec from "./BookSpec";

const catAPI = `https://cataas.com/cat?json=true`;

function App() {
  const [cat, setCat] = useState([]);
  const [bookCard, setBookCard] = useState(true);

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
      <Header />
      <Cat cat={cat} newRandomCat={newRandomCat} viewAdoptableCats={viewAdoptableCats}/>
      <Search />
      <Info />
      <BookContainer />
    </div>
  );
}

export default App;