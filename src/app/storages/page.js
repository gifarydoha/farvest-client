"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Storages = () => {
  const [storages, setStorages] = useState([]);

  useEffect(() => {
    const fetchStorages = async () => {
      const response = await fetch("http://localhost:5000/create-storage");
      const data = await response.json();
      setStorages(data);
    };

    fetchStorages();
  }, []);

  return (
    <>
      <Navbar />
      <section className=" mx-auto px-5 py-20 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5 min-h-screen">
        {/* storage */}
        <div className="pt-36 grid grid-cols-1 md:grid-cols-3 gap-10">
          {storages.map((storage) => (
            <Link
              href={`/storages/${storage._id}`}
              key={storage._id}
              className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 "
            >
              <div className="block overflow-hidden">
                <Image
                  className="min-h-[200px] max-h-[200px] object-cover"
                  src={storage.image}
                  height={200}
                  width={400}
                  alt="Storage image"
                />
              </div>
              <div className="p-4">
                <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                  {storage.title}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                  {" "}
                  {storage.shortDescription.substring(0, 150)} ...
                </p>
                <button className="bg-green-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                  Select Storage
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Storages;
