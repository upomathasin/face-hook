import React from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../assets/icons/logout.svg";
export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logoutIcon} alt="logout" />
    </button>
  );
}
