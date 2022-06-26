import React from "react";

import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  let location = useLocation();

  
  if (!localStorage.getItem("token")) {
    alert("No tienes permisos para ver mis proyectos, si tienes un segundo regitrate para poder acceder a todo el contenido");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};