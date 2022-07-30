import React from "react";
import UserTable from "../components/tables/UserTable";
import Filter from "../components/Filter";
import { getAllUsers } from "../api/mockGetAllUsers";
import CardWrap from "../components/CardWrap";
import { resourcePageCardHeight } from "../styles/mdsStyles/mdsStyles";

const ResourceManagement = () => {
  const rowData = getAllUsers;

  return (
    <>
      <div className="row">
        <div className="col-3">
          <CardWrap sxOptions={resourcePageCardHeight} title="Filter Users">
            <Filter />
          </CardWrap>
        </div>
        <div className="col-9">
          <CardWrap sxOptions={resourcePageCardHeight} title="List of Users">
            <UserTable rowData={rowData} />
          </CardWrap>
        </div>
      </div>
    </>
  );
};

export default ResourceManagement;
