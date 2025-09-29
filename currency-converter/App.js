import React, { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [result, setResult] = useState(null);

  const convert = async () => {
    // Get your own API key from https://exchangerate.host/ or any free API
    const res = await fetch(
      `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    );
    const data = await res.json();
    setResult(data.result.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} />
      <select value={fromCurrency} onChange={(e)=>setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PKR">PKR</option>
      </select>
      <select value={toCurrency} onChange={(e)=>setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="PKR">PKR</option>
      </select>
      <button onClick={convert}>Convert</button>
      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
