import Image from "next/image";
import React from "react";

const products = () => {
  return (
    <section className="py-32">
      <div className="px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-16">
          <div className="mx-auto text-center md:max-w-5xl flex flex-col justify-center space-y-5">
            <span className="bg-blue-1 text-xs purple-8 dark:text-gray-1 rounded-lg px-2.5 py-1 font-semibold tracking-wide">
              Features
            </span>
            <h1 className="font-title text-3xl md:text-4xl xl:text-5xl text-blue-950 dark:text-gray-2 font-semibold leading-tight">
              The time-saving tool that makes your business more productive
            </h1>
            <p className="text-gray-7 dark:text-gray-3 max-w-lg mx-auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              odio consequatur aliquam ratione quod iusto aspernatur laudantium
              aut omnis,
            </p>
          </div>
          {/*  */}
          <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
            <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
              <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                <div className="space-y-6">
                  <span className="bg-purple-1 text-purple-7 dark:text-purple-5 rounded-md p-2 flex w-max">
                    <span
                      className="flex text-2xl"
                      role="img"
                      aria-label="feature icon"
                    >
                      🌩️
                    </span>
                  </span>
                  <h2 className="text-2xl text-gray-900 dark:text-white font-semibold">
                    All your patients record at one and same place
                  </h2>
                  <p className="text-gray-7 dark:text-gray-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae odio consequatur aliquam ratione
                  </p>
                </div>
                <ul className="space-y-5" role="list">
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                </ul>
              </div>
              <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                <Image
                  src="/images/background/farmer.jpg"
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
                  src="/images/background/harvest.jpg"
                  alt="product"
                  height="1080"
                  width="1920"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                <div className="space-y-6">
                  <span className="bg-purple-1 text-purple-7 dark:text-purple-5 rounded-md p-2 flex w-max">
                    <span
                      className="flex text-2xl"
                      role="img"
                      aria-label="feature icon"
                    >
                      🌩️
                    </span>
                  </span>
                  <h2 className="text-2xl text-gray-900 dark:text-white font-semibold">
                    All your patients record at one and same place
                  </h2>
                  <p className="text-gray-7 dark:text-gray-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae odio consequatur aliquam ratione
                  </p>
                </div>
                <ul className="space-y-5" role="list">
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                </ul>
              </div>
            </div>
            {/* Repeat the similar structure for other sections */}
          </div>
          <div className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0">
            <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
              <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                <div className="space-y-6">
                  <span className="bg-purple-1 text-purple-7 dark:text-purple-5 rounded-md p-2 flex w-max">
                    <span
                      className="flex text-2xl"
                      role="img"
                      aria-label="feature icon"
                    >
                      🌩️
                    </span>
                  </span>
                  <h2 className="text-2xl text-gray-900 dark:text-white font-semibold">
                    All your patients record at one and same place
                  </h2>
                  <p className="text-gray-7 dark:text-gray-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quae odio consequatur aliquam ratione
                  </p>
                </div>
                <ul className="space-y-5" role="list">
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                  <li className="flex items-center gap-4 text-gray-6 dark:text-gray-4">
                    <span className="flex items-center text-xl bg-purple-6 dark:bg-purple-4">
                      ✔️
                    </span>
                    Advantage of this feature
                  </li>
                </ul>
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
  );
};

export default products;
