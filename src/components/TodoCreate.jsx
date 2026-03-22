import React, { useState } from 'react';
import '../css/App.css';

function TodoCreate({ oncreateTodo }) {
    const [newTodo, setNewTodo] = useState('');

    const createTodo = () => {
        if (!newTodo.trim()) {
            return;
        }

        const request = {
            id: Math.floor(Math.random() * 999999),
            content: newTodo
        };

        oncreateTodo(request);


        setNewTodo('');
    };

    return (
        <div className='todo-create'>
            <input
                className='todo-input'
                type="text"
                placeholder='Todo giriniz'
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
                onClick={createTodo}
                className='todo-create-button'
            >
                Todo Oluştur
            </button>
        </div>
    );
}

export default TodoCreate;