import React, { createContext, useState } from "react";

const UsersContext = createContext({ Users: [], updateUsers: ([]) => {} });

const UsersProvider = ({ children }) => {
  const [Users, setUsers] = useState([]);

  const updateUsers = (/** @type {any[]} */ newUsersList) => {
    setUsers([...newUsersList])
  }

  return (
    <UsersContext.Provider value={{ Users, updateUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;

export { UsersContext };
