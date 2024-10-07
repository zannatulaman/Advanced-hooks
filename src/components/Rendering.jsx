import React, { useRef, useState } from 'react'
// import ChildrenRendering from './ChildrenRendering'

const Rendering = () => {
    const[value, setValue]=useState(0);
    const countRef = useRef(null);

    console.log('countRef', countRef);
    
    const handleClick = () => {
        countRef.current.value = countRef.current.value + 1;
        //  setValue(value + 1);
        
    }

    console.log('countRef', countRef.current);
  return (
    <div>
         <h1 ref={countRef}>{value}</h1>
         {/* <p>{countRef.current.value}</p> */}
        <button onClick={handleClick}>Increase Value</button>
        {/* <ChildrenRendering></ChildrenRendering> */}
    </div>
  )
}

export default Rendering