import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

const Storages = () => {
  return (
    <>
      <Navbar />
      <section className=" mx-auto px-5 py-20 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5 min-h-screen">
        {/* storage */}
        <div className="pt-36 grid grid-cols-1 md:grid-cols-3 ">
          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="min-h-[200px] max-h-[200px] object-cover"
                src="https://media.istockphoto.com/id/458560823/photo/hemp-sacks-stacked-high-in-a-large-warehouse.jpg?s=612x612&w=0&k=20&c=2tnykTA_b8kMTmJX_S5d6ZHFLMXWg7ImE7CzTjkpZcU="
                height={200}
                width={400}
                alt="Card image"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Rice Storage
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                We offer clean, climate-controlled, and pest-free facilities to
                ensure your rice stays fresh and safe.{" "}
              </p>
              <button className="bg-emerald-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Select Storage
              </button>
            </div>
          </div>

          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="min-h-[200px] max-h-[200px] object-cover"
                src="https://blog.potatoworld.eu/hubfs/Blog%2035%20openingsfoto.jpeg"
                height={200}
                width={400}
                alt="Card image"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Potato Storage
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                We offer clean, climate-controlled, and pest-free facilities to
                ensure your rice stays fresh and safe.{" "}
              </p>
              <button className="bg-emerald-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Select Storage
              </button>
            </div>
          </div>

          <div className="relative max-w-xs border border-solid border-gray-200 rounded-2xl transition-all duration-500 ">
            <div className="block overflow-hidden">
              <Image
                className="min-h-[200px] max-h-[200px] object-cover"
                src="https://i0.wp.com/blog.bijak.in/wp-content/uploads/2022/03/Onion-Storage-Facilities-in-India-image.png?resize=940%2C555&ssl=1"
                height={200}
                width={400}
                alt="Card image"
              />
            </div>
            <div className="p-4">
              <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
                Onion Storage
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5">
                {" "}
                We offer clean, climate-controlled, and pest-free facilities to
                ensure your rice stays fresh and safe.{" "}
              </p>
              <button className="bg-emerald-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">
                Select Storage
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Storages;
