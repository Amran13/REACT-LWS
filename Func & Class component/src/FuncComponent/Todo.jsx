import React, { useState } from 'react';

function Todo(props) {
    const [todo, setTodo] = useState('')
    const [warning, setWarning] = useState(null)

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warning = inputValue.includes('.js') ? 'Yes, includes.js' : null
        console.log(todo, warning)
        setTodo(inputValue)
        setWarning(warning)
    }
    return (
        <div>
            <p> {todo} </p>
            <input type="text" onChange={handleInput} name="input" id="" />
            <hr />
            <p> {warning || 'Good Choice'} </p>
        </div>
    );
}

export default Todo;