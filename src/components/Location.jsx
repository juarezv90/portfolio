import React, { useEffect, useState } from "react";
import "../scss/location.scss";

function Location() {
  const [time, setTime] = useState(new Date());
  const [available, setavailable] = useState(true);

  useEffect(() => {
    if (time.getHours() > 17 || time.getHours() < 8 || time.getDay() == 0 || time.getDay() == 6) {
      setavailable(false);
    } else {
      setavailable(true);
    }
  }, [time]);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="location">
      <p>Available for Freelance</p>
      <p>Located: Dutchess County, New York</p>
      <p>
        NY Time:{" "}
        <span style={{ color: available ? "limegreen" : "red" }}>
          {time.toLocaleTimeString("en-US", { timeZone: "America/New_York" })}{" ET "}
        </span>
      </p>
      <p>
        <span style={{ color: available ? "limegreen" : "red"}}>
          {available ? 'Available': 'Not Available'}
        </span>
      </p>
    </div>
  );
}

export default Location;
