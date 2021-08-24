import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { clearTask } from '../../redux/reducers/todo-reducer';


const  ClearTask  = memo(() => {

const dispatch = useDispatch();

const clearTaskHandler = () => {
    dispatch(clearTask())
};

  return (
    <button className="clearBtn" onClick={clearTaskHandler}>
      Clear Tasks
    </button>
  );
});

export default ClearTask;
