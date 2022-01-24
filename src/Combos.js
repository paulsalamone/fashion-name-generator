import "./App.css";
import { useState, useEffect } from "react";
import NewWords from "./NewWords";

const generate = require("project-name-generator");

const Combos = () => {
  const [refresh, setRefresh] = useState(true);

  const words1 = generate().spaced;
  const words1Arr = [];
  for (let i = 0; i < 5; i++) {
    const num = Math.ceil(Math.random() * 3) + 1;
    words1Arr.push(generate({ words: num }).spaced);
  }

  useEffect(() => {
    console.log("refreshed!");
  }, [refresh]);

  const handleMore = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <div className="container">
        <h2>Random Word Combinations:</h2>
        {words1Arr.map((e) => {
          return (
            <div className="word">
              <p>{e}</p>
              {/* <button>save</button> */}
            </div>
          );
        })}
        <button onClick={handleMore}>Get 5 more</button>
      </div>
    </>
  );
};

export default Combos;
