import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Books from "./components/Books";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron />
      <Books />
    </div>
  );
}

export default App;