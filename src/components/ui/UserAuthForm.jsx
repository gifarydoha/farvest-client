"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const UserAuthForm = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/profile");
    }
  }, [status, session, router]);

  const handleSignIn = (role) => {
    setIsLoading(true);
    signIn("google", {
      callbackUrl: `/profile`, // Redirect after successful sign-in
      role: role, // Pass the role as part of the sign-in process
    });
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {status === "unauthenticated" && (
        <>
          <Button
            onClick={() => handleSignIn("farmer")} // Farmer role
            type="button"
            variant="outline"
            disabled={isLoading}
            className="font-semibold"
          >
            {isLoading ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <span className="mr-2 h-4 w-4">
                <FcGoogle />
              </span>
            )}
            Sign in
          </Button>

          {/* <Button
            onClick={() => handleSignIn("provider")} // Provider role
            type="button"
            variant="outline"
            disabled={isLoading}
            className="font-semibold"
          >
            {isLoading ? (
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <span className="mr-2 h-4 w-4">
                <FcGoogle />
              </span>
            )}
            Sign in as Provider
          </Button> */}
        </>
      )}

      {status === "loading" && <p>Loading...</p>}

      {status === "authenticated" && <p>Welcome, {session.user.email}</p>}
    </div>
  );
};

export default UserAuthForm;
