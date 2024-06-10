import Image from "next/image";
import { LuBookOpenCheck } from "react-icons/lu";
import { PiFarm } from "react-icons/pi";
import { RiLeafLine } from "react-icons/ri";

const iconRender = (val) => {
  switch (val) {
    case "guide":
      return <LuBookOpenCheck size="1.5em" />;
    case "storage":
      return <PiFarm size="1.5em" />;
    case "fire":
      return <RiLeafLine size="1.5em" />;
    default:
      return <>No Icon</>;
  }
};

const FeatureItem = ({ title, description, icon }) => {
  return (
    <div className="flex gap-5 sm:gap-6  items-start">
      <div className="min-w-max flex">
        <span className="p-4 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
          {iconRender(icon)}
        </span>
      </div>
      <div className="space-y-1">
        <h2 className="font-title text-xl font-semibold text-gray-950 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};
const features = [
  {
    id: 1,
    title: "Harvesting Guides",
    description:
      "Farvest offers a wealth of information on post-harvest handling, drying techniques, and storage methods.",
    icon: "guide",
  },
  {
    id: 2,
    title: "Storage Solutions",
    description:
      "Farvest connects you directly with reliable storage facilities based on a farmer's location, crop type.",
    icon: "storage",
  },
  {
    id: 3,
    title: "Sustainable Solutions",
    description:
      "Sustainability is at the heart of what we do. We are committed to creating post-harvest solutions to reduce food waste.",
    icon: "fire",
  },
];

const Works = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-16">
        <div className="space-y-4 max-w-2xl">
          <span className="text-blue-600 dark:text-blue-400 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 dark:before:bg-blue-500 before:rounded-full">
            Farvest
          </span>
          <h1 className="font-title font-bold text-gray-800 dark:text-white text-3xl">
            Empowering Bangladeshi Farmers to Reduce Post-Harvest Loss
          </h1>
        </div>
        <div className="mx-auto flex flex-col md:flex-row gap-10 xl:gap-14">
          <div className="md:w-1/2 md:flex-1 flex flex-col space-y-5 md:gap-y-6 md:py-4 xl:py-6">
            {features.map((feature) => (
              <FeatureItem key={feature.id} {...feature} />
            ))}
          </div>
          <div className="w-full md:w-1/2 md:flex-1 lg:flex xl:w-[45%] shadow-xl rounded-md">
            <div className="relative w-full lg:w-full h-full">
              <Image
                src="/images/rice-cutting.webp"
                width={2240}
                height={1400}
                alt="works"
                className="absolute inset-0 rounded h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
