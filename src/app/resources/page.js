import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const guides = [
  {
    id: 1,
    title: "Six Tips on How to Dry Grains: A Basic Guide",
    image:
      "https://res.cloudinary.com/dpeoxmblg/image/upload/v1726120802/farvest/guides/ypqh3wnam6izulp5g0qm.jpg",
    description: `Drying grains has been part of agricultural traditions for thousands of years. This step ensures that crops are preserved so even if it’s not the harvesting season, people will still have food.

 

In today’s setting, drying grains has that same purpose. However, traditional grain drying techniques still have issues that can affect your grains' quality. Mold growth, insect damage, and even loss of germination can all occur if you don't dry your grains correctly. 

 

This is why you have to ensure that harvested grains are properly dried. See some basic tips below on how to do just that:

 

The first basic tip on how to dry grains is to properly prepare them. To do this, you should clean the grains by removing errant materials that may have been mixed in, such as leaves, rocks, or plastics.


Removing contaminants can decrease the chances of mold or bacterial growth. You should check for spots that may have fungal growth and immediately remove those from your stock.

 

This step is also when you want to make sure that the grains are ready to be dried within 12-24 hours after cutting or harvesting. If the high-moisture grains are stored for too long, there can be an increased chance of bacterial or mold growth.

 

2. Determine how long the grains will be stored. According to the guidelines set by the International Rice Research Institute (IRRI), the longer grains have to be stored, the lower the moisture content should be. If you store your grains for shorter periods, say a few weeks up to a few months, then a 14% MC or lower would be acceptable.

 

However, if the grains will be stored for longer than a few months, then you should make sure that the moisture content will be lower. A year or more of storage requires moisture content to be at 9%.

Taking this precaution can prevent problems like insect damage or infestation, loss of seed germination and vigor, and discoloration.

 

Read more: How to prevent rice weevils in commodities

 

3. Allow ample drying time, especially for patio or sun drying. This will allow the grains to be completely and uniformly dried. You also need to regularly turn or stir the grains, especially in the case of paddy or rice. This will eliminate wet spots or uneven drying.

 

Additionally, it’s advisable if you refrain from using the stacking method. This practice is known to over-dry and damage grains such as rice.

 

4. Use a clean mat for patio drying. Traditionally, patio drying or pavement drying is done directly on the ground but it’s advisable if you put a mat first.

The mat will protect the grains from contaminants such as rocks or nails that can reduce quality.

 

GrainPro developed a solution called the Collapsible Dryer Case, which serves as a protective mat as well as a safeguard against rewetting.

 

Not only does the Dryer Case keep away contaminants, but it also serves as a quick solution for erratic weather. If sudden rains occur, you can easily fold it over and zip it so the grains won’t be affected.

 

5. Make use of new technology and techniques. Agriculture can be seen as a more conservative or old-fashioned industry. However, more and more innovations are now available to you. For the drying process, there are now many different types of mechanical dryers.

 

GrainPro, in partnership with IRRI, also came up with a drying solution that is environmentally-friendly, too. The GrainPro Bubble Dryer uses solar energy to deliver faster drying time and uniformly dried commodities.

 

Don’t hesitate to explore new technology that can help your business. This might even be the solution to improve your whole post-harvest process and not just the drying stage.

 

6. Lastly, know and monitor the moisture content of your grains even after drying. Again, use new technology to your advantage for this. An example of a tool that you can use is the GrainPro Moisture Meter. This hand-held device can accurately measure up to 19 different types of commodities.

 

Keeping track of the moisture content of your grains can help keep them safe from over-drying and losing nutrients.

 

Applying these basic steps for drying your grains can help retain quality and quantity. Using technology and new knowledge can significantly benefit your post-harvest system.`,
  },
  {
    id: 2,
    title: "Benefits of a Good Storage System for Rice Grains",
    image:
      "https://res.cloudinary.com/dpeoxmblg/image/upload/v1726120801/farvest/guides/kvmzi4utztd5ou5ictde.webp",
    description:
      "Discover the advantages of using a proper storage system to preserve the quality of rice grains.",
  },
  {
    id: 3,
    title: "4 Tips to Avoid Mold Growth in Stored Grains",
    image:
      "https://res.cloudinary.com/dpeoxmblg/image/upload/v1726120801/farvest/guides/hoolfsrhd7pfjiz36fzb.jpg",
    description:
      "Implement these four tips to minimize mold growth and ensure long-term storage of your grains.",
  },
  {
    id: 4,
    title: "How to Prevent Rice Weevils in Commodities",
    image:
      "https://res.cloudinary.com/dpeoxmblg/image/upload/v1726120801/farvest/guides/fovaqrhny6fdqjhnhff4.jpg",
    description:
      "Prevent rice weevils from infesting your stored commodities with these simple but effective strategies.",
  },
];

const resources = () => {
  console.log(guides);
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
            {guides.map((guide) => (
              <Link
                href={"/resources/" + guide.id}
                key={guide.id}
                className="grid gap-12 divide-y divide-gray-300 dark:divide-gray-800 children:py-5 first:pt-0 last:pb-0"
              >
                <div className="md:flex md:items-center md:flex-row md:gap-10 lg:gap-14">
                  <div className="relative flex-1 p-6 lg:rounded-lg bg-gradient-to-tr from-sky-1 to-indigo-3 overflow-hidden">
                    <Image
                      src={guide.image}
                      alt="product"
                      height="720"
                      width="1280"
                    />
                  </div>
                  <div className="space-y-8 md:w-[48%] xl:w-[45%] py-6 xl:py-12">
                    <div className="space-y-6">
                      <h2 className="text-2xl text-gray-900 dark:text-white font-semibold font-title">
                        {guide.title}
                      </h2>
                      <p className="text-gray-7 dark:text-gray-3">
                        {guide.description.substring(0, 300)}...
                      </p>
                    </div>
                  </div>
                </div>
                {/* Repeat the similar structure for other sections */}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default resources;
