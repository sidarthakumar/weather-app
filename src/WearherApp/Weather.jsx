import './Weather.css';
import searchIcon from '../assets/search.png';
import wind from '../assets/wind.png';
import humidity from '../assets/humidity.png';
import cloud from '../assets/cloud.png';
import { useEffect, useState } from 'react';
const api = {
  key: 'f7a7c07263f43910173a97a08fdc61db',
  base: 'https://api.openweathermap.org/data/2.5',
};
const Weather = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = async (query) => {
    const response = await fetch(
      `${api.base}/weather?q=${query}&units=metric&appid=${api.key}`
    );
    const data = await response.json();
    setWeather(data);
    setQuery('');
    console.log(data);
  };
  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };
  useEffect(() => {
    search('Delhi');
  }, []);
  return (
    <div className='container'>
      <div className='topBar'>
        <input
          type='text'
          className='cityInput'
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          // onKeyUp={search}
        />
        <div
          className='searchIcon'
          onClick={() => search(query)}
        >
          <img
            src={searchIcon}
            alt='Search-Icon'
          />
        </div>
      </div>

      {typeof weather.main != 'undefined' ? (
        <>
          <div className='weatherImage'>
            <img
              src={cloud}
              alt='cloud'
            />
          </div>
          <div className='weatherTemp'>{Math.round(weather.main.temp)}°c</div>
          <div className='weatherLocation'>{weather.name}</div>
          <div className='weatherDate'>{dateBuilder(new Date())}</div>
          <div className='weatherContainer'>
            <div className='element'>
              <img
                src={humidity}
                alt='humidity'
                className='icon'
              />
              <div className='data'>
                <div className='humidityPercent'>{weather.main.humidity} %</div>
                <div className='text'>Humidity</div>
              </div>
            </div>
            <div className='element'>
              <img
                src={wind}
                alt='wind'
                className='icon'
              />
              <div className='data'>
                <div className='windSpeed'>{weather.wind.speed} km/h</div>
                <div className='text'>Wind Speed</div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};
export default Weather;
