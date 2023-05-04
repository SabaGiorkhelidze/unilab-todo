import React from "react";
import Done from "../assets/Done.svg";
import Delete from "../assets/delete.png";
const Item = (props) => {
  return (
    <div className="py-2">
      <div className="flex justify-center items-center">
        <div className="mx-3  w-64 h-[20%] sm:h-12 sm:w-[50%] bg-black text-white flex flex-row justify-between px-4 sm:flex sm:justify-center sm:items-center">
          <div className="flex items-center w-1/2 sm:justify-start">
            <h1 className="text-xl">{props.todo}</h1>
          </div>

          <div className="flex flex-row justify-around items-center sm:px-10">
            <button className="mx-3 sm:mr-20">
              <img src={Done} alt="" className="w-6 h-6" />
            </button>
            <button className="mx-3 sm:ml-10" onClick={props.deleteTsk}>
              <img src={Delete} alt="" className="w-6 h-6" onClick={props.deleteTsk}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
