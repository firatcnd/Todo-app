import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import Todoliste from "./components/todoliste";
import _uniqueId from 'lodash/uniqueId';

function App() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {

    localStorage.setItem("todos", JSON.stringify(todos));

  }, [todos]);
 // todo seçme
    
    const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id != id))
    }

    const checkTodo = (id) => {
      setTodos(todos.map((todo) => {
        if (todo.id ==id) todo.isCompleted = !todo.isCompleted;
        console.log(todo.isCompleted);
        return todo;
      }
      ))
    };

  // todo eklemek için.

  const addTodo= (text) => {
    const newTodo = {
      id : _uniqueId('prefix-'),
      title: text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div className="container">
      <Form addTodo={addTodo}/>
      <Todoliste todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  );
}

export default App;
