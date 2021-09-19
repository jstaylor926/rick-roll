import * as React from "react";

import CardList from "./components/CardList";
import "./assets/scss/main.scss";

export default function App() {
  return (
    <div className="App">
      <span><h3>Rick and Morty GraphQL</h3></span>
      <CardList />
    </div>
  );
}
