import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';

const AddTaskForm: React.FC = () => {
  const { addTask } = useTaskContext();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<'Pending' | 'In Progress' | 'Completed'>('Pending');
  const [dueDate, setDueDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description, status, dueDate };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setStatus('Pending');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as 'Pending' | 'In Progress' | 'Completed')}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <label htmlFor="due-date">Due Date</label>
      <input
        type="date"
        id="due-date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;