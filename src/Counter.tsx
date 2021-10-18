import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <>
     <h1>{count}</h1>
     <button onClick={onIncrease}>add</button> 
     <button onClick={onDecrease}>sub</button> 
    </>
  );
}

export default Counter;
