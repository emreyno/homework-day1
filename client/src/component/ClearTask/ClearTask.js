import React, { memo } from 'react';


const  ClearTask  = memo((props) => {
  return (
    <button className="clearBtn" onClick={props.clicked}>
      Clear Tasks
    </button>
  );
});

export default ClearTask;
