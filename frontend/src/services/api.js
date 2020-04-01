import axios from "axios";

// const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });
const api = axios.create({
  baseURL: "https://apple-tart-67179.herokuapp.com/"
});
export default api;
