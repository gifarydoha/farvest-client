"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const StorageDetails = () => {
  const params = useParams();
  const { id } = params;
  const router = useRouter();
  const { data: session, status } = useSession();
  const [storage, setStorage] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch users and storage data when session is ready
  useEffect(() => {
    if (status === "loading") return; // Show loading state until session loads

    if (!session) {
      router.push("/sign-in"); // Redirect to sign-in if user is not logged in
      return;
    }

    // Fetch user data
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    // Fetch storage data
    const fetchStorage = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/create-storage/${id}`
        );
        const data = await response.json();
        setStorage(data);
      } catch (error) {
        console.error("Error fetching storage data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    if (id) {
      fetchStorage();
    }
  }, [session, status, id, router]);

  // Get the current user from fetched users
  const currentUser = users.find((user) => user.email === session?.user?.email);

  // Handle storage booking
  // const handleSelectStorage = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/book-storage", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: currentUser._id,
  //         storageId: storage._id,
  //         title: storage.title,
  //       }),
  //     });
  //     console.log(response);
  //     if (response.ok) {
  //       alert("Storage successfully booked!");
  //     } else {
  //       const errorData = await response.json();
  //       console.error("Error booking storage:", errorData);
  //       alert("Failed to book storage. Please try again.");
  //     }
  //   } catch (error) {
  //     console.error("Error during booking:", error);
  //     alert("An error occurred while booking storage.");
  //   }
  // };

  // Check if the user has already booked the storage
  const checkBookingExists = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/bookings/${currentUser._id}/${storage._id}`
      );
      const data = await response.json();
      return data.exists; // true if the booking exists, false otherwise
    } catch (error) {
      console.error("Error checking booking:", error);
      return false; // Assume no booking exists if there's an error
    }
  };

  // Handle storage booking with booking check
  const handleSelectStorage = async () => {
    // Check if the booking exists
    const bookingExists = await checkBookingExists();
    if (bookingExists) {
      alert("You have already booked this storage.");
      return; // Exit early if booking exists
    }

    try {
      const response = await fetch("http://localhost:5000/book-storage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
          storageId: storage._id,
          title: storage.title,
        }),
      });

      if (response.ok) {
        alert("Storage successfully booked!");
      } else {
        const errorData = await response.json();
        console.error("Error booking storage:", errorData);
        alert("You have already booked this storage.");
      }
    } catch (error) {
      console.error("Error during booking:", error);
      alert("An error occurred while booking storage.");
    }
  };

  // Render loading or error states
  if (loading || status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Redirecting to sign-in...</div>;
  }

  if (!storage) {
    return <div>Storage not found</div>;
  }

  return (
    <>
      <Navbar />
      <section className="py-32 px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
        <section className="relative">
          <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
              <div className="img">
                <div className="img-box h-full max-lg:mx-auto">
                  <Image
                    src={storage.image}
                    width={720}
                    height={1080}
                    alt="Storage item image"
                    className="max-lg:mx-auto lg:ml-auto h-full object-cover"
                  />
                </div>
              </div>
              <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                <div className="data w-full max-w-xl">
                  <p className="text-lg font-medium leading-8 text-green-600 mb-4">
                    Storage&nbsp; /&nbsp; Harvest
                  </p>
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                    {storage.title}
                  </h2>
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                            fill="#FBBF24"
                          />
                        </svg>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg>
                      </div>
                      <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                        34 reviews
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-base font-normal mb-5">
                    {storage.shortDescription}
                  </p>
                  <ul className="grid gap-y-4 mb-8">
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="26"
                          height="26"
                          rx="13"
                          fill="rgb(34 197 94)"
                        />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900">
                        Large capacity
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="26"
                          height="26"
                          rx="13"
                          fill="rgb(34 197 94)"
                        />
                        <path
                          d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                          stroke="white"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="font-normal text-base text-gray-900">
                        Climate controlled
                      </span>
                    </li>
                  </ul>
                  <div className="sm:flex sm:space-x-4 items-center justify-start">
                    <button
                      onClick={handleSelectStorage}
                      className="inline-block font-medium leading-7 text-base py-4 px-8 text-white rounded-xl bg-green-600 border border-green-600 hover:bg-green-700 hover:border-green-700 transition-all duration-300 ease-in-out"
                    >
                      Select Storage
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default StorageDetails;
