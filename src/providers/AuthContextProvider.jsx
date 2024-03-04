import React from "react";
import { AuthContext } from "../context";
import { useState } from "react";
export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
