import React from "react";
import { Navigate } from "react-router-dom";
import { isAuth } from "../auth/isAuth";

const PrivateRoute = ({ children }) => {
  var value = isAuth();

  return value ? children : <Navigate to="/" />;
};

export default PrivateRoute;
