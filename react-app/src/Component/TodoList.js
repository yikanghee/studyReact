import React, { useState } from "react";


    const TodoList = () => {
    
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo === "") {
            return
        }
        setTodos((currentArray) => [todo, ...currentArray])
        setTodo("");
        console.log(setTodos)
    }

    return (
        <div>
        <h1>TODOLIST</h1>
        <form 
            onSubmit={onSubmit}
        >
        <input
            placeholder="Write todo"
            value={todo}
            onChange={onChange}
            type="text"
        >
        </input>
        <button>Click me</button>
        </form>
        <hr />
        <ul>
        {todos.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        </div>
    );
}

export default TodoList
