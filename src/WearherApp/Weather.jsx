import './Weather.css';
import searchIcon from '../assets/search.png';
import snow from '../assets/snow.png';
import clear from '../assets/clear.png';
import wind from '../assets/wind.png';
import rain from '../assets/rain.png';
import humidity from '../assets/humidity.png';
import drizzle from '../assets/drizzle.png';
import cloud from '../assets/cloud.png';
const Weather = () => {
  return (
    <div className='container'>
      <div className='topBar'>
        <input
          type='text'
          className='cityInput'
          placeholder='Search'
        />
        <div className='searchIcon'>
          <img
            src={searchIcon}
            alt='Search-Icon'
          />
        </div>
      </div>
      <div className='weatherImage'>
        <img
          src={cloud}
          alt='cloud'
        />
      </div>
      <div className='weatherTemp'>24°c</div>
      <div className='weatherLocation'>Delhi</div>
      <div className='weatherContainer'>
        <div className='element'>
          <img
            src={humidity}
            alt=''
            className='icon'
          />
          <div className='data'>
            <div className='humidityPercent'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img
            src={wind}
            alt=''
            className='icon'
          />
          <div className='data'>
            <div className='humidityPercent'>18 km/h</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Weather;
