import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [list, setList] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']);
  const [filterString, setFilterString] = useState('');

  const filterInput = (filter) => {
    setFilterString(filter)
  }

  const listDisplay = list.filter((food) => {
      return food.includes(filterString);
    })
    .map((food, index) => {
      return <h1 key={index}> {food} </h1>
  })
  

  return(
    <div>
      <input 
        type='text'
        onChange={(e) => filterInput(e.target.value)}
      />
      {listDisplay}
    </div>
  )
}

export default App;