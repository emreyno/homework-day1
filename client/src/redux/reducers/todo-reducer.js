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

            state.tasks.push(newTask)
        }
    }
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;