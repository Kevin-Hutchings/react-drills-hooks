import React, { useState } from 'react';
import NewTask from './Components/NewTask';
import List from './Components/List';
import './App.css';

const App = () => {
  const [list, setList] = useState([]);

  const addTask = (task) => {
    setList([...list, task]);
  }

  return(
    <div className="App">
      <h1> My to-do list: </h1>
      <NewTask add={addTask} />
      <List tasks={list}/>
    </div>
  )
}

export default App;