import React from 'react';
import { useGetTodosQuery } from '../features/apiThunk/RTKUserApi.jsx';

const Todo = () => {
  const { data: users, error, isLoading } = useGetTodosQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading users!</p>;

  return (
    <ul>
      {users.map(user => <li key={user.userId}>{user.title}</li>)}
    </ul>
  );
};

export default Todo;