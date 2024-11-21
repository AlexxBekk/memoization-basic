import React, { useRef } from "react";

function SecondChildComponent({ onClick }) {
  //Вставь тут счетчик рендеров на основе useRef
  
  return (
    <div>
      <h2>Second Child Component</h2>
      <p>Renders: {renderCount.current}</p>
      <button onClick={onClick}>Log Lorem Ipsum</button>
    </div>
  );
}

export default React.memo(SecondChildComponent);
