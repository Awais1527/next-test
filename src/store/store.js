
// import {  combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import {
//   LOGIN_SUCCESS,
//   SAVE_USER,
//   SET_CREDENTIALS,
//   ADD_TODO,
//   UPDATE_TODO,
//   DELETE_TODO,
//   SET_EDIT_INDEX,
// } from './actions'; 


// const initialAuthState = {
//   authenticated: false,
//   users: [],
//   credentials: { email: '', password: '' },
// };

// const initialTodoState = {
//   todos: [],
//   editIndex: null,
// };


// export const authReducer = (state = initialAuthState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return { ...state, authenticated: true };
//     case SAVE_USER:
//       return {
//         ...state,
//         users: [...state.users, action.payload],
//         authenticated: true,
//       };
//     case SET_CREDENTIALS:
//       return { ...state, credentials: action.payload };
//     default:
//       return state;
//   }
// };


// export const todoReducer = (state = initialTodoState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return { ...state, todos: [...state.todos, action.payload] };
//     case UPDATE_TODO:
//       const updatedTodos = state.todos.map((todo) =>
//         todo.id === action.payload.id ? { ...todo, ...action.payload.todo } : todo
//       );
//       return { ...state, todos: updatedTodos, editIndex: null };
//     case DELETE_TODO:
//       return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
//     case SET_EDIT_INDEX:
//       return { ...state, editIndex: action.payload };
//     default:
//       return state;
//   }
// };


// const rootReducer = combineReducers({
//   auth: authReducer,
//   todo: todoReducer,
// });


// const store = configureStore({
//   reducer: rootReducer,
// });

// export default store;
