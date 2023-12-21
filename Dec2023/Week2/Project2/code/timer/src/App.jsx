import { useEffect, useState } from "react";

function App() {
  // state variables
  const [time, setTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // use effect to handle timer logic
  useEffect(() => {
    let timer;

    // check if timer is running
    // and there is time remaining
    if (isRunning && time > 0) {
      // set up interval to decreament time every second
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      // if time is up
      // clear the interval
      // and alert
      clearInterval(timer);
      alert("Time is up");
      setIsRunning(false);
    }

    // clean up the interval
    return () => clearInterval(timer);
  }, [isRunning, time]);

  // handle change selected time // time selected/changed by user
  const handleTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setSelectedTime(newTime);
    setTime(newTime);
  };

  // to start the timer
  const handleStart = () => {
    if (selectedTime > 0) {
      setIsRunning(true);
    }
  };

  // to stop the timer
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  // lets now create UI

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Timer App</h1>

      <div style={{ marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Select Time (in seconds) :
          <input
            type="number"
            value={selectedTime}
            onChange={handleTimeChange}
            style={{
              padding: "8px",
              fontSize: "16px",
            }}
            disabled={isRunning}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <p style={{ fontSize: "18px" }}>
          Current Running Time : {time} seconds
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            padding: "10px",
            fontSize: "16px",
            margin: "0 10px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={handleStart}
          disabled={isRunning}
        >
          Start Timer
        </button>
        <button
          style={{
            padding: "10px",
            fontSize: "16px",
            margin: "0 10px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "5px",
          }}
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
}

export default App;

// lets checck the output now 