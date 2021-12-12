import React, { useState, useEffect } from "react";
import "../styles/App.css";
const App = () => {
  const [time, setTime] = useState(new Date());
  function refreshTime() {
    setTime(new Date());
  }
  useEffect(() => {
    setTime(new Date());
    const timerID = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  return (
    <div id="main">
      <div className="date-time">{time.toLocaleString()}</div>
    </div>
  );
};

export default App;
