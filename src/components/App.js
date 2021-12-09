import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import RenderCat from "./RenderCat.js";
import Cat from "./Cat";
import Search from "./Search.js";
import Info from "./Info.js";
import BookSpec from "./BookSpec";
import AdoptableCats from "./AdoptableCats";
import { current } from "immer";

// 'react-router-dom' Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const catAPI = "http://localhost:3000/cafeCats";
const bookAPI = "http://localhost:3000/books";

function App() {
  const [cats, setCats] = useState([]);
  const [cafeCats, setCafeCats] = useState([]);
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
        setCafeCats(data);
        // console.log("CAT DATA", data.slice(0,1))
        // let oneCat = data.slice(0,1);
        // setOneCat(oneCat);
        // setCurrentIndex(currentIndex + 1);
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

  function checkout() {
    console.log("POST request here")
  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/books/:id" element={
            <BookSpec checkout={checkout} clickedBook={clickedBook} backToBooks={backToBooks} />
          }/>
        </Routes>
        <Routes>
          <Route exact path="/adoptablecats" element={
            <AdoptableCats />
          } />
        </Routes>
        <Routes>
          <Route exact path="/books" element={
            <BookContainer books={books} handleSearch={handleSearch} showSpec={showSpec} />
          } />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Info cafeCats={cafeCats} nextIsOn={nextIsOn} backIsOn={backIsOn} nextCat={nextCat} previousCat={previousCat}/>} />
        </Routes>
      </Router>

    {/*{cardVisible ? (
        <BookContainer books={books} showSpec={showSpec} />
      ) : (
        <BookSpec clickedBook={clickedBook} backToBooks={backToBooks} />
      )} */}
    </div>
  );
}

export default App;
