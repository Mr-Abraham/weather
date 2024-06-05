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
    dispatch(getData(city));
    navigate("/weather");
  };

  return (
    <div className="w-4/5 m-auto mt-8 dark:bg-white  bg-gray-100 shadow-lg rounded-xl px-1">
      <div className="p-2 md:p-5 rounded-lg">
        <form
          className="flex justify-between items-center gap-2"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            autoFocus
            className="w-[100%] p-1 text-2xl font-extralight outline-none md:p-2 bg-transparent dark:text-black dark:caret-white"
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
