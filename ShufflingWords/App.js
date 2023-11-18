import "./styles.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [name, setName] = useState("EARN");
  const names = ["EARN", "GROW", "GIVE"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % names.length);
      setName(names[index]);
    }, 1000);
    return () => clearInterval(interval);
  }, [index, names]);

  return (
    <div className="App">
      <h1>Subscribe to channel</h1>
      <h2>Lets {name} money</h2>
    </div>
  );
};

export default App;
