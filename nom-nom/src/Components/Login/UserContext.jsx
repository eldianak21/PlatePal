import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../../firebase"; // Adjust the path as necessary
import { onAuthStateChanged } from "firebase/auth";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
