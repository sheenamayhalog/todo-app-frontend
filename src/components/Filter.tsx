import React from 'react';

interface FilterProps {
  status: string;
  setStatus: (status: string) => void;
}

const Filter: React.FC<FilterProps> = ({ status, setStatus }) => {
  return (
    <select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  );
};

export default Filter;