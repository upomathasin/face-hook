import React from "react";
import { useAuth } from "./useAuth";
import { useEffect } from "react";
import { api } from "../api";
export default function useAxios() {
  const { auth, setAuth } = useAuth();
  useEffect(() => {
    api.interceptors.request.use((config) => {
      const authToken = auth?.authToken;

      config.headers.Authorization = `Bearer ${authToken}`;
    });
  }, []);
  return <div>useAxios</div>;
}
