import React, { useReducer } from "react";
import { ProfileContext } from "../context";
import { ProfileReducer, initialState } from "../reducers/ProfileReducer";
import { unstable_useViewTransitionState } from "react-router-dom";

export default function ProfileProvider({ children }) {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
}
