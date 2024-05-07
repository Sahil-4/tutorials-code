
import './App.css'
import imageCloudyWeather from "./assets/cloudy.png";
import iconSearch from "./assets/search.png";

function App() {

  return (
    <div className='app'>
      
      <div className="search-box">
        <input type="text" />
        <img src={iconSearch} alt="search" />
      </div>

      <div className="weather-details-container">

        <div className="weather">
          <div className="temperature">
            <h3>New Delhi</h3>
            <h3>31 C</h3>
          </div>

          <div className="weather-icon">
            <img src={imageCloudyWeather} alt="weather" />
          </div>
        </div>

        <div className="weather-details">
          <div>Humidity : 50%</div>
          <div>Precipation : 0%</div>
          <div>Wind : 3km/h</div>
        </div>

      </div>
    </div>
  )
}

export default App
