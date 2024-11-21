import React, { useRef } from "react";

function ChildComponent({ data }) {
  //Вставь тут счетчик рендеров на основе useRef

  return (
    <div>
      <h2>Child Component</h2>
      <p>Renders: {renderCount.current}</p>
      <p>Divided by Three: {data.dividedByThree}</p>
    </div>
  );
}

export default React.memo(ChildComponent);
