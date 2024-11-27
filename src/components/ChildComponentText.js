import React, { useRef, useEffect } from "react";

function ChildComponentText({ data }) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h2>Child Component</h2>
      <p>Renders: {renderCount.current}</p>
      <p>Divided by Three: {data}</p>
    </div>
  );
}

export default React.memo(ChildComponentText);
