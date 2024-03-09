import React from "react";
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { api } from "../api";
import axios from "axios";
export default function useAxios() {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    //modify request
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    //check response
    const responseIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        if (error.response.status == 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.VITE_SERVER_BASE_URL}/auth/refresh-token
            `,
              { refreshToken }
            );

            const { token } = response.data;
            setAuth({ ...auth, authToken: token });
            originalRequest.headers.Authorization = `Bearer ${token}`;
            console.log(token, "new token");
            return axios(originalRequest);
          } catch (err) {
            throw err;
          }
        }
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [auth.authToken]);
  return { api };
}
