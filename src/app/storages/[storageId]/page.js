import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";

export default async function resourceDetails({ params }) {
  const { resourcesId } = params;

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://farvest.vercel.app";

  const response = await fetch(`${baseUrl}/guide.json`);
  const data = await response.json();

  const resource = data.find((item) => item.id.toString() === resourcesId);

  if (!resource) {
    return <div>Resource not found</div>; // Render a 404-like message if not found
  }
  const { id, title, image, description } = resource;

  // console.log(resource);
  return (
    <>
      <Navbar />
      <section className="py-32">
        <div className="px-5 sm:px-10 md:px-12 lg:px-5 max-w-7xl mx-auto">
          <div className="img w-full mb-14"></div>
          <section className="relative pt-20 pb-24 bg-emerald-600">
            <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
              <h1 className="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">
                {title}
              </h1>
              <div className="flex items-center justify-between">
                <div className="data">
                  <p className="font-medium text-xl leading-8 text-white mb-1">
                    insights
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-10 lg:py-16 ">
            <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3">
              <Image
                src={image}
                height="360"
                width="1280"
                alt="Blog tailwind page"
                className="object-cover mb-16"
              />

              {/* <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
                Save up to 40% compared to a merchant cash advance and other
                online lenders.
              </h4> */}

              <p className="font-normal text-lg leading-8 text-gray-600 mb-8">
                {description}
              </p>

              {/* <p className="font-normal text-lg leading-8 text-gray-600 mb-16">
                This description aims to highlight the UI component's emphasis
                on speed, user-friendliness, and alignment with the brand's
                commitment to responsive services in facilitating business
                loans.
              </p> */}

              {/* <div className="flex justify-between relative mb-16">
                <svg
                  className="absolute top-0 left-0 w-8"
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1556 29.4389L15.1556 15.7709L9.96491 15.7709C7.47307 10.3036 11.6949 6.83404 14.1173 5.78265L14.1173 1.23418e-06C-3.74082 1.26167 -0.937509 20.1517 2.69642 29.4389L15.1556 29.4389Z"
                    fill="url(#paint0_linear_9284_62585)"
                  />
                  <path
                    d="M31.9993 29.4389L31.9994 15.7709L26.8087 15.7709C24.3168 10.3036 28.5387 6.83404 30.9611 5.78265L30.9611 1.23418e-06C13.1029 1.26167 15.9062 20.1517 19.5402 29.4389L31.9993 29.4389Z"
                    fill="url(#paint1_linear_9284_62585)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9284_62585"
                      x1="15.1556"
                      y1="1.68661"
                      x2="-7.59931"
                      y2="11.975"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7C3AED" />
                      <stop offset="0.993738" stop-color="#4F46E5" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_9284_62585"
                      x1="31.9994"
                      y1="1.68661"
                      x2="9.24444"
                      y2="11.975"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7C3AED" />
                      <stop offset="0.993738" stop-color="#4F46E5" />
                    </linearGradient>
                  </defs>
                </svg>
                <h4 className="font-manrope font-semibold text-2xl leading-9 text-black max-w-[609px] mx-auto max-lg:px-8">
                  It’s easy to get a loan unless you need it.
                </h4>
                <svg
                  className="absolute right-0 bottom-0 w-8"
                  width="32"
                  height="30"
                  viewBox="0 0 32 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8444 0.00050603L16.8444 13.6686L22.0351 13.6686C24.5269 19.1358 20.3051 22.6054 17.8827 23.6568L17.8827 29.4395C35.7408 28.1778 32.9375 9.28779 29.3036 0.000507119L16.8444 0.00050603Z"
                    fill="url(#paint0_linear_9553_63113)"
                  />
                  <path
                    d="M0.000651072 0.00050603L0.000649877 13.6686L5.19134 13.6686C7.68318 19.1358 3.46132 22.6054 1.03891 23.6568L1.03891 29.4395C18.8971 28.1778 16.0938 9.28779 12.4598 0.000507119L0.000651072 0.00050603Z"
                    fill="url(#paint1_linear_9553_63113)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9553_63113"
                      x1="16.8444"
                      y1="27.7528"
                      x2="39.5993"
                      y2="17.4644"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7C3AED" />
                      <stop offset="0.993738" stop-color="#4F46E5" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_9553_63113"
                      x1="0.000648535"
                      y1="27.7528"
                      x2="22.7556"
                      y2="17.4644"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#7C3AED" />
                      <stop offset="0.993738" stop-color="#4F46E5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div> */}

              {/* <h4 className="font-manrope font-semibold text-2xl leading-9 text-black mb-12">
                Digital financial planner and management
              </h4> */}

              {/* <p className="font-normal text-lg leading-8 text-gray-600 mb-12">
                This content aims to provide valuable information to users
                visiting the blog detail page within the UI design system,
                guiding them through various aspects of business loans in a
                clear and informative manner.
              </p> */}

              {/* <div className="head-1 mb-12">
                <h2 className="font-manrope font-semibold text-black mb-5 text-5xl leading-tight">
                  Small Business Administration (SBA) Loans:
                </h2>
                <p className="font-normal text-lg leading-8 text-gray-600">
                  SBA loans are government-backed loans designed to support
                  small businesses. They offer flexible terms, lower down
                  payments, and competitive rates. These loans cater to various
                  business needs, including working capital, real estate
                  purchase, or equipment financing, with longer repayment
                  periods and favorable terms.{" "}
                </p>
              </div>

              <div className="head-2 mb-12">
                <h3 className="font-manrope font-medium text-black mb-5 text-4xl">
                  Term Loans:
                </h3>
                <p className="font-normal text-lg leading-8 text-gray-600">
                  Term loans involve borrowing a lump sum of money that is
                  repaid over a specified period with a fixed or variable
                  interest rate. These loans are suitable for specific purposes
                  such as expansion, equipment purchases, or covering
                  operational costs. They typically have set monthly payments
                  and a defined repayment schedule.
                </p>
              </div>

              <div className="head-3 mb-12">
                <h4 className="font-manrope font-normal text-black mb-5 text-3xl leading-10">
                  Lines of Credit:
                </h4>
                <p className="font-normal text-lg leading-8 text-gray-600">
                  A business line of credit provides access to a set amount of
                  funds that can be used as needed. Similar to a credit card, it
                  offers flexibility in borrowing and repaying. Interest is
                  charged only on the amount used, making it ideal for managing
                  short-term expenses, covering gaps in cash flow, or handling
                  unexpected costs.{" "}
                </p>
              </div>

              <div className="head-4 mb-14">
                <h5 className="font-manrope font-normal text-black mb-5 text-2xl leading-9">
                  Equipment Financing:
                </h5>
                <p className="font-normal text-lg leading-8 text-gray-600">
                  Equipment financing specifically covers the purchase or lease
                  of machinery, vehicles, or other essential equipment. This
                  loan allows businesses to acquire necessary assets without
                  tying up large amounts of capital. The equipment itself serves
                  as collateral, often leading to favorable terms.
                </p>
              </div>

              <div className="topics mb-14">
                <h5 className="font-manrope font-semibold text-2xl leading-9 text-black mb-8">
                  Views on Topics
                </h5>

                <ul className="list-decimal list-outside ml-5">
                  <li className="font-normal text-lg leading-8 text-gray-600 pl-1">
                    Loan Terms and Conditions
                  </li>
                  <li className="font-normal text-lg leading-8 text-gray-600 pl-1">
                    Credit Scores and Requirements
                  </li>
                  <li className="font-normal text-lg leading-8 text-gray-600 pl-1">
                    Financial Management
                  </li>
                  <li className="font-normal text-lg leading-8 text-gray-600 pl-1">
                    Loan Repayment Strategies
                  </li>
                  <li className="font-normal text-lg leading-8 text-gray-600 pl-1">
                    Risk Assessment and Contingency Planning
                  </li>
                </ul>
              </div>

              <div className="comments">
                <h5 className="font-medium text-xl leading-8 text-gray-900 mb-8">
                  Comments
                </h5>
                <div className="flex flex-col sm:flex-row gap-x-9 gap-y-4 w-full mb-7">
                  <Image
                    src="https://pagedone.io/asset/uploads/1702355963.png"
                    alt="William image"
                    height="56"
                    width="56"
                    className="h-14 w-14 object-cover"
                  />
                  <div className="data w-full">
                    <div className="flex items-center justify-between w-full mb-5">
                      <div className="user">
                        <h6 className="font-medium text-xl leading-8 text-black mb-1">
                          William Smith
                        </h6>
                        <p className="font-normal text-sm leading-6 text-gray-500">
                          Product Designer
                        </p>
                      </div>
                      <button className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white">
                        Reply
                      </button>
                    </div>
                    <p className="font-normal text-base leading-7 text-gray-600 ">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-9 gap-y-4 w-full mb-16">
                  <Image
                    src="https://pagedone.io/asset/uploads/1702355983.png"
                    alt="Ankita image"
                    height="56"
                    width="56"
                    className="h-14 w-14 object-cover"
                  />
                  <div className="data w-full">
                    <div className="flex items-center justify-between w-full mb-5">
                      <div className="user">
                        <h6 className="font-medium text-xl leading-8 text-black mb-1">
                          Ankita Jha
                        </h6>
                        <p className="font-normal text-sm leading-6 text-gray-500">
                          Product Designer
                        </p>
                      </div>
                      <button className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white">
                        Reply
                      </button>
                    </div>
                    <p className="font-normal text-base leading-7 text-gray-600 ">
                      I have been using pagedone for several months now, and I
                      must say that it has made my life a lot easier. The
                      platform's intuitive interface and ease of use have
                      allowed me to manage my finances more effectively and make
                      informed investment decisions.
                    </p>
                  </div>
                </div>
              </div>
              <h5 className="font-medium text-xl leading-8 text-gray-900 mb-6">
                Leave a comment
              </h5> */}
              {/* <div className="reply bg-gray-100 rounded-xl p-5 border border-solid border-gray-300 w-full">
                <div className="flex items-center gap-x-9 gap-y-4 flex-col sm:flex-row mb-5">
                  <textarea
                    className="font-medium text-xl leading-8 placeholder:text-gray-500 text-gray-900 bg-transparent outline-0 w-full h-28"
                    placeholder="Type a comment here"
                  ></textarea>
                </div>
                <button className="rounded-full py-3 px-6 bg-indigo-600 shadow-md font-semibold text-sm text-white transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">
                  Post
                </button>
              </div> */}
            </div>
          </section>

          {/* <section className="py-12 lg:py-20 ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
                Our popular guides
              </h2>
              <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://pagedone.io/asset/uploads/1696244553.png"
                      alt="Harsh image"
                      height="56"
                      width="56"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <div className="block">
                    <h4 className="text-gray-900 font-medium leading-8 mb-9">
                      Fintech 101: Exploring the Basics of Electronic Payments
                    </h4>
                    <div className="flex items-center justify-between  font-medium">
                      <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                      <span className="text-sm text-indigo-600">
                        2 year ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://pagedone.io/asset/uploads/1696244579.png"
                      alt="John image "
                      height="56"
                      width="56"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <div className="block">
                    <h4 className="text-gray-900 font-medium leading-8 mb-9">
                      From Classroom to Cyberspace: The Growing Influence of
                      EdTech in Fintech
                    </h4>
                    <div className="flex items-center justify-between  font-medium">
                      <h6 className="text-sm text-gray-500">By John D.</h6>
                      <span className="text-sm text-indigo-600">
                        2 year ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://pagedone.io/asset/uploads/1696244619.png"
                      alt="Alexa image"
                      height="56"
                      width="56"
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <div className="block">
                    <h4 className="text-gray-900 font-medium leading-8 mb-9">
                      Fintech Solutions for Student Loans: Easing the Burden of
                      Education Debt
                    </h4>
                    <div className="flex items-center justify-between  font-medium">
                      <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                      <span className="text-sm text-indigo-600">
                        2 year ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">
                View All
              </button>
            </div>
          </section> */}
        </div>
      </section>
      <Footer />
    </>
  );
}
