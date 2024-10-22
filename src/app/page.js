"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCredentials,
  loginSuccess,
  saveUser,
  addTodo,
  updateTodo,
  deleteTodo,
  setEditIndex,
} from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const {
    users,
    credentials,
    authenticated,
  } = useSelector((state) => state.auth);
  const { todos, editIndex } = useSelector((state) => state.todo);

  const [todo, setTodo] = React.useState("");

  // Handle input changes for login form
  const handleLoginChange = (e) => {
    dispatch(setCredentials({ ...credentials, [e.target.name]: e.target.value }));
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const userExists = users.some(
      (user) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );

    if (userExists) {
      dispatch(loginSuccess());
      alert("Login successful!");
    } else {
      dispatch(saveUser(credentials));
      alert("User saved successfully!");
    }

    dispatch(setCredentials({ email: "", password: "" }));
  };

  // Handle input change for to-dos
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  // Handle to-do form submission (Create or Update)
  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      dispatch(updateTodo(editIndex, { id: editIndex, text: todo })); // Ensure todo has an ID
      setTodo("");
      dispatch(setEditIndex(null)); // Reset edit index after update
    } else {
      if (todo.trim()) {
        dispatch(addTodo({ id: Date.now(), text: todo })); // Create a new todo with a unique ID
        setTodo(""); // Clear input after adding
      } else {
        alert("Please enter a task.");
      }
    }
  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
    alert("Todo deleted successfully!");
  };

  // Handle editing a todo
  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((task) => task.id === id);
    setTodo(todoToEdit.text);
    dispatch(setEditIndex(id)); // Set edit index for the current todo
  };

  return (
    <div>
      {!authenticated ? (
        // Display login form if not authenticated
        <div style={{ width: "100%", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "40px" }}>Login</h2>
          <form
            onSubmit={handleLoginSubmit}
            style={{
              backgroundColor: "black",
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <div style={{ display: "flex" }}>
              <h1 style={{ marginTop: "15px", marginRight: "10px" }}>Email:</h1>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleLoginChange}
                style={{
                  display: "inline-block",
                  borderRadius: "5px",
                  display: "block",
                  padding: "10px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  width: "30%",
                  color: "black",
                  backgroundColor: "#696969",
                }}
                required
              />
              <h1 style={{ marginTop: "15px", marginLeft: "10px" }}>Password:</h1>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleLoginChange}
                style={{
                  display: "inline-block",
                  borderRadius: "5px",
                  display: "block",
                  padding: "10px",
                  marginTop: "5px",
                  marginBottom: "10px",
                  marginLeft: "10px",
                  width: "30%",
                  color: "black",
                  backgroundColor: "#696969",
                }}
                required
              />
              <button
                type="submit"
                style={{
                  height: "40px",
                  width: "100px",
                  marginTop: "6px",
                  marginLeft: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#484848",
                  color: "yellow",
                  borderRadius: "4px",
                  cursor: "pointer",
                  border: "1px solid yellow ",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h1 style={{ fontSize: "50px", color: "yellow", textAlign: "center" }}>
            Shopping List
          </h1>
          <form
            onSubmit={handleTodoSubmit}
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="text"
              placeholder="Enter a task"
              value={todo}
              onChange={handleTodoChange}
              style={{
                padding: "10px",
                width: "300px",
                marginRight: "10px",
                color: "black",
              }}
              required
            />
            <button
              type="submit"
              style={{
                marginTop: "6px",
                marginLeft: "10px",
                padding: "10px 20px",
                backgroundColor: "#484848",
                color: "yellow",
                borderRadius: "4px",
                cursor: "pointer",
                border: "1px solid yellow ",
                textAlign: "center",
              }}
            >
              {editIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </form>

          <ul>
            {todos.map((task) => (
              <li
                key={task.id}
                style={{
                  padding: "10px 0",
                  listStyleType: "none",
                  borderBottom: "1px solid yellow",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{task.text}</span>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => handleEditTodo(task.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#484848",
                      color: "yellow",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: "1px solid yellow",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTodo(task.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "yellow",
                      cursor: "pointer",
                      fontSize: "18px",
                      fontWeight: "bold",
                      padding: "0",
                    }}
                    aria-label="Delete"
                  >
                    &#10006;
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
