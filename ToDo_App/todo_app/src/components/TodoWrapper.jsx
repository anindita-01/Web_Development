import React from "react";
import TodoForm from "./TodoForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    // console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const doneTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

    console.log("done");
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          task={todo}
          key={index}
          deleteTodo={deleteTodo}
          doneTask={doneTask}
        />
      ))}
    </>
  );
};

export default TodoWrapper;
