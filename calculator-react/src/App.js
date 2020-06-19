import React from 'react';
import {useState} from 'react';

import Calculator from './Components/Calculator/component';
import Display from './Components/Calculator/Display';
import Buttons from './Components/Calculator/Buttons';

import './App.css';
import './Components/Calculator/component';

function App() {

  const [displayValue, setDisplayValue] = useState("0");
  const [operation, setOperation] = useState("");
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  return (
    <div className="App">
      <Display displayValue = {displayValue}/>
      <Buttons setDisplayValue = {setDisplayValue} displayValue = {displayValue} setOperation = {setOperation} operation = {operation}/>
    </div>
  );
}

export default App;
