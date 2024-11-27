import React, { useCallback, useEffect, useMemo, useState } from "react";
import ChildComponentText from "./ChildComponentText";
import ChildComponentButton from "./ChildComponentButton";

function ParentComponent() {
  const [seconds, setSeconds] = useState(0);
  /* до рефакторинга рендер каждого ребенка происходит каждую секунду,
  т.к. меняется состояние родителя (seconds),
  что вызывает пересоздание функций, объектов и дочерних компонентов,
  даже если их свойства не изменились */

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [setSeconds]);

  /* для оптимизации вычислений используется useMemo,
  который запоминает результат вычислений между рендерингами
  и рендерит ребенка при seconds кратным трем */

  const dividedByThree = Math.floor(seconds / 3);
  const data = useMemo(() => ({ dividedByThree }), [seconds]);

  /* для оптимизации обработчика кликов для кнопки используется useCallback,
   который сохраняет функцию между рендерами,
   что не позволяет рендериться ребенку при изменении стейта родителя
   без изменения его свойств */

  const staticText = "Lorem ipsum dolor sit amet";
  const handleClick = useCallback(() => console.log(staticText), []);

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
