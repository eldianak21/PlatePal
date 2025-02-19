import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Login/UserContext"; // Adjust the import as necessary

const AuthGuard = ({ children }) => {
  const user = useAuth(); // Get the logged-in user

  if (!user) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" />;
  }

  return children; // If logged in, render the children
};

export default AuthGuard;
