import React, { useReducer } from 'react'


const formReducer = (state, action) => {
        switch(action.type) {
            case "changeInput" :
                return {...state, [action.field] : action.value}
        }
}

const Reducer = () => {
    const intialValue = {name: "", email: ""};
      const [state, dispatch]= useReducer(formReducer, intialValue);

   
      const handleChange = (e) => {
           dispatch({
               type: "changeInput",
               field: e.target.name,
               value: e.target.value,
           });   
      };

      const {name, email} = state
     
      console.log('State', state);
    
  return (
    <div>
        <input type="text" 
         value={name}
         name='name'
         placeholder='Enter your name'
         onChange={handleChange}
        />

        <br />

        <input type="email" 
         value={email}
         name='email'
         placeholder='Enter your email'
         onChange={handleChange}
        />
    </div>
  )
}

export default Reducer