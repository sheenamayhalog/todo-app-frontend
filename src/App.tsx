import React, { useState } from 'react';
import './App.css';
import { TaskProvider } from './context/TaskContext';
import AddTaskForm from './components/AddTaskForm';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import TaskList from './components/TaskList';

function App() {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  return (
    <TaskProvider>
      <div>
        <h1>To-Do List</h1>
        <AddTaskForm />
        <SearchBar query={query} setQuery={setQuery} />
        <Filter status={statusFilter} setStatus={setStatusFilter} />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
