import React, { useContext, useDebugValue } from "react";
import { AuthContext } from "../context";

export function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);
  useDebugValue(auth, (auth) =>
    auth?.user ? "User Logged in " : "User not logged in"
  );
  return useContext(AuthContext);
}
