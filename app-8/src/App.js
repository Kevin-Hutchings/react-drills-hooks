import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [character, setCharacter] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
    .then(({ data }) => {
      setCharacter(data)
    })
    .catch((err) => console.log(err))
  }, [])

  const { name, birth_year, height, eye_color} = character;

  return(
    <div className="App">
        <h1> Name: {name} </h1>
        <h1> Birth Year: {birth_year} </h1>
        <h1> Height: {height} </h1>
        <h1> Eye Color: {eye_color} </h1>
    </div>
  )
}

export default App;