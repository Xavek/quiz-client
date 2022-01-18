import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const userAuth = () => {
  const user = { isLoggedIn: false };
  return user && user.isLoggedIn;
};
const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
