import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [rotation, setRotation] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  const setClock = () => {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation({
      second: secondsRatio * 360,
      minute: minutesRatio * 360,
      hour: hoursRatio * 360,
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock();
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <div
        className="hand hour"
        id="hourHand"
        style={{ transform: `translateX(-50%) rotate(${rotation.hour}deg)` }}
      ></div>
      <div
        className="hand minute"
        id="minuteHand"
        style={{ transform: `translateX(-50%) rotate(${rotation.minute}deg)` }}
      ></div>
      <div
        className="hand second"
        id="secondHand"
        style={{ transform: `translateX(-50%) rotate(${rotation.second}deg)` }}
      ></div>
      <div className="number number3">III</div>
      <div className="number number6">VI</div>
      <div className="number number9">IX</div>
      <div className="number number12">XII</div>
    </div>
  );
};

export default App;
