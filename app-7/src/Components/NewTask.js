import React, { useState } from 'react';

const NewTask = (props) => {
    const [input, setInput] = useState('');

    const inputChange = (val) => {
        setInput(val);
    }

    const handleAdd = () => {
        props.add(input);
        setInput('');
    }

    return(
        <div>
            <input
                value={input}
                placeholder="Enter new task"
                onChange={(e) => inputChange(e.target.value)}
            />
            <button onClick={handleAdd}> Add </button>
        </div>
    )
}

export default NewTask;