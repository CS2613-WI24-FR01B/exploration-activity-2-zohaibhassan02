import React, { useState } from 'react';
import './AddTaskForm.css';

function AddTaskForm({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
