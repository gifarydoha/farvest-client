import Banner from "@/components/Home/Banner/Banner";
import { Resources } from "@/components/Home/Resources/Resources";
import Works from "@/components/Home/Works/Works";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Works />
      <Resources />
    </section>
  );
};

export default page;
