// ParentComponent.js
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent count={count} />
    </div>
  );
};

export default ParentComponent;
