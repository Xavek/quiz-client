import React from "react";
import { Navigate, Outlet } from "react-router-dom";
// The tokens we get from the backend need to stored and persisted for further request.
// We are gonna make use of useContext hook
const userAuth = () => {
  const acessToken = localStorage.getItem("tokens");
  if (acessToken) {
    const user = { isLoggedIn: true };
    return user && user.isLoggedIn;
  } else {
    const user = { isLoggedIn: false };
    return user && user.isLoggedIn;
  }
};
const ProtectedRoutes = () => {
  const isAuth = userAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
