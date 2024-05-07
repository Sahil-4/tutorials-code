import { useRef, useState } from "react"

function App() {

  // state varianles to manage stopwatch 
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(); // to store interval id 

  // lets now create a function to format time ==> HH:mm:ss:MS format 
  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds/1000);
    const hours = Math.floor(totalSeconds/3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10)

    return `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}${String(seconds).padStart(2, '0')}${String(ms).padStart(2, '0')}`;
  }

  // function to start or pause the stopwatch 
  const startStopwatch = () => {
    if (!isRunning) {
      // if stop watch is not running then came into this block 
      // and 
      // start the interval to update time every 10 ms 
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      // if stop watch is already running 
      // then came into this block 
      // and 
      // pause the interval 
      clearInterval(intervalRef.current);
    }

    // toggle the state also 
    setIsRunning(!isRunning);
  }

  // now lets create the function to record the lap time 
  const lapTime = () => {
    setLaps((prevLaps) => [...prevLaps, time]);
  }

  // lets create a function to reset the stop watch also 
  const resetStopwatch = () => {
    // clear the interval 
    // reset time and laps 
    // and set running state to false 
    clearInterval(intervalRef.current); // clear the interval 
    setTime(0); // reset time 
    setLaps([]); // reset laps 
    setIsRunning(false); // and change the running state 
  }

  // we have created all the functions 
  // now lets create the UI 

  return (
    <div style={{textAlign: "center", margin: "50px"}}>
      {/* to display time / running time */}
      <div style={{fontSize: "2em", marginBottom: "20px"}}>
        <p>{formatTime(time)}</p>
      </div>

      {/* for buttons/controls */}
      <div style={{display: "flex", justifyContent: "center", gap: "20px"}}>
        <button onClick={startStopwatch} style={{fontSize: "1em", padding: "10px 20px"}}>
          {isRunning ? "Pause" : "Start"}
        </button> 
        <button onClick={lapTime} disabled={!isRunning} style={{fontSize: "1em", padding: "10px 20px"}}>
          Lap
        </button>
        <button onClick={resetStopwatch} style={{fontSize: "1em", padding: "10px 20px"}}>
          Reset
        </button>
      </div>

      {/* list of laps */}
      <div style={{marginTop: "20px", fontSize: "1.2em"}}>
        <ul>
          {laps.map((lap, index) => (
            <li key={lap} style={{marginBottom: "10px"}}>
              {`Lap ${index + 1} ${formatTime(lap)}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App

// lets now start our app and check the output 
// there is a small problem in start stopwatch function and in reset time function also 
// now lets check out app again 

