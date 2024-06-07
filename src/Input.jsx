import React, { useEffect, useRef, useState } from "react";
import { MdLocationSearching } from "react-icons/md";
import { useNavigate } from "react-router";
import { getData } from "./components/store/useWeather";
import { useDispatch } from "react-redux";

function Input() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city == "") {
      return;
    }
    dispatch(getData(city));
    navigate("/weather");
  };

  return (
    <div className="w-[50%] m-auto mt-80 max-md:mb-52  max-lg:w-[70%]  dark:bg-white rounded-xl px-1">
      <div className="p-2 md:p-5 rounded-lg border border-gray-200">
        <form
          className="flex justify-between items-center gap-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Enter City Name"
            autoFocus
            className="w-[100%] p-1 text-2xl font-extralight outline-none md:p-2 bg-transparent dark:text-black"
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleSearch}>
            <MdLocationSearching className="text-4xl text-slate-600 dark:text-black" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Input;
