import React, { useEffect, useState } from "react";

function Counter({ value }) {

  const [count, setCount] = useState(0);

  useEffect(() => {

    let start = 0;

    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / value));

    const timer = setInterval(() => {

      start += 1;
      setCount(start);

      if (start === value) {
        clearInterval(timer);
      }

    }, stepTime);

    return () => clearInterval(timer);

  }, [value]);

  return <h3>{count}+</h3>;
}

export default Counter;