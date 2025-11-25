import React from "react";

export default function Counter({ countValue, onIncrease, onDecrease, onReset }) {
  return (
    <div className="counter-box">
      <h2>Counter Value: {countValue}</h2>

      <button className="btn btn-dec" onClick={onDecrease}>-</button>
      <button className="btn btn-inc" onClick={onIncrease}>+</button>

      <br />

      <button className="btn btn-reset" onClick={onReset}>Reset</button>
    </div>
  );
}
