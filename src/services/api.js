import axios from "axios";

const api = axios.create({
  baseURL: 'http://wecandoit.sytes.net:7530'
});

export default api;