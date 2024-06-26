import axios from "axios";
import { getToken } from "./Token";

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  async function (config) {
    const { accessToken } = getToken();

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;