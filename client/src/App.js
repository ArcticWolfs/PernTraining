import React, { Fragment } from "react";
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import listTodos from "./components/ListTodos";
import EditTodos from "./components/EditTodos";
import ListTodos from "./components/ListTodos";


function App() 
{
  return(
    <Fragment>
      <div className="container">
        <InputTodo/>
        <ListTodos/>
      </div>
    </Fragment>
  );
}

export default App;
