"use client";

import React, { useState} from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [authenticated, setAuthenticated] = useState(false);
  const [todo, setTodo] = useState(""); // Single todo item
  const [todos, setTodos] = useState([]); // Array of todo items
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes for login form
  const handleLoginChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
      setAuthenticated(true);
      alert("Login successful!");
    } else {
      setUsers([...users, credentials]);
      setAuthenticated(true);
      alert("User Saved successfully!");
    }

    setCredentials({ email: "", password: "" });
  };

  // Handle input change for to-dos
  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  // Handle to-do form submission (Create or Update)
  const handleTodoSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = todo;
      setTodos(updatedTodos);
      setEditIndex(null);
      alert("Todo updated successfully!");
    } else {
      if (todo.trim()) {
        setTodos([...todos, todo]);
      } else {
        alert("Please Enter a Task.");
      }
    }

    setTodo("");
  };

  // Handle deleting a todo
  const handleDeleteTodo = (index) => {
    const filteredTodos = todos.filter((_, i) => i !== index);
    setTodos(filteredTodos);
    alert("Todo deleted successfully!");
  };

  // Handle editing a todo
  const handleEditTodo = (index) => {
    setTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div>
      {!authenticated ? (
     
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
              <h1 style={{ marginTop: "15px", marginLeft: "10px" }}>
                Password:
              </h1>
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
                  textAlign: "centre",
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
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        {/* Left Div */}
        <div style={{
            flex: 1, 
            display: 'flex',
            justifyContent: 'center',
         
            backgroundColor: 'black',
            padding: '20px',
            boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        }}>
         
            <div style={{
                width: '80%', 
                display: 'flex',
                flexDirection: 'column', 
                alignItems: 'center',
            }}>
                <h1 style={{ fontSize: "50px", color: "white", textAlign: "center" }}>
                    <strong>Shopping List</strong>
                </h1>
                <form
                    onSubmit={handleTodoSubmit}
                    style={{
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: '100%', 
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter a task"
                        value={todo}
                        onChange={handleTodoChange}
                        style={{
                            padding: "10px",
                            width: "70%", 
                            marginRight: "10px",
                            color: "black",
                        }}
                        required
                    />
                    <button
                        type="submit"
                        style={{
                            marginLeft: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#484848",
                            color: "yellow",
                            borderRadius: "4px",
                            cursor: "pointer",
                            border: "1px solid yellow",
                            textAlign: "center",
                        }}
                    >
                        {editIndex !== null ? "Update Task" : "Add Task"}
                    </button>
                </form>
    
                <ul style={{ padding: 0, width: '100%' }}> 
                    {todos.map((task, index) => (
                        <li
                            key={index}
                            style={{
                                padding: "10px 0",
                                listStyleType: "none",
                                borderBottom: "1px solid yellow",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <span>{task}</span>
    
                            <div style={{ display: "flex", gap: "10px" }}>
                                <button
                                    onClick={() => handleEditTodo(index)}
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
                                    onClick={() => handleDeleteTodo(index)}
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
        </div>
    
        {/* Right Div */}
        <div style={{
           flex: 1,
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           backgroundImage: `url('/pp.png')`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat',
           padding: '20px',
           boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
        }}>
            <h1 style={{ color: 'green' }}>Right Side Content</h1>
        </div>
    </div>
    
    
        
      )}
    </div>
  );
}
