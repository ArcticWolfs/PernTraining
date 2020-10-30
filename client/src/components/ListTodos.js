import React,{Fragment, useEffect, useState} from "react";

import EditTodo from "./EditTodos";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete todo function

    const deleteTodo = async(id) => {
        try 
        {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            
            //Permet d'afficher que les todos qui n'ont pas été supprimé comme ça pas besoin de rafraichir.

            setTodos(todos.filter(todo => todo.todo_id !== id));
        }
        catch (error) 
        {
            console.error(error.message)
        }
    }

    const getTodos = async() => {
        try 
        {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();

            setTodos(jsonData);
        }
        catch (error)
        {
            console.error(error.message)
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    console.log(todos);

    return (
    <Fragment>
    {" "}
    <table class="table mt-5 text-center">
        <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
    <tbody>
    {/*
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>
    */}
    {todos.map(todo => (
        <tr>
            <td>{todo.description}</td>
            <td>
                <EditTodo todo={todo}/>
            </td>
            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
    ))}
    </tbody>
  </table></Fragment>);
};

export default ListTodos;