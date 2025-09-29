import React, { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pass);
  };

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        min="4"
        max="32"
      />
      <button onClick={generatePassword}>Generate</button>
      <p>{password}</p>
    </div>
  );
}

export default App;
