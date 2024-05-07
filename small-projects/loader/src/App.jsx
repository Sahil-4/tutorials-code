import { useState } from "react";
import "./App.css";
import Loader from "./Components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Data is ready");
    }, 2000);
  };

  return (
    <div>
      <button onClick={getData}>Get data</button>
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
