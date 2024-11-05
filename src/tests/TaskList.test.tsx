import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TaskProvider, useTaskContext } from '../context/TaskContext';
import { Task } from '../context/TaskContext';
import TaskList from '../components/TaskList';

// Mock data for tasks
const mockTasks: Task[] = [
  { id: 1, title: 'Test Task 1', description: 'Description 1', status: 'Completed', dueDate: '2024-01-01' },
  { id: 2, title: 'Another Task', description: 'Description 2', status: 'In Progress', dueDate: '2024-01-02' },
  { id: 3, title: 'Task Three', description: 'Description 3', status: 'Completed', dueDate: '2024-01-03' },
];

// Mock useTaskContext to provide control over task data
jest.mock('../context/TaskContext', () => {
  const originalModule = jest.requireActual('../context/TaskContext');
  return {
    ...originalModule,
    useTaskContext: jest.fn(),
  };
});

describe('TaskList Component', () => {
  beforeEach(() => {
    (useTaskContext as jest.Mock).mockReturnValue({
      tasks: mockTasks,
      editTask: jest.fn(),
      deleteTask: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders tasks with the correct information', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Another Task')).toBeInTheDocument();
    expect(screen.getByText('Task Three')).toBeInTheDocument();
  });

  it('filters tasks by status', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    const completeTasks = mockTasks.filter(task => task.status === 'Completed');
    completeTasks.forEach(task => {
      expect(screen.getByText(task.title)).toBeInTheDocument();
    });

    const incompleteTasks = mockTasks.filter(task => task.status === 'In Progress');
    incompleteTasks.forEach(task => {
      expect(screen.queryByText(task.title)).not.toBeInTheDocument();
    });
  });

  it('searches for tasks by title', () => {
    render(
      <TaskProvider>
        <TaskList />
      </TaskProvider>
    );

    const searchTerm = 'Another Task';
    userEvent.type(screen.getByRole('textbox', { name: /search/i }), searchTerm);

    expect(screen.getByText('Another Task')).toBeInTheDocument();
    expect(screen.queryByText('Test Task 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Task Three')).not.toBeInTheDocument();
  });
});
