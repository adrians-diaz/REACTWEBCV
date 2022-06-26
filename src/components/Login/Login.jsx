import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = (setAsistente) => {
  return (
    <div className="divForm">
      <figure>
      <h2>Login</h2>

      <LoginForm setAsistente={setAsistente}/>
      <h1><Link to="/register">REGISTER</Link></h1>
      
    </figure>
    </div>
    
  );
};

export default Login;
