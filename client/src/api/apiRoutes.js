import { generateId } from "../utils/generateId";
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

const addUser = async (user) => {
  const request = {
    id: generateId(),
    ...user
  }
  const response = await api.post("/users", request);
}

const updateUser = async (user, userId) => {
  const request = {
    id: userId,
    ...user
  }
  const response = await api.put(`/users/${userId}`, request);
}

const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`).then(() => {return "Successfully deleted"}).catch(() => {return "Error deleting user"});
}

const getUserAddress = async (userId) => {
  const response = await api.get(`/users/${userId}/address`);
  return response.data;
}

const addUserAddress = async (userId, address) => {
  const request = {
    id: generateId(),
    ...address
  }
  const response = await api.post(`/users/${userId}/address`, request);
}

export { retrieveAllUsers, retrieveUser, filterUsers, addUser, updateUser, deleteUser, getUserAddress, addUserAddress };
