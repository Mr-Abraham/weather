import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getData } from "./store/useWeather";
import { WiHumidity } from "react-icons/wi";

function Weather() {
  const [info, setInfo] = useState({
    name: "",
    temp: "",
    wind: "",
    main: "",
    humidity: "",
  });
  const navigate = useNavigate();
  const cityName = useSelector((state) => state.city);
  console.log(`weather component loaded with ::: ${cityName}`);

  useEffect(() => {
    getWeather();
  }, []);

  const getWeather = async () => {
    const raw = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=334033fe337936d83dcbcb77312f5a1e`
    );
    const response = await raw.json();
    setInfo({
      name: response.name,
      temp: response.main.temp,
      wind: response.wind.speed,
      main: response.weather[0].main,
      humidity: response.main.humidity,
    });
  };

  return (
    <div className="w-4/5 m-auto mt-8 dark:bg-white  bg-gray-100 shadow-lg rounded-xl px-1">
      <div className="p-2 md:p-5 rounded-lg">
        <div className="flex justify-between items-center border p-2 m-2">
          <div>ICon</div>
          <div>
            <h1>{info.temp}</h1>
            <p>{info.main}</p>
          </div>
        </div>
        <div className="flex justify-between items-center border p-2 m-2">
          <div>
            <h1>HUmidty</h1>
            <h2>{info.humidity}</h2>
          </div>
          <div>
            <h2>Air</h2>
            <h1>{info.wind}</h1>
          </div>
        </div>
      </div>
      <div className="border-red-500 border m-3">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="rounded-md bg-blue-500 text-white m-auto p-3"
        >
          Search Another City
        </button>
      </div>
    </div>
  );
}

export default Weather;
