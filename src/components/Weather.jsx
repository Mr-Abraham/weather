import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getData } from "./store/useWeather";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";

function Weather() {
  let storedrror;
  const [info, setInfo] = useState({
    name: "Loading......",
    temp: "273",
    wind: "Loading..",
    main: "Clear",
    humidity: "Loading..",
  });
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const icon = {
    Clear: "./cloud.png",
    Clouds: "./cloud.png",
    Haze: hour > 18 || hour < 6 ? "./haze_night.png" : "./haze_day.png",
    Mist: "./mist.png",
    Rain: "./rain.png",
    Sunny: "./sunny.png",
    Thunderstorm: "./thunder.png",
    Dust: "./dust.png",
    Snow: "./snow.png",
  };

  const navigate = useNavigate();
  const cityName = useSelector((state) => state.city);

  useEffect(() => {
    getWeather();
  }, []);
  const getWeather = async () => {
    try {
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
      storedrror = "";
    } catch (error) {
      setInfo("");
    }
  };

  if (info) {
    if (info.name == "Loading......") {
      return (
        <div className=" w-[90%] m-auto mt-32 rounded-xl px-1 max-md:w-full max-md:my-48">
          <h1 className="text-center text-8xl max-md:text-4xl font-semibold text-gray-500 leading-relaxed">
            Loading . . . 🚀
          </h1>
        </div>
      );
    }
    return (
      <div className="w-4/5 m-auto mt-20 rounded-xl px-1 max-md:w-full max-md:mt-16">
        <h1 className=" text-6xl max-md:text-4xl text-center font-extrabold text-gray-500 dark:text-white my-12 max-md:my-2">
          {info.name}
        </h1>
        <div className="p-2 md:p-5 rounded-lg max-md:m-0">
          <div className="flex justify-center items-center max-md:flex-col  p-2 m-2 gap-32 max-md:gap-4">
            <div>
              <img
                src={
                  Math.round(info.temp - 273) < 10
                    ? icon["Snow"]
                    : icon[info.main]
                }
                className="w-[200px] mb-16 max-md:mb-0"
                alt="weather condition image"
              />
            </div>
            <div>
              <h1 className="text-9xl relative dark:text-white text-gray-400 font-semibold">
                {Math.round(info.temp - 273)}
                <span className="absolute bottom-30 text-4xl"> O </span> C
              </h1>
              <p className="text-4xl font-semibold text-gray-400 dark:text-white my-5 text-center">
                {info.main}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-20 max-md:gap-10  max-md:mt-2 items-center p-2 mt-16">
            <div className="flex justify-between items-end gap-2">
              <FaDroplet className="text-7xl max-md:text-5xl text-gray-500 dark:text-white" />
              <h1 className="text-4xl max-md:text-2xl font-semibold text-gray-400 dark:text-white">
                {info.humidity}%
              </h1>
            </div>
            <div className="flex justify-between items-end gap-2">
              <FaWind className="text-7xl max-md:text-5xl text-gray-400 dark:text-white" />
              <h1 className="text-4xl max-md:text-2xl font-semibold text-gray-400 dark:text-white">
                {info.wind} km/h
              </h1>
            </div>
          </div>
        </div>
        <div className="m-auto w-52 my-10 ">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-gray-600 rounded-lg dark:bg-white dark:text-black hover:bg-black w-full text-white m-auto p-3"
          >
            Search Another City
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" w-[90%] m-auto mt-32 rounded-xl px-1 max-md:w-full max-md:my-48">
        <h1 className="text-center text-8xl max-md:text-4xl font-semibold text-gray-500 leading-relaxed">
          😵‍💫 Ooopss, <br /> City Was Not Found 🚫
        </h1>
        <div className="m-auto w-52 my-10 ">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-gray-600 rounded-lg dark:bg-white dark:text-black hover:bg-black w-full text-white p-3"
          >
            Search Another City
          </button>
        </div>
      </div>
    );
  }
}

export default Weather;
