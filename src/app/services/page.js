import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";

const services = () => {
  return (
    <>
      <Navbar />
      <section className="py-32">
        <div className="px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-16">
            <div className="mx-auto text-center md:max-w-5xl flex flex-col justify-center space-y-5">
              <h1 className="mb-5 mt-16 font-title text-3xl md:text-4xl xl:text-4xl text-blue-950 dark:text-gray-2 font-semibold leading-tight">
                Fight Food Waste, Save More Crops, Farvest Helps Farmers Keep
                Food Fresh
              </h1>
              <p className="text-gray-7 dark:text-gray-3 max-w-5xl mx-auto md:text-lg">
                At Farvest, we are dedicated to helping farmers reduce food
                waste and preserve the quality of their crops. By connecting
                farmers with the right resources and technologies, we help
                contribute to a more sustainable and efficient agricultural
                sector. Join us in our mission to fight food waste and save more
                crops for a brighter future.
              </p>
            </div>
            {/*  */}
            <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
              <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
                <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                      Harvesting Guides
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Farvest offers a wealth of information on post-harvest
                      handling, drying techniques, and storage methods.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/Rice-Harvest.jpg"
                    alt="product"
                    height="1080"
                    width="1920"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Repeat the similar structure for other sections */}
            </div>
            <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
              <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/rice-storage.jpg"
                    alt="product"
                    height="1080"
                    width="1920"
                    className="w-full h-auto"
                  />
                </div>
                <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                      Storage Solutions
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Farvest connects you directly with reliable storage
                      facilities based on a farmer&apos;s location, crop type.
                    </p>
                  </div>
                </div>
              </div>
              {/* Repeat the similar structure for other sections */}
            </div>
            <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
              <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
                <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                      Sustainable Solutions
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Sustainability is at the heart of what we do. We are
                      committed to creating post-harvest solutions to reduce
                      food waste.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/background/potato.jpg"
                    alt="product"
                    height="1080"
                    width="1920"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              {/* Repeat the similar structure for other sections */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default services;
