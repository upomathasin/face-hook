import React from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../assets/icons/logout.svg";
import { useAuth } from "../hooks/useAuth";
export default function Logout() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="logout" />
    </button>
  );
}
