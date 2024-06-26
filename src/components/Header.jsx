import React, { useContext, useState } from "react";
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { lightMode } from "./store/useWeather";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const darkmodeAllowed = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  function changetheme() {
    document.body.classList.toggle("dark");
    dispatch(lightMode());
  }
  return (
    <div>
      <header className="flex justify-between w-[80%] max-md:w-full items-center m-auto px-10 relative top-8">
        <Link to={"/"}>
          <img
            src="weather.png"
            alt="image"
            className="md:w-[50px] max-md:w-10"
          />
        </Link>
        <button onClick={changetheme}>
          {darkmodeAllowed ? (
            <IoMoonSharp className="text-5xl text-blue-900 max-md:text-4xl" />
          ) : (
            <IoSunny className="text-5xl text-yellow-400 max-md:text-4xl" />
          )}
        </button>
      </header>
    </div>
  );
}

export default Header;
