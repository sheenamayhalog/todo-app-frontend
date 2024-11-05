import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { FixedSizeList as List } from 'react-window';

const TaskList: React.FC = () => {
  const { tasks, editTask, deleteTask } = useTaskContext();

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      <TaskItem task={tasks[index]} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );

  return (
    <List
      height={400}
      itemCount={tasks.length}
      itemSize={100}
      width={300}
    >
      {Row}
    </List>
  );
};

export default TaskList;