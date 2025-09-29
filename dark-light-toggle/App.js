import React, { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => setDark(!dark);

  return (
    <div className={dark ? "dark" : "light"}>
      <h1>Dark/Light Theme Toggle</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
