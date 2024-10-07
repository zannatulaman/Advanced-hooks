import React from 'react'

const ChildComp = React.memo((handleClick) => {
    console.log('ChildComp is rendered!');

  return (
    <div>
        <button onClick={handleClick}>Increment from ChildComp</button>
    </div>
  )
})

export default ChildComp

ChildComp.displayName = "ChildComp"