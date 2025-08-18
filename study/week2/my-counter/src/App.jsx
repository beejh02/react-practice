import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(c => c+1);
  const decrease = () => setCount(c => c-1);
  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter App</h1>
      <div>
        <p>counting: {count}</p>
      </div>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}