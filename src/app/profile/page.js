// app/profile/page.js (or wherever your profile component is located)

"use client"; // Ensure this component runs on the client side

import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; // Import from next/navigation

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") {
      // Optionally handle loading state if needed
      return;
    }

    if (!session) {
      // If there's no session, redirect to the sign-in page
      router.push("/sign-in"); // Adjust this path as necessary
    }
  }, [session, status, router]);

  // Render nothing or a loading indicator while redirecting
  if (status === "loading" || !session) {
    return <p>Loading...</p>; // Or a more sophisticated loading state
  }

  // Now render the profile content
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Welcome, {session.user.email}</p>
      {/* Additional profile information */}
    </div>
  );
};

export default ProfilePage;
