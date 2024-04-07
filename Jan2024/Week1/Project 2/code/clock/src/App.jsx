// App jsx
import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interValid = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interValid);
  }, []);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className={styles.digitalClockContainer}>
      <div className={styles.clock}>
        <span className={styles.hour}>{formatTime(time.getHours())}</span>
        <span className={styles.minute}>{formatTime(time.getMinutes())}</span>
        <span className={styles.seconds}>{formatTime(time.getSeconds())}</span>
      </div>
    </div>
  );
}

export default App;
