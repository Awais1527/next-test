// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SAVE_USER = 'SAVE_USER';
export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const SET_EDIT_INDEX = 'SET_EDIT_INDEX';

// Action Creators for Authentication
export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
});

export const setCredentials = (credentials) => ({
  type: SET_CREDENTIALS,
  payload: credentials,
});

// Action Creators for Todos
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  payload: { id, todo },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const setEditIndex = (index) => ({
  type: SET_EDIT_INDEX,
  payload: index,
});
