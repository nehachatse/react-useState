import { useState } from "react";
import TodoInput from "./TodoInput.jsx";
import TodoItems from "./TodoItems.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const handleTodoList = (title) => {
    const payload = {
      title: title,
      status: false,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };
  console.log(todos);

  const handleDlt = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    const updateTodo = todos.map((item) => item.id === id ? {...item, status: !item.status} : item)
    setTodos(updateTodo);
  }
  

  return (
    <>
      <h1> TODO </h1>
      <TodoInput handleTodoList={handleTodoList} />
      {todos.map((todo) => (
        <TodoItems
          key={todo.id}
          id={todo.id}
          title={todo.title}
          status={todo.status}
          handleDlt={handleDlt}
          handleToggle={handleToggle}
        />
      ))}
    </>
  );
}
