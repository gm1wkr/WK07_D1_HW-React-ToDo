import './App.css';
import React, {useState} from 'react';



function App() {

  const [todos, setTodos] = useState([
    { name: "Buy shopping", priority: "high" },
    { name: "Clean bathroom", priority: "low" },
    { name: "Car's MOT", priority: "high" } 
  ]);

  const todoNodes = todos.map((todo, index) => {
    return (
      <li key={index} className={todo.priority === 'high' ? 'high-priority' : 'low-priority'}>
        <span>{todo.name}</span>
        <span>{todo.priority}</span>
      </li>
    )
  });


  const [newTodo, setNewTodo] = useState("");

  const handleToDoInput = (evt) => {
    setNewTodo(evt.target.value);
  }

  const [newRadioValue, setNewRadioValue] = useState("low");

  const handleRadioInputs = (evt) => {
    setNewRadioValue(evt.target.value);
    console.log('Radio VALUE: ', evt.target.value);
  }

  const saveTodo = (evt) => {
    evt.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push({name: newTodo, priority: newRadioValue});
    setTodos(copyTodos);
    setNewTodo("");
  }

  return (
    <div className='App'>
      <h1>ToDo or ToDon't, that is the question.</h1>

      <form onSubmit={saveTodo}>
        <label htmlFor='new-todo'><span>Add a ToDo</span>
          <input id='new-todo' type='text' value={newTodo} onChange={handleToDoInput} placeholder='Enter Todo Title' />
        </label>
        
        <div>
          <label htmlFor='priority-high'>High Priority</label>
            <input type='radio' name='priority' value='high' onChange={handleRadioInputs} />
        
          <label htmlFor='priority-low'>Low Priority</label>
            <input type='radio' name='priority' value='low' checked='checked' onChange={handleRadioInputs} />
        </div>
        <input type='submit' value='Add ToDo' />
      </form>

      <ul>
        {todoNodes}
      </ul>

    </div>

    


  );
}

export default App;
