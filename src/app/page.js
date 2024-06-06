import Banner from "@/components/Home/Banner/Banner";
import Parallax from "@/components/Home/Parallax/Parallax";
import Resources from "@/components/Home/Resources/Resources";
import Works from "@/components/Home/Works/Works";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const page = () => {
  return (
    <section>
      <Navbar />
      <Banner />
      <Works />
      <Parallax />
      <Resources />
      <Footer />
    </section>
  );
};

export default page;
