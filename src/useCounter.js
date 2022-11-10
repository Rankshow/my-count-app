import React, { useState } from 'react';


 const UseCounter = () => {
    const [text, setText] = useState(0);

    const reset = () => {
        setText(0)
    };
  return (
   <>
     <div className='counter-head'>
        <h1>Regular Counter</h1>
        <h2>{text}</h2>
        <button className='btn' onClick={() => setText (text + 1)}>Increase</button>
        <button className='btn' onClick={reset}>Reset</button>
        <button className='btn' onClick={() => setText (text - 1)}>Decrease</button>
    </div>
   </>
  )
}

export default UseCounter;