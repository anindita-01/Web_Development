import React from "react";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //By default, a form submission reloads the page. Using e.preventDefault(); stops that.

    addTodo(value);
    setValue(""); // Clears input after submission
  };

  return (
    <>
      <div className="text-4xl flex justify-center items-center text-white tracking-tight ">
        <p>Schedule your tasks here</p>
      </div>

      <form
        className="flex  w-full justify-center gap-4 items-center p-2 m-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={value}
          placeholder="Add a new task..."
          className="w-1/2 p-3 m-2 border bg-transparent text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <button
          className="bg-gray-500 text-white px-10 py-3 rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!value.trim()}
        >
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
