import { useState } from "react";
import "./App.css";

function App() {
  // define the possible choices for the game
  const choices = ["rock", "paper", "scissors"];

  // declare the state variables to handle user and computer choice, and game result
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  // function to handle user and computer input/choice and determine game result
  const handleUserChoice = (userC) => {
    // generate computer choice
    const computerC = choices[Math.floor(Math.random() * choices.length)];
    // Math.random() will return a random floating point number between 0 and 1
    // Math.random() * choices.length will convert that random number to between
    // 0 and 3 (length of choices array)
    // Math.floor(Math.random() * choices.length) will make that floating point number between 0 and 3 an integer
    // at the end choices[Math.floor(Math.random() * choices.length)];  will give a choice rock, paper or scissors randomly

    // lets now update user and computer choices
    setComputerChoice(computerC);
    setUserChoice(userC);

    // determine the winner
    determineWinner(userChoice, computerChoice); // it will take choices of user and computer
  };

  const determineWinner = (userChoice, computerChoice) => {
    // tie case
    if (userChoice == computerChoice) {
      setResult("It's a tie.");
    }
    // user wins case
    else if (
      (userChoice == "rock" && computerChoice == "scissors") ||
      (userChoice == "paper" && computerChoice == "rock") ||
      (userChoice === "scissors" && computerChoice == "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  };

  // lets now create UI part

  // Render the game board with choices, buttons, and result
  return (
    <div className="game-board">
      {/* title of game */}
      <h1>Rock Paper Scissors Game</h1>

      {/* display user and computer choices */}
      <div className="choices">
        <div className="p-choice">
          You
          <span>{userChoice}</span>
        </div>

        <div className="c-choice">
          Computer
          <span>{computerChoice}</span>
        </div>
      </div>

      {/* buttons to select choice */}
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => handleUserChoice(choice)}>
            {choice}
          </button>
        ))}
      </div>

      {/* lets display the result only if it has some value  */}
      {result && <div className="result">{result}</div>}
    </div>
  );
}

export default App;

// and we are done 
// now lets start out app by ?
// npm run dev 
// above given command 
// and check the output in our browser 

// Have fun while coding 