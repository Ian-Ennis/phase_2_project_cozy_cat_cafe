import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import RenderCat from "./RenderCat.js";
import Cat from "./Cat";
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
  const [backIsOn, setBackIsOn] = useState(false);
  const [nextIsOn, setNextIsOn] = useState(true);
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
    if (currentIndex > 6) {
      setNextIsOn(false);
    }

    if (currentIndex > 0) {
      setBackIsOn(true);
    }
    setOneCat(cats.slice(currentIndex, currentIndex + 1));
    setCurrentIndex(currentIndex + 1);
  }

  function previousCat() {
    if (currentIndex < 9) {
      setNextIsOn(true)
    }

    if (currentIndex < 3) {
      setBackIsOn(false);
    }

    setOneCat(cats.slice(currentIndex - 2, currentIndex - 1));
    setCurrentIndex(currentIndex - 1);
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
    setBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  return (
    <div className="App">
      <Header />
      <RenderCat
        cat={oneCat}
        nextCat={nextCat}
        previousCat={previousCat}
        backIsOn={backIsOn}
        nextIsOn={nextIsOn}
      />
      <Search handleSearch={handleSearch} />
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
