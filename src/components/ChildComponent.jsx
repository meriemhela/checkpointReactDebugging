// ChildComponent.js
import React from "react";

const ChildComponent = ({ count }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
    </div>
  );
};

export default ChildComponent;
