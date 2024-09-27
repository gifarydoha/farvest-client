"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ Children }) => {
  return <SessionProvider>{Children}</SessionProvider>;
};

export default AuthProvider;
