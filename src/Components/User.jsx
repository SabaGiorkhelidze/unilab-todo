import React, { useContext } from "react";
import { Link } from "react-router-dom";
import addPhoto from "../assets/addPhoto.svg";
import Context from "../Context/Context";
const User = () => {
  const { setPhoto, usernameSetter } = useContext(Context);
  return (
    <div>
      <div className="bg-white text-black my-10 mx-[10%] flex flex-col justify-center items-center sm:mx-[30%] py-10">
        <div className="flex justify-center items-center text-center">
          <h1 className="text-xl font-bold">Get Started</h1>
        </div>

        <div className="mt-7 flex flex-col justify-center items-center w-16 h-16 bg-gray-300 rounded-full p-3">
          <label htmlFor="input">
            <img
              src={addPhoto}
              alt="add Photo"
              className="w-12 h-12 cursor-pointer"
            />
          </label>
          <input
            type="file"
            accept="image/*"
            name="input"
            id="input"
            className="hidden
          "
            onChange={(e) => {
              setPhoto(e.target.files[0]);
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-center py-10 px-3">
          <div className="flex justify-center items-center text-center"></div>
          <input
            type="text"
            placeholder="Your Name"
            className="w-[100%]  mt-4 bg-gray-200 sm:w-64"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div className="mt-20">
          <Link to={"/Tasks"}>
            <button className="w-[100%] px-16 text-xl py-2 h-[10%] bg-green-500">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
