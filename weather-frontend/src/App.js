import { useState } from 'react';
import axios from 'axios';
function App() {
  let [cityName, setCityName] = useState('');

  let [result, setResult] = useState([]);
  let updateCityName = (event) => {
    let inputValue = event.target.value;

    setCityName(inputValue);
    // inputValue.reset();
  };
  console.log(cityName);

  let getData = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4cfb30d1994548e96db40e91ed852739&units=metric`
      )
      .then((res) => {
        let finalResult = [...result, res.data];
        setResult(finalResult);
        console.log(finalResult);
      });
  };

  return (
    <div className="w-[100%] h-screen bg-[#88caef]">
      <div className="max-w-[1320px] mx-auto py-6">
        <h1 className="text-[40px] font-bold">Simple Weather App</h1>
        <form className="flex max-w-[700px] my-6" onSubmit={getData}>
          <input
            type="text"
            value={cityName}
            className="basis-[70%] h-[50px] px-4 capitalize"
            onChange={updateCityName}
          />
          <button type="submit" className=" basis-[30%] bg-yellow-300">
            Save
          </button>
        </form>
        <div className="flex gap-3 flex-wrap">
          {result.length < 1 ? (
            <div className="p-3 bg-white basis-[32%]">
              <h2 className="font-bold">No Record Found</h2>
            </div>
          ) : (
            result.map((data, index) => (
              <div className="p-3 bg-white basis-[32%]" key={index}>
                <h2 className="font-bold">
                  {data.name}, {data.sys.country}
                </h2>
                <h2 className="font-bold">{data.main.temp}</h2>
                <img
                  src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt=""
                />
                <p>{data.weather[0].description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
