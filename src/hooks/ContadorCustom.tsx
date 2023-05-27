import { useState } from "react";

export function ContadorCustom() {
  var [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(++count);
  };

  const handleDecrement = () => {
    setCount(--count);
  };

  return (
    <div className="container">
      <h2>ContadorCustom value is: {count}</h2>
      <button
        type="button"
        className="btn btn-success"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}
