import React, { useContext, useEffect, useState } from "react";
import UserTable from "../components/tables/UserTable";
import Filter from "../components/Filter";
import CardWrap from "../components/CardWrap";
import { UsersContext } from "../context/UsersContext";
import { capitalize, isEmpty, isUndefined } from "lodash";
import { filterUsers, retrieveAllUsers } from "../api/apiRoutes";
import { FiltersContext } from "../context/FiltersContext";

const ResourceManagement = () => {
  const { Filters } = useContext(FiltersContext);
  const { Users, updateUsers } = useContext(UsersContext);

  useEffect(() => {
    const getUsers = async () => {
      if (!isEmpty(Filters) && !isUndefined(Filters)) {
        const filterName = capitalize(Filters[0].filterName);
        const filterType = Filters[0].filterUserType.toUpperCase();
        const filteredUsers = await filterUsers(filterName, filterType);
        if (filteredUsers) {
          updateUsers(filteredUsers);
        }
      } else {
        const allUsers = await retrieveAllUsers();
        if (allUsers) {
          // console.log(JSON.stringify(allUsers));
          updateUsers(allUsers);
        }
      }
    };
    getUsers();
  }, [Filters]);

  return (
    <>
      <div className="row d-flex">
        <div className="col-lg-3 my-2">
          <CardWrap title="Filter Users">
            <Filter />
          </CardWrap>
        </div>
        <div className="col-lg-9 my-2">
          <CardWrap title="List of Users">
            <UserTable rowData={Users} />
          </CardWrap>
        </div>
      </div>
    </>
  );
};

export default ResourceManagement;
