import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import "./App.css";

function App() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleOperand1Change = (e) => {
    setOperand1(e.target.value);
  };

  const handleOperand2Change = (e) => {
    setOperand2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const Calculate = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseInt(operand1) + parseInt(operand2);
        break;
      case "-":
        result = parseInt(operand1) - parseInt(operand2);
        break;
      case "*":
        result = parseInt(operand1) * parseInt(operand2);
        break;
      case "/":
        result = parseInt(operand1) / parseInt(operand2);
        break;
      default:
        result = "";
    }
    setResult(result);
  
  };



  return (
    <div className="calculator">
      <div className="screen">{result}</div>
      <div className="input">
        <input
          type="number"
          placeholder="Enter operand 1"
          value={operand1}
          onChange={handleOperand1Change}
        />
        <select value={operator} onChange={handleOperatorChange}>
          <option value="">Select operator</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Enter operand 2"
          value={operand2}
          onChange={handleOperand2Change}
        />
      </div>
      <button className="equal" onClick={Calculate}>
        Calculate
      </button>
    </div>
  );
}


export default App;
