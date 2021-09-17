import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [list, setList] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']);

  const listDisplay = list.map((el, index) => {
    return <h1 key={index}> {el} </h1>
  })

  return(
    <div> {listDisplay} </div>
    )
}

export default App;