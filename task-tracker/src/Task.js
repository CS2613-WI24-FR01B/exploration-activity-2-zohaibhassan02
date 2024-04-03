import React from 'react';
import './Task.css';


function Task({ task, onDeleteTask }) {
  return (
    <li>
      {task.text}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;
