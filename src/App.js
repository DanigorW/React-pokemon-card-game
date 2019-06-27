import React, { Component } from "react";
import PokemonGame from "./PokemonGame";
import PokemonDex from "./PokemonDex";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonGame />
      </div>
    );
  }
}

export default App;
