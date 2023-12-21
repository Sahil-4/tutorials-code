import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const App = () => {
  // states to handle values of randomly generated number and user guess
  const [random, setRandom] = useState(0);
  const [guess, setGuess] = useState(0);

  // function to evaluate whether the number guessed by user is correct or not
  const checkGuess = () => {
    if (random == guess) {
      // right guess
      alert("You won.");
    } else {
      // wrong guess
      alert("Wrong guess.");
      if (random < guess) {
        // ask to guess small number
        alert("Try a smaller number.");
      } else {
        // ask to guess bigger number
        alert("Try a bigger number.");
      }
    }
  };

  useEffect(() => {
    // use effect to generate and set a random number everytime page loads
    setRandom(Math.floor(Math.random() * 100));

    // Math.floor(Math.random() * 100) will return a random number between 0 and 100
  }, []);

  // UI part
  return (
    <div className={styles.container}>
      <input
        type="number"
        min="0"
        max="100"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
      />

      <button type="button" onClick={checkGuess}>
        Check
      </button>
    </div>
  );
};

export default App;
