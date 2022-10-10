
import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
        
        <h5>UseRefI</h5>
        <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)}/>
        <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default UseRef;