import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import RenderCat from "./RenderCat.js";
import Search from "./Search.js";
import Info from "./Info.js";
import BookSpec from "./BookSpec";
import { current } from "immer";

const catAPI = "http://localhost:3000/cafeCats";

const bookAPI = "http://localhost:3000/books";

function App() {
  const [cats, setCats] = useState([]);
  const [oneCat, setOneCat] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [books, setBooks] = useState([]);
  const [cardVisible, setCardVisible] = useState(true);
  const [clickedBook, setClickedBook] = useState({});

  useEffect(() => {
    fetch(catAPI)
      .then((r) => r.json())
      .then((data) => {
        setCats(data);
        setOneCat([...data.slice(0, 1)]);
        setCurrentIndex(currentIndex + 1);
      });
  }, []);

  useEffect(() => {
    fetch(bookAPI)
      .then((r) => r.json())
      .then(setBooks)
      .catch((error) => console.log("ERROR fetching bookAPI", error));
  }, []);

  function nextCat() {
    if (currentIndex > 7) {
      return;
    }
    setOneCat(cats.slice(currentIndex, currentIndex + 1));
    setCurrentIndex(currentIndex + 1);
  }

  function previousCat() {
    if (currentIndex < 2) {
      return;
    }
    setOneCat(cats.slice(currentIndex -2, currentIndex -1))
    setCurrentIndex(currentIndex -1);
  }

  function takeSurvey() {
    console.log("adopt me!");
  }

  function showSpec(book) {
    setClickedBook(book);
    setCardVisible(false);
  }

  function backToBooks() {
    setCardVisible(true);
  }

  function handleSearch(e) {
    setBooks(books.filter(b => b.title.toLowerCase().includes(e.target.value.toLowerCase())));
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
        <BookSpec clickedBook={clickedBook} backToBooks={backToBooks} />
      )}
    </div>
  );
}

export default App;
