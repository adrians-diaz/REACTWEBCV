import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const ButtonLogout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  return <button onClick={logout}>Logout</button>;
};

export default ButtonLogout;
