import React, { useState } from 'react';
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import '../css/App.css';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const handleUpdate = () => {
        onUpdateTodo(id, newTodo);
        setEditable(false);
    }

    return (
        <div className='todo-row'>
            <div>
                {
                    editable ?
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className='todo-edit-input'
                        />
                        : content
                }
            </div>
            <div className='todo-icons-container'>
                <IoIosRemoveCircle className='todo-icons' onClick={() => onRemoveTodo(id)} style={{ color: 'red' }} />

                {
                    editable ?
                        <FaCheck
                            className='todo-icons'
                            onClick={handleUpdate}
                            style={{ color: 'green' }}
                        />
                        : <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo