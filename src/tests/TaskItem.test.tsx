
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '../components/TaskItem';
import { Task, TaskProvider } from '../context/TaskContext';

const mockTask: Task = {
  id: 1,
  title: 'Test Task',
  description: 'Test Description',
  status: 'Pending',
  dueDate: '2023-12-31',
};

describe('TaskItem', () => {
  const editTaskMock = jest.fn();
  const deleteTaskMock = jest.fn();

  test('renders task details', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={editTaskMock} onDelete={deleteTaskMock} />
      </TaskProvider>
    );

    expect(screen.getByText(/test task/i)).toBeInTheDocument();
    expect(screen.getByText(/test description/i)).toBeInTheDocument();
    expect(screen.getByText(/status: pending/i)).toBeInTheDocument();
    expect(screen.getByText(/due date: 2023-12-31/i)).toBeInTheDocument();
  });

  test('calls edit and delete functions', () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={editTaskMock} onDelete={deleteTaskMock} />
      </TaskProvider>
    );

    fireEvent.click(screen.getByText(/edit/i));
    expect(editTaskMock).toHaveBeenCalledWith(mockTask);

    fireEvent.click(screen.getByText(/delete/i));
    expect(deleteTaskMock).toHaveBeenCalledWith(mockTask.id);
  });

  test('matches snapshot', () => {
    const { asFragment } = render(
      <TaskProvider>
        <TaskItem task={mockTask} onEdit={() => {}} onDelete={() => {}} />
      </TaskProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});