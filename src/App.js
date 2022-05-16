// useState => allows you to have state variables in functional components. In React you never want to modify a state variable, always make a copy with the ... operator
// useRef = allows us to reference elements to our html.
// useEffect => allows you to perform side effects in your components.
import React, { useState, useRef, useEffect } from "react";
import Todolist from "./Todolist";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

// First place to start is at the app.js this is the root of your application
function App() {
  const [todos, setTodos] = useState([])
  const todoNameref = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem
    (LOCAL_STORAGE_KEY))

    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))

  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e){
    const name = todoNameref.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })    
    todoNameref.current.value = null

  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
       
      <Todolist todos = {todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameref} type='text' />
      <button onClick = {handleAddTodo}>Add Todo</button>
      <button onClick = {handleClearTodos}> Clear Complete</button>
      <div> {todos.filter(todo => !todo.complete).length} Left to do</div>
    </>
  )
  
  
}

export default App;
