import "./Parallax.css";
import React from "react";

const Parallax = () => {
  return (
    <section className="bg-fixed bg-cover bg-center skill-bg max-h-mobile-component-large lg:max-h-component-large overflow-hidden">
      <div
        className="py-48 lg:py-52 xl:py-80 px-6 sm:px-12 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22, 22, 22, .4), rgba(22, 22, 22, .4), rgba(22, 22, 22, .4)",
        }}
      >
        <div className="grid justify-center items-center max-w-6xl md:p-10 mx-auto">
          <h2 className="text-white text-2xl sm:text-3xl font-medium tracking-wide md:text-3xl lg:text-4xl xl:text-5xl text-center font-title">
            Post-harvest solutions designed to safely maintain food quality and
            reduce food losses.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
