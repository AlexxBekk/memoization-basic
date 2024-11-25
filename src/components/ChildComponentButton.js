import React, { useEffect, useRef } from "react";

function ChildComponentButton({ onClick }) {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  return (
    <div>
      <h2>Second Child Component</h2>
      <p>Renders: {renderCount.current}</p>
      <button onClick={onClick}>Log Lorem Ipsum</button>
    </div>
  );
}

export default React.memo(ChildComponentButton);
