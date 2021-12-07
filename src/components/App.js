import React from "react";
import "../index.css";
import { useEffect, useState } from "react";
// import { useState } from "react/cjs/react.development";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import BookCard from "./BookCard.js";
import Cat from "./Cat.js";
import Search from "./Search.js"
import Info from "./Info.js"
import BookSpec from "./BookSpec";

const catAPI = `https://cataas.com/cat?json=true`;
const book = {
  id: 1,
  title: "The Butterfly House",
  plot: "Hospitals are supposed to be places of healing. But in the coronary care unit at one of Copenhagen’s leading medical centers, a nurse fills a syringe with an overdose of heart medication and stealthily enters the room of an older male patient. Six days earlier, a paperboy on his route in central Copenhagen stumbles upon a macabre find: the naked body of a dead woman, lying in a fountain with arms marked with small incisions. Cause of death? Exsanguination—the draining of all the blood in her body. Clearly, this is no ordinary murder. Copenhagen investigator Jeppe Kørner, recovering from a painful divorce and in the throes of a new relationship, takes on the case. His partner, Anette Werner, now on maternity leave after an unexpected pregnancy, is restless at home with a demanding newborn and an equally demanding husband. While Jeppe pounds the streets looking for answers, Anette decides to do a little freelance sleuthing. But operating on her own exposes her to dangers she can’t even begin to fathom. As the investigation ventures into dark corners, it uncovers the ambition and greed that festers beneath the surface of caregiving institutions—all the more shocking for their depravity—and what Jeppe and Anette discover will turn their blood as cold as ice…",
  author: "Katrine Engberg",
  category: "Suspense & Thriller",
  pages: 368,
  image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982127619/the-butterfly-house-9781982127619_hr.jpg",
  checkedOut: false
}

function App() {
  const [cat, setCat] = useState([]);
  const [bookCard, setBookCard] = useState(true);
  const [bookSpec, setBookSpec] = useState({})

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

  function viewSpec(book) {
    setBookCard(false);
    setBookSpec(book);
  }

  function checkoutBook() {
    console.log('checkout')
  }

  function goBackToBooks() {
    console.log('go back')
  }

  return (
    <div>
      <BookSpec book={book} checkout={checkoutBook} back={goBackToBooks}/>
    </div>
  );
}

export default App;



// {/* <Header />
//       <Cat cat={cat} newRandomCat={newRandomCat} viewAdoptableCats={viewAdoptableCats}/>
//       <Search />
//       <Info /> */}
//       {/* {bookCard ? 
//         <BookContainer booksToBeRendered={books} handleViewSpec={viewSpec}/> :  */}