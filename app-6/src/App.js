import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState('');

  const inputChange = (val) => {
    setUserInput(val);
  }

  const addTask = () => {
    setList([...list, userInput]);
    setUserInput('');
  }

  const listDisplay = list.map((el, index) => {
    return <Todo key={index} task={el} />
  })

  return(
    <div className="App">
      <h1> My to-do list: </h1>
      <div>
        <input
          value={userInput}
          placeholder="Enter a new task"
          onChange={(e) => {inputChange(e.target.value)}}
        />
        <button onClick={addTask}> Add </button>
      </div>
        <br />
        {listDisplay}
    </div>
  )
}

export default App;