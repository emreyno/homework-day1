import { createSlice, nanoid } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: [
            {id: 1, title: "Something", completed: false},
            {id: 2, title: "SomethingElse", completed: false},
            {id: 3, title: "Something Else Else", completed: true},
        ],
    },
    reducers: {
        addTask: (state, action) => {

                const newTask = {
                    id: nanoid(),
                    title: action.payload,
                    completed: false,
                  };
                state.tasks.unshift(newTask)

        },
        doneTask:(state,action)=>{
           const index = state.tasks.findIndex(task=> task.title === action.payload)

           state.tasks[index].completed = true;

        },
        removeTask:(state,action)=>{

            const index = state.tasks.findIndex(task=> task.title === action.payload)
            state.tasks.splice(index,1)
            

        },


        clearTask:(state)=>{
            state.tasks=[];
        }
    }
});

export const { addTask,clearTask,doneTask,removeTask } = todoSlice.actions;
export default todoSlice.reducer;