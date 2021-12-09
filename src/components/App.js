import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import Cat from "./Cat.js";
import Search from "./Search.js";
import Info from "./Info.js";
import BookSpec from "./BookSpec";

const catAPI = "http://localhost:3000/cafeCats";
const bookAPI = "http://localhost:3000/books";

function App() {
  const [cat, setCat] = useState([]);
  const [books, setBooks] = useState([]);
  const [cardVisible, setCardVisible] = useState(true);
  const [bookSpec, setBookSpec] = useState({});
  const [clickedBook, setClickedBook] = useState({});

  useEffect(() => {
    fetch(catAPI)
      .then((r) => r.json())
      .then(setClickedBook);
  }, []);

  useEffect(() => {
    fetch(bookAPI)
      .then((r) => r.json())
      .then(setBooks)
      .catch((error) => console.log("ERROR fetching bookAPI", error));
  }, []);

  function newRandomCat() {
    console.log('click')
    fetch(catAPI)
      .then((r) => r.json())
      .then((data) => setCat(data[0].url));
  }

  function viewAdoptableCats() {
    console.log("adoptable");
  }

  function takeSurvey() {
    console.log("adopt me!");
  }

  function showSpec(book) {
    setClickedBook(book);
    setCardVisible(false);
  }

  function backToBooks() {
    setCardVisible(true)
  }

  function handleSearch(e) {
    console.log("handleSearch has been invoked!", e.target.value);
    // setPlants(plants.filter(p => p.name.includes(e.target.value)))
    setBooks(books.filter(b => b.title.includes(e.target.value)));
  }

  return (
    <div className="App">
      <Header />
      <Cat
        cat={cat}
        newRandomCat={newRandomCat}
        viewAdoptableCats={viewAdoptableCats}
      />
      <Search handleSearch={handleSearch}/>
      <Info takeSurvey={takeSurvey} />
      {cardVisible ? (
        <BookContainer books={books} showSpec={showSpec} />
      ) : (
        <BookSpec clickedBook={clickedBook} backToBooks={backToBooks}/>
      )}
    </div>
  );
}

export default App;
