import axios from "axios";

const API_URL = "http://127.0.0.1:8000/";
const API = axios.create({ baseURL: API_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("profile")}`;
  }
  return req;
});
export const signIn = (formData) => API.post("api/login", formData);
export const signUp = (formData) => API.post("api/signup", formData);
export const addBlog = (formData) => API.post("api/addblog", formData);
export const getPost = () => API.get("api/allblog");
export const deletePost = (id) => API.get(`api/delete?id=${id}`);
export const updatePost = (formData) =>
  API.post(`api/edit?id=${formData.id}`, formData);
