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
      <form
        className="flex justify-center gap-4 items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={value}
          placeholder="Add a new task..."
          className="w-1/2 p-3 border bg-transparent text-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={handleChange}
        />

        <button className="bg-gray-500 text-white px-5 py-3 rounded-lg hover:bg-gray-700 transition">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TodoForm;
