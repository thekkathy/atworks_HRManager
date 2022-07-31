import React, { createContext, useState } from "react";

const CurrentUserContext = createContext({ CurrentUser: [], updateCurrentUser: ([]) => {} });

const CurrentUserProvider = ({ children }) => {
  const [CurrentUser, setCurrentUser] = useState([]);

  const updateCurrentUser = (/** @type {any[]} */ newCurrentUserList) => {
    setCurrentUser([...newCurrentUserList])
  }

  return (
    <CurrentUserContext.Provider value={{ CurrentUser, updateCurrentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;

export { CurrentUserContext };
