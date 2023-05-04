import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import First from "./Components/First";
import User from "./Components/User";
import Tasks from "./Components/Tasks";
import Context from "./Context/Context";

function App() {
  const [itemsList, setItemsList] = useState(
    JSON.parse(localStorage.getItem("itemsList")) || []
  );
  const [todo, setTodo] = useState({
    id: 0,
    todo: "",
    done: false,
  });
  const [inputValue, setInputValue] = useState("");
  const [photo, setPhoto] = useState("");
  const [username, setUsername] = useState("");
  const doneTask = () => {
    setTodo({
      ...todo,
      done: true,
    });
  };

  const inputVal = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    const newTodo = {
      ...todo,
      todo: inputValue,
      id: itemsList.length,
    };
    setItemsList([...itemsList, newTodo]);
    setInputValue("");
  };

  const deleteTask = (id) => {
    const updatedList = itemsList.filter((item) => item.id !== id);
    setItemsList(updatedList);
    localStorage.setItem("itemsList", JSON.stringify(updatedList));
  };

  useEffect(() => {
    localStorage.setItem("itemsList", JSON.stringify(itemsList));
  }, [itemsList]);

  return (
    <div className="">
      <Context.Provider
        value={{
          doneTask,
          inputVal,
          addItem,
          itemsList,
          inputValue,
          deleteTask,
          setPhoto,
          photo,
          username,
          setUsername
        }}
      >
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/user" element={<User />} />
          <Route path="/Tasks" element={<Tasks />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;