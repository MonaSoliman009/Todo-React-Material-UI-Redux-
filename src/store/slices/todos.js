import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push(action.payload);
        },
        removeTodo(state, action) {
            const Idx = state.findIndex((todo) => todo.id === action.payload);

            if (Idx > -1) {
                state.splice(Idx, 1);
            }




        },
        completeTodo(state, action) {
            state = state.map((todo) => {
                if (todo.id == action.payload) {

                    todo.completed = !todo.completed
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, completeTodo } = todoSlice.actions
export default todoSlice.reducer