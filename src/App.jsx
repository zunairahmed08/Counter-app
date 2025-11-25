import React, { useState } from "react";
import Counter from "./Counter";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // FUNCTIONS
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="container">
      <button className="dark-btn" onClick={toggleDark}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <h1>React Counter App</h1>

      <Counter
        countValue={count}
        onIncrease={increase}
        onDecrease={decrease}
        onReset={reset}
      />
    </div>
  );
}
