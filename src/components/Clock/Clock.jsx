import React from "react";
import useClock from "../../hooks/useClock";

const Clock = (props) => {
  const { timeString } = useClock();
  return (
    <div className="clock-wrapper">
      <p className="clock">{timeString}</p>
    </div>
  );
};

// Clock.propTypes = {

// };

export default Clock;
