import React, { useState } from 'react';

function Todo({ todo, deleteTodo, updateTodo }) {
    const [editValue, setEditValue] = useState(todo.title);

    const handleUpdate = () => {
        console.log("Updating todo:", todo.id, "New title:", editValue);
        updateTodo(todo.id, editValue);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '300px',
            alignItems: 'center',
            marginTop: '10px'
        }}>
            <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
            />
            <button onClick={handleUpdate}>Update</button>
            <h3>{todo.title}</h3>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    );
}

export default Todo;
