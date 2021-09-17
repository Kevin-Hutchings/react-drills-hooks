import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  return(
    <div className='App'>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1> {input} </h1>
    </div>
  )
}

export default App;