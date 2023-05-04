import React from "react";
import Logo from "../assets/Group3.svg";
import { Link } from "react-router-dom";
const First = () => {
  return (
    <div className="text-white mt-10">
      <div className="flex flex-col justify-center items-center py-4">
        <div className="flex justify-center items-center flex-col max-w-[100%]">
          <img src={Logo} alt="" />
          <div className="flex justify-center items-center text-center max-w-full px-5">
            <h1 className="text-5xl my-3 self-center">
              Keep track of Daily Tasks in life
            </h1>
          </div>
        </div>
        <div className="mt-20">
          <Link to={"/user"}>
            <button className="w-[100%] px-20 text-xl py-2 h-[10%] bg-green-500">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;
