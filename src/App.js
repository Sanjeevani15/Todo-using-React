import logo from "./logo.svg";
import React,{useEffect, useState} from 'react';
// import React,{useState,useEffect} from 'react';
// we use useState hooks to keep track of the user input
import "./App.css";
import Header from "./components/Header.js";
import Form from "./components/Form";
import TodosList from "./components/TodosList";

const App = () => {

//now we store our todolist item in our local storage
// const initialState=JSON.parse(localStorage.getItem("todos"))||[];

  const[input,setInput]=useState("");
  const[todos,setTodos]=useState([]);
  // const[todos,setTodos]=useState(initialState);
  const[editTodo,setEditTodo]=useState(null);
  
  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos));

  // },[todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>

        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo} 
          setEditTodo={setEditTodo}
          
          />

          <div>
        <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
          </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default App;
