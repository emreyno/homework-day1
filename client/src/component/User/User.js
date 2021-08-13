import React, { useState } from 'react';


const User = (props) => {
  
  const [state, setState] = useState({
    user: 'Justin Dimagiba',
  });


  const changeInputHandler = (event) => {
    setState({
      user: event.target.value,
    });
  };

  return (
    <div className="User">
      <input
        type="text"
        onChange={changeInputHandler}
        value={state.user}
      ></input>
      <h3>These tasks are for {state.user}</h3>
    </div>
  );
  
}

export default User;