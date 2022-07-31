import React from "react";
import FiltersProvider from "../context/FiltersContext";
import UsersProvider from "../context/UsersContext";

const ContextWrapper = ({ children }) => {
  return (
    <>
      <FiltersProvider>
        <UsersProvider>{children}</UsersProvider>
      </FiltersProvider>
    </>
  );
};

export default ContextWrapper;
