import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Saturday | 17 Apr 2021 21:21",
    description: "Broken Clouds",
    temperature: 13,
    humidity: 40,
    wind: 5,
  };
  return (
    <div className="Weather">
      <div className="WeatherApp">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Search location"
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
                id="search-city"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
                id="search-btn"
              />
            </div>
          </div>
        </form>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul>
            <li>Last updated: {weatherData.date}</li>
            <li>{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <ReactAnimatedWeather
                icon="PARTLY_CLOUDY_DAY"
                color="black"
                size={40}
                animate={true}
              />
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">° C </a>|<a href="/">° F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/Roxana-L/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-sourced on GitHub
        </a>
        , coded by Roxana Lupei
      </footer>
    </div>
  );
}
