import React, { useContext } from "react";
import { AuthContext } from "../context";

export function useAuth() {
  return useContext(AuthContext);
}
