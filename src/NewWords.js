import "./App.css";
import Phonemes from "./Phonemes";
import { useState, useEffect } from "react";

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  names,
} = require("unique-names-generator");

const NewWords = () => {
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    console.log("refreshed!");
  }, [refresh]);

  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  }); // big_red_donkey

  const handleMore = () => {
    setRefresh(!refresh);
  };

  const endList = [];
  for (let i = 0; i < 5; i++) {
    let num1 = Math.floor(Math.random() * Phonemes.length);
    let num2 = Math.floor(Math.random() * Phonemes.length);
    // let num3 = Math.floor(Math.random() * Phonemes.length);
    let word1a = Phonemes[num1].slice(0, 1).toUpperCase().trim();
    let word1b = Phonemes[num1].slice(1, Phonemes[num1].length).trim();
    // console.log(Phonemes[num1]);

    // console.log(word1a + " + " + word1b);
    endList.push(word1a + word1b + Phonemes[num2].trim());
  }

  return (
    <>
      {/* {randomName} */}
      <div className="container">
        <h2>New Words:</h2>

        {endList.map((e) => {
          return (
            <div className="word">
              <p>{e}</p>
            </div>
          );
        })}
        <button onClick={handleMore}>Get 5 more</button>
      </div>
    </>
  );
};

export default NewWords;
