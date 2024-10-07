import React, { useCallback, useState } from 'react'
import ChildComp from './ChildComp';

const Callback = () => {
    const[count, setCount]=useState(0);
    
    
    
    const handleClick = useCallback(() => {
        setCount((prev) => prev +1)
           
    }, [])

    // const handleClick = () => {
    //    setCount((prev) => prev + 1);
    // }


  return (
    <div>
          <h1>Count: {count}</h1>
          <button onClick={handleClick}>Increment</button>
          <ChildComp handleClick = {handleClick}/>
    </div>
  )
}

export default Callback