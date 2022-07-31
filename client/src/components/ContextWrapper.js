import React from "react";
import FiltersProvider from "../context/FiltersContext";
import UsersProvider from "../context/UsersContext";
import  CurrentUsersContext from "../context/CurrentUserContext";

const ContextWrapper = ({ children }) => {
  return (
    <>
      <CurrentUsersContext>
        <FiltersProvider>
          <UsersProvider>{children}</UsersProvider>
        </FiltersProvider>
      </CurrentUsersContext>
    </>
  );
};

export default ContextWrapper;
