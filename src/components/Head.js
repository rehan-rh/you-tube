import React from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://www.flowmatters.com/wp-content/uploads/2022/09/Hamburger-menu-1024x512.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_KRtbf-83xJNHBd-E6LBkyBWwe1_pbqv9pA&s"
          />
        </a>
      </div>
      <div className="col-span-10 px-11">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://cdn-icons-png.freepik.com/512/7718/7718888.png"
        />
      </div>
    </div>
  );
};

export default Head;
