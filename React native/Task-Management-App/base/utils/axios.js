import axios from "axios";

export const axiosInstanace = axios.create({
  baseURL: "http://localhost:8009",
});

axiosInstanace.interceptors.request.use(
  function (config) {
    config.headers = {
      Accept: "application/json",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
