import React from "react";
import UserTable from "../components/UserTable";
import Filter from "../components/Filter";
import { getAllUsers } from "../api/mockGetAllUsers";

const ResourceManagement = () => {
  const rowData = getAllUsers;

  return (
    <>
      <div className="row">
        <div className="col-3">
          <Filter />
        </div>
        <div className="col-9">
          <UserTable rowData={rowData} />
        </div>
      </div>
    </>
  );
};

export default ResourceManagement;
