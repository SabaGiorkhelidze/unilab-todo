import React from "react";

const Input = (props) => {
  return (
    <div className="py-10 flex justify-center items-center">
      <div className="flex items-center flex-row">
        <input
          type="text"
          placeholder="Your Name"
          className="w-48 h-10 bg-gray-200"
          onChange={props.onChange}
          value={props.value}
        />
        <button className="bg-green-500 h-10 px-2" onClick={props.onClick}>
          add Task
        </button>
      </div>
    </div>
  );
};

export default Input;
