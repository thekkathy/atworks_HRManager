import React from "react";
import UserTable from "../components/UserTable";
import Filter from "../components/Filter";
import { getAllUsers } from "../api/mockGetAllUsers";

const ResourceManagement = () => {
  const rowData = getAllUsers;

  return (
    <>
      <Filter />
      <UserTable rowData={rowData} />
    </>
  );
};

export default ResourceManagement;
