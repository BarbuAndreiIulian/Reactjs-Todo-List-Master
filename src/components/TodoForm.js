import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");

    e.target.value = "";
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className="todo-input"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a Todo "
      />

      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
}
