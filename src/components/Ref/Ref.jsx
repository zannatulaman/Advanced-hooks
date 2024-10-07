import React, { useRef } from 'react'

const Ref = () => {
    
    const inputRef = useRef(null);
    console.log('inputRef', inputRef);

    const handleFocus = () =>{
        inputRef.current.focus()
    }



  return (
    <div>
        <input type="text" placeholder='Type something...' ref={inputRef}/>
          <br />
        <button onClick={handleFocus}>Focus The Button</button>
    </div>
  )
}

export default Ref
