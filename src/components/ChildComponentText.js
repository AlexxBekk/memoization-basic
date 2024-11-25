import React, { useRef, useEffect } from "react";

function ChildComponentText({ dividedByThree }) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h2>Child Component</h2>
      <p>Renders: {renderCount.current}</p>
      <p>Divided by Three: {dividedByThree}</p>
    </div>
  );
}

export default React.memo(ChildComponentText);
