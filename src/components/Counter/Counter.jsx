/* eslint-disable no-unused-vars */
import React from "react";
import { useCounter } from "../../hooks/useCounter";

function Counter() {
  const { count, increment } = useCounter();
  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
