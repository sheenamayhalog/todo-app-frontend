import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import AddTaskForm from '../components/AddTaskForm';

describe('AddTaskForm', () => {
  test('renders form inputs', () => {
    render(
      <TaskProvider>
        <AddTaskForm />
      </TaskProvider>
    );

    expect(screen.getByPlaceholderText(/task title/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/task description/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
  });

  test('adds a new task', () => {
    const { getByPlaceholderText, getByLabelText, getByText } = render(
      <TaskProvider>
        <AddTaskForm />
      </TaskProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/task title/i), { target: { value: 'New Task' } });
    fireEvent.change(screen.getByPlaceholderText(/task description/i), { target: { value: 'Task Description' } });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Pending' } });
    fireEvent.change(screen.getByLabelText(/due date/i), { target: { value: '2023-12-31' } });
    fireEvent.click(screen.getByText(/add task/i));

    // Check if the task was added (you may want to check the context or use a mock function)
    // This will depend on how you want to verify the addition of a task
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <TaskProvider>
        <AddTaskForm />
      </TaskProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

