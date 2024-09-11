import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import React from "react";

const resources = () => {
  return (
    <>
      <Navbar />
      <section className="py-32">
        <div className="px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
          <div className="flex flex-col space-y-16">
            <div className="mx-auto text-center md:max-w-5xl flex flex-col justify-center space-y-5">
              <h1 className="mb-5 mt-16 font-title text-3xl md:text-4xl xl:text-4xl text-blue-950 dark:text-gray-2 font-semibold leading-tight">
                Stay Informed with Farvest&apos;s Latest Insights on
                Post-Harvest Techniques and Best Practices
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
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/resources/Rice-Weevil.jpeg"
                    alt="product"
                    height="720"
                    width="1280"
                  />
                </div>
                <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                      How to Prevent Rice Weevils in Commodities
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Insect infestations in stored agricultural commodities can
                      bring irreparable damage, resulting in billions of dollars
                      in post-harvest losses every year.
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
                      Six Tips on How to Dry Grains: A Basic Guide
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Drying grains has been part of agricultural traditions for
                      thousands of years. This ensures that crops are preserved
                      so even if it&apos;s not the harvesting season, people
                      will still have food.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/resources/6-tips-dry-rice-grains.jpg"
                    alt="product"
                    height="720"
                    width="1280"
                  />
                </div>
              </div>
              {/* Repeat the similar structure for other sections */}
            </div>
            <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
              <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/resources/benefits-of-a-good-storage-system.webp"
                    alt="product"
                    height="720"
                    width="1280"
                  />
                </div>
                <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                  <div className="space-y-6">
                    <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                      Benefits of a Good Storage System for Rice Grains
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Rice grains such as wheat are a great source of energy and
                      nutrients like carbohydrates, protein, vitamin E, B
                      vitamins, magnesium and zinc.
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
                      4 Tips to Avoid Mold Growth in Stored Grains
                    </h2>
                    <p className="text-gray-7 dark:text-gray-3">
                      Mold growth in dried food such as grains, maize, or rice
                      is not an appetizing sight. Farmers and handlers detest
                      mold because it means their products are tainted and this
                      results in a loss in their profits.
                    </p>
                  </div>
                </div>
                <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                  <Image
                    src="/images/resources/avoid-mold-growth.jpg"
                    alt="product"
                    height="720"
                    width="1280"
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

export default resources;
