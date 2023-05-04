import React from "react";
import Item from "./Item";
import Input from "./Input";
import { useContext } from "react";
import Context from "../Context/Context";
const Tasks = () => {
  const {
    doneTask,
    inputVal,
    addItem,
    itemsList,
    inputValue,
    deleteTask,
    photo,
    username
  } = useContext(Context);
  return (
    <div
      className="overflow-y-hidden"
      style={{ height: "100vh", color: "black" }}
    >
      <nav className="flex flex-row justify-around ">
        <div className=" px-10 py-3 items-start text-start">
          <h1 className="text-3xl text-white">To Do</h1>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h1 className=" sm:mx-3 sm:text-white">{username}</h1>
          <div className="ml-7">
          {photo && (
              <img
                className="rounded-full  h-12 w-12"
                src={URL.createObjectURL(photo)}
              />
            )}
          </div>
        </div>
      </nav>

      <div className="bg-white min-h-[100%] ">
        <div>
          <Input onChange={inputVal} onClick={addItem} value={inputValue} />
        </div>

        <div>
          {itemsList.map((listItem) => {
            return (
              <Item
                key={listItem.id}
                todo={listItem.todo}
                deleteTsk={deleteTask}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
