import React from "react";
import "./Input.css";

const Input = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="search todo" className="todo-text" />
    </div>
  );
};

export default Input;
