import {createSignal} from "solid-js";

export const Count = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div>
      <button onClick={() => setCount(count() + 1)}>Click me</button>
      <span>You clicked me {count()} times</span>
    </div>
  );
}

export default Count;
