// Use state hook
import React, { useState } from "react";
import Todolist from "./Todolist";


// First place to start is at the app.js this is the root of your application
function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
  // can only return one thing
  return (
    <>
      // Props      
      <Todolist todos = {todos}/>
      <input type='text' />
      <button>Add Todo</button>
      <button> Clear Complete</button>
      <div> 0 left to do</div>
    </>
  )
  
  
}

export default App;
