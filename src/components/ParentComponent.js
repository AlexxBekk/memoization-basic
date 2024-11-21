import React, { useState, useEffect, useMemo, useCallback } from "react";
import ChildComponentText from "./ChildComponentText";
import ChildComponentButton from "./ChildComponentButton";

function ParentComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const dividedByThree = Math.floor(seconds / 3)

  const data = { 
    dividedByThree
  }

  const staticText = "Lorem ipsum dolor sit amet"

  const handleClick = () => console.log(staticText);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Seconds: {seconds}</p>
      <ChildComponentText data={data} />
      <ChildComponentButton onClick={handleClick} />
    </div>
  );
}

export default ParentComponent;
