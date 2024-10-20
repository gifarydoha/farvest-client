"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const StorageForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const { toast } = useToast(); // Initialize toast

  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    location: "",
    totalWeight: "",
    productType: "",
    image: "",
    ownerName: "",
    ownerEmail: "",
    contactNumber: "",
  });

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/sign-in"); // Redirect if not signed in
      return;
    }

    const fetchUsers = async () => {
      const response = await fetch("api/users");
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, [session, status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/create-storage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Storage Creation successful:", result);

        // Clear the form after successful submission
        setFormData({
          title: "",
          shortDescription: "",
          location: "",
          totalWeight: "",
          productType: "",
          image: "",
          ownerName: session?.user?.name || "",
          ownerEmail: session?.user?.email || "",
          contactNumber: "",
        });

        // Show success toast message
        toast({
          title: "Success!",
          description: "Storage created successfully.",
          status: "success",
        });

        // Redirect to the profile page
        router.push("/profile");
      } else {
        console.error("Failed to submit Storage:", response.statusText);
        toast({
          title: "Error",
          description: "Failed to create storage. Please try again.",
          status: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an error submitting the form.",
        status: "error",
      });
    }
  };

  // Find the current user from the session
  const currentUser = users.find((user) => user.email === session?.user?.email);

  useEffect(() => {
    if (currentUser) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        ownerName: currentUser.name,
        ownerEmail: currentUser.email,
      }));
    }
  }, [currentUser]);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Create Storage</h2>

      {/* Title */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Storage Name
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Short Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Short Description
        </label>
        <textarea
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Brief description"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Enter Image URL"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter Location"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Total Booking Weight (kg) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Total Storage Capacity (kg)
        </label>
        <input
          type="number"
          name="totalWeight"
          value={formData.totalWeight}
          onChange={handleChange}
          placeholder="Weight in kg"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Product Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Storage Type
        </label>
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" disabled>
            Select a product
          </option>
          <option value="rice">Rice</option>
          <option value="potato">Potato</option>
          <option value="onion">Onion</option>
        </select>
      </div>

      {/* Owner Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Owner Name
        </label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      {/* Owner Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Owner Email
        </label>
        <input
          type="email"
          name="ownerEmail"
          value={formData.ownerEmail}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          readOnly
        />
      </div>

      {/* Contact Number */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Enter Contact Number"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
        >
          Create Storage
        </button>
      </div>
    </form>
  );
};

export default StorageForm;
