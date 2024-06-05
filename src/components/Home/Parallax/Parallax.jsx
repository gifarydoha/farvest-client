import "./Parallax.css";
import React from "react";

const Parallax = () => {
  return (
    <section className="bg-fixed bg-cover bg-center skill-bg max-h-mobile-component-large lg:max-h-component-large overflow-hidden">
      <div
        className="py-12 lg:py-52 px-12 lg:px-36"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(22, 22, 22, .4), rgba(22, 22, 22, .4), rgba(22, 22, 22, .4)",
        }}
      >
        {/* <div>
          <h1 className="text-white text-header-small lg:text-7xl font-bold text-center mb-4 lg:mb-16 font-header">
            Upcoming Offers
          </h1>
        </div> */}
        <div className="grid justify-center">
          <div>
            <div className="p-8 lg:p-12 border-b-2 lg:border-b-0">
              {/* <img src={seaSkyLogo} alt="logo" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
