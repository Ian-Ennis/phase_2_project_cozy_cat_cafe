import React, { useEffect, useState } from "react";
import "../index.css";
import Header from "./Header";
import BookContainer from "./BookContainer.js";
import Info from "./Info.js";
import BookDetails from "./BookDetails";
import AdoptableCats from "./AdoptableCats";
import { Routes, Route } from "react-router-dom";

const cafeCatsAPI = `http://localhost:3000/cafeCats`;

function App() {
  const [cats, setCats] = useState([]);
  const [cafeCats, setCafeCats] = useState([]);

  useEffect(() => {
    fetch(cafeCatsAPI)
      .then((r) => r.json())
      .then((data) => {
        setCats(data);
        setCafeCats(data);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Info cafeCats={cafeCats} />} />
        <Route
          exact
          path="/books"
          element={<BookContainer />}
        />
        <Route exact path="/books/:id" element={<BookDetails />} />
        <Route
          exact
          path="/adoptablecats"
          element={
            <AdoptableCats
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
