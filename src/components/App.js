import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
// import Cat from "./Cat";
// import Search from "./Search.js";
import Info from "./Info.js";
import BookSpec from "./BookSpec";
import AdoptableCats from "./AdoptableCats";
// import { current } from "immer";

// 'react-router-dom' Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const adoptableCatsAPI = "http://localhost:3000/adoptableCats";
const cafeCatsAPI = "http://localhost:3000/cafeCats";
const bookAPI = "http://localhost:3000/books";
const potentialAdoptersAPI = "http://localhost:3000/potentialAdopters";

function App() {
  const [cats, setCats] = useState([]);
  const [adoptableCats, setAdoptableCats] = useState([]);
  const [cafeCats, setCafeCats] = useState([]);
  // const [oneCat, setOneCat] = useState([]);
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [backIsOn, setBackIsOn] = useState(false);
  // const [nextIsOn, setNextIsOn] = useState(true);
  const [books, setBooks] = useState([]);
  // const [cardVisible, setCardVisible] = useState(true);

  useEffect(() => {
    fetch(adoptableCatsAPI)
    .then(r => r.json())
    .then(setAdoptableCats)
  }, []);
  useEffect(() => {
    fetch(cafeCatsAPI)
      .then((r) => r.json())
      .then((data) => {
        setCats(data);
        setCafeCats(data);
      });
  }, []);

  useEffect(() => {
    fetch(bookAPI)
      .then((r) => r.json())
      .then(setBooks)
      .catch((error) => console.log("ERROR fetching bookAPI", error));
  }, []);

  function handleSearch(e) {
    setBooks(
      books.filter((b) =>
        b.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function checkout() {
    console.log("Checkout book")
  }

  function handleAdoptionForm(e) {
    e.preventDefault();

    fetch(potentialAdoptersAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: e.target.name.value,
        phone: e.target.phone.value,
        email: e.target.email.value,
        catName: e.target.catName.value
      })
    })
    .then(r => r.json())
    .then(msg => console.log("potential adopter alert!", msg));

  }

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/books/:id" element={
            <BookSpec checkout={checkout} />
          }/>
        </Routes>
        <Routes>
          <Route exact path="/adoptablecats" element={
            <AdoptableCats adoptableCats={adoptableCats} handleAdoptionForm={handleAdoptionForm}/>
          } />
        </Routes>
        <Routes>
          <Route exact path="/books" element={
            <BookContainer books={books} handleSearch={handleSearch} />
          } />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Info cafeCats={cafeCats}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
