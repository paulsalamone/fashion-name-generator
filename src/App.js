import "./App.css";
import { useState, useEffect } from "react";
import NewWords from "./NewWords";
import Combos from "./Combos";

const generate = require("project-name-generator");

function App() {
  return (
    <div className="App">
      <h1>👜 Digital Fashion Name Generator 👠</h1>
      <p>
        WARNING: the new words disappear forever when you click the buttons --
        write them down!
      </p>
      <main>
        <NewWords />

        <Combos />

        {/* <button onClick={handleMore}>Get 7 more</button> */}
      </main>
      <p>©2022 Paul Salamone Design</p>
    </div>
  );
}

export default App;
