import axios from "axios";

export const requestUsers = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
  timeout: 2500
});
