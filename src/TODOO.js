import React, { useState } from "react";
import './TODOO.css';

function TODOO() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTodo = () => {
      setTodos([...todos, inputValue]);
      setInputValue("");
    };
  
    const handleRemoveTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };
  
    return (
      <div className="todo container">
        <h1 className="text-center mt-5">To-Do List</h1>
        <div className="input mt-5">
          <input
            type="text"
            placeholder="Enter a task"
            value={inputValue}
            onChange={handleInputChange}
            className="form-control col-8 col-md-6 mr-3"
          />
          <button onClick={handleAddTodo} className="btn btn-primary">
            Add
          </button>
        </div>
        <ul className="mt-5">
          {todos.map((todo, index) => (
            <li key={index} className="d-flex align-items-center">
              {todo}
              <button onClick={() => handleRemoveTodo(index)} className="btn btn-danger ml-3">
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  




export default TODOO;
