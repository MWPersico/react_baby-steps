import React from "react";
import {useState} from "react";
import './index.css';

export function Counter(){
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>increase</button>
      <button onClick={()=>setCounter(counter-1)}>decrease</button>
      <button onClick={()=>setCounter(0)}>reset</button>
    </div>
  );
}