import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import about from "../../../public/images/about.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="mx-auto px-5 py-20 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <Image
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                height={1080}
                width={400}
                src={about}
                alt="About Us Image"
              />
              <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Bridging Farmers with Storage Solutions and Expertise
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Farvest is dedicated to bridging the gap between farmers and
                    storage providers, helping to reduce food waste and increase
                    agricultural efficiency. By connecting smallholder farmers
                    with essential storage facilities and practical post-harvest
                    management guidance, we aim to ensure crops are preserved
                    effectively, maximizing both yield and income.
                    <br />
                    <br />
                    Our platform enables seamless collaboration between those
                    growing the crops and those offering the storage solutions,
                    fostering a community focused on sustainability, innovation,
                    and food security. Together, we work towards a future where
                    post-harvest losses are minimized, and resources are used
                    more effectively.
                  </p>
                </div>
                <Link href="/">
                  <button className="sm:w-fit w-full px-3.5 py-2 bg-green-600 hover:bg-green-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span className="px-1.5 text-white text-sm font-medium leading-6">
                      Get Started
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default About;
