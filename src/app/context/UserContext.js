"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    if (status === "loading") return;

    if (session) {
      // Fetch user details from your API if necessary
      const fetchUser = async () => {
        const response = await fetch("/api/users");
        const users = await response.json();
        const user = users.find((user) => user.email === session.user.email);
        setCurrentUser(user);
      };

      fetchUser();
    } else {
      setCurrentUser(null); // Reset user if session is not available
    }
  }, [session, status]);

  return (
    <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
