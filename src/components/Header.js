import React from "react";

function Header() {
  return (
    <header>
      <img
        id="welcomeCat"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KRXHobgS9VCDlBpHjfpvkbaQ2aZnNBjPJQ&usqp=CAU"
        alt="cozy_cat"
      />
      <h1 id="appTitle">Cozy Cat Cafe</h1>
      <nav id="navBar">
        <a href="/">Home</a>
        <a href="/books">Books</a>
        <a href="/adoptablecats">Adoptable Cats</a>
      </nav>
    </header>
  );
}

export default Header;
