// App jsx
import { useState } from "react";
import styles from "./App.module.css";

const App = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCat, setBmiCat] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Determine BMI category
      const category = getBmiCategory(parseFloat(bmiValue));
      setBmiCat(category);
    }
  };

  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  return (
    <div className={styles.bmiContainer}>
      <h2>BMI Calculator</h2>

      <div className={styles.inputGroup}>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={styles.inputField}
          />
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={styles.inputField}
          />
        </label>
      </div>

      <button onClick={calculateBMI} className={styles.calculateButton}>
        Calculate BMI
      </button>

      {bmi && <p className={styles.bmiResult}>Your BMI is: {bmi}</p>}
      {bmiCat && <p className={styles.bmiResult}>BMI Category: {bmiCat}</p>}
      
    </div>
  );
};

export default App;
