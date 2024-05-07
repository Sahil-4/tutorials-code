import { useState } from "react"
import "./App.css"

function App() {
  // state to store input and result 
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")

  // function to handle button clicks 
  const handleOnClick = (value) => {
    setInput((prevValue) => prevValue + value);
  }

  // function to clear input and result 
  const handleClear = () => {
    setInput("")
    setResult("")
  }

  // function to calculate output 
  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      console.log(error);
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">
          {result}
        </div>
      </div>

      <div className="buttons">
        {/* numbers */}
        <button onClick={() => handleOnClick("7")}>7</button>
        <button onClick={() => handleOnClick("8")}>8</button>
        <button onClick={() => handleOnClick("9")}>9</button>
        <button onClick={() => handleOnClick("/")}>/</button>

        <button onClick={() => handleOnClick("4")}>4</button>
        <button onClick={() => handleOnClick("5")}>5</button>
        <button onClick={() => handleOnClick("6")}>6</button>
        <button onClick={() => handleOnClick("*")}>*</button>

        <button onClick={() => handleOnClick("1")}>1</button>
        <button onClick={() => handleOnClick("2")}>2</button>
        <button onClick={() => handleOnClick("3")}>3</button>
        <button onClick={() => handleOnClick("-")}>-</button>

        <button onClick={() => handleOnClick("0")}>0</button>
        <button onClick={() => handleOnClick(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleOnClick("+")}>+</button>

        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  )
}

export default App