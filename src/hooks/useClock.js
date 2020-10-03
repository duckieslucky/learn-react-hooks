//my simple custom hook
import React, { useEffect, useState } from "react";

function getTimeString(date) {
  if (!date) date = new Date();
  let h = `0${date.getHours()}`.slice(-2);
  let m = `0${date.getMinutes()}`.slice(-2);
  let s = `0${date.getSeconds()}`.slice(-2);
  return `${h}:${m}:${s}`;
}

const useClock = () => {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      let res = getTimeString(null);
      setTimeString(res);
    }, 1000);

    return () => {
      console.log("unmount timer");
      clearInterval(timer);
    };
  }, []);

  return { timeString };
};

// useClock.propTypes = {

// };

export default useClock;
