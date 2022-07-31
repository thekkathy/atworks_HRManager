import api from "./api";

const retrieveAllUsers = async () => {
  const response = await api.get("/users/summary");
  return response.data;
}

const retrieveUser = async (userId) => {
  const response = await api.get(`/users/${userId}`);
  return response.data;
}

const filterUsers = async (name, type) => {
  const response = await api.get(`/users/summary?name=${name}&userType=${type}`);
  return response.data;
}

export { retrieveAllUsers, retrieveUser, filterUsers };
