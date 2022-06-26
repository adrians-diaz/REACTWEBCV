import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/api";
import "./Login.scss";
const LoginForm = ({setAsistente}) => {
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/login", formData).then((res) => {
      /* console.log(res.data.token);
      console.log(res.data.user.username); */
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user.username);
      /* setAsistente(true) */
      /* console.log(document.getElementById(""));  */
      /* document.getElementById("icoAsistente").setAttribute("className", "Asistente Visible");
      document.getElementById("icoAsistenteLOGIN").setAttribute("className", "Asistente"); */

      navigate("/");
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        {...register("username", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
