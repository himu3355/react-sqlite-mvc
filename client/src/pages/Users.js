import React, { useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

const Users = () => {
  const [users, setUsers] = useState([]);

  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>User Management</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </div>
  );
};

export default Users;