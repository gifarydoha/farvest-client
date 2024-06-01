"use client";
import CardLayout from "@/components/ui/CardLayout";
import React, { useState, useRef, useEffect } from "react";

export function Resources() {
  return (
    <section id="resources" className="h-screen w-full py-20">
      <CardLayout cards={cards} />
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-title text-4xl font-bold text-white">
        How to Prevent Rice Weevils in Commodities
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Insect infestations in stored agricultural commodities can bring
        irreparable damage, resulting in billions of dollars in post-harvest
        losses every year.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-title text-4xl font-bold text-white">
        6 Tips on How to Dry Grains: A Basic Guide
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Drying grains has been part of agricultural traditions for thousands of
        years. This step ensures that crops are preserved so even if it’s not
        the harvesting season, people will still have food.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-title text-4xl font-bold text-white">
        4 Tips to Avoid Mold Growth in Stored Grains
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Mold growth in dried food such as grains, maize, or rice is not an
        appetizing sight. Farmers and handlers detest mold because it means
        their products are tainted and this results in a loss in their profits.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-title text-4xl font-bold text-white">
        Benefits of a Good Storage System for Cereal Grains
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
        Cereal grains such as wheat, corn, and oats are a great source of energy
        and nutrients like carbohydrates, protein, vitamin E, B vitamins,
        magnesium and zinc.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "sm:col-span-2",
    thumbnail:
      "https://www.westernpest.com/wp-content/uploads/Rice-Weevil-sbs.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://us.images.westend61.de/0001589097pw/aerial-view-of-millions-of-grains-of-rice-are-laid-out-to-dry-at-a-mill-as-workers-brush-them-with-leaves-in-the-hot-sun-dhamrai-dhaka-bangladesh-AAEF11156.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://www.alvanblanchgroup.com/wp-content/uploads/2021/10/Mouldy-Wheat.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "sm:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1497448134719-754ac7fd09eb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
