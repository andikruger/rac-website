import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import HeroSmall from "../../components/Hero/HeroSmall";
import heroImg from "../../assets/toughone22.jpg";
import axios from "axios";

const Fees = () => {
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  return (
    <>
      <Head>
        <title>Fees | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <HeroSmall heading="Membership" message="" image={heroImg} />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0 rac-colour">
          Join RAC
        </h1>

        <div className="flex flex-col md:flex-row justify-center  items-center">
          <div className="flex flex-row rounded-lg shadow-lg m-4 bg-white ">
            <div className="w-full">
              <p className="text-lg text-center  text-strong m-4">
                Fill out the form below to generate a membership form. You can
                then print the form and send it to the club with your payment.
              </p>
              {/* create an application form */}
              <form className="flex flex-col justify-center items-center m-4">
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="surname"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="surname"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="surname"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Surname
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="firstname"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="firstname"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="firstname"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your First Name
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="date"
                    id="dob"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="dob"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="dob"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Date of Birth
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="tel"
                    id="homephone"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="homephone"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="homephone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Home Phone Number
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="tel"
                    id="workphone"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="workphone"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="workphone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Work Phone Number
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="tel"
                    id="cellphone"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="cellphone"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="cellphone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Cell Phone Number
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="email"
                    id="email"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="email"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your email address
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="postaladdresslineone"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="postaladdresslineone"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="postaladdresslineone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Postal Address Line 1
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="postaladdresslinetwo"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="postaladdresslinetwo"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="postaladdresslinetwo"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Postal Address Line 2
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="postaladdresslinethree"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="postaladdresslinethree"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="postaladdresslinethree"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Postal Address Line 3
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="postaladdresslinefour"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="postaladdresslinefour"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="postaladdresslinefour"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Postal Address Line 4
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="postalcode"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="postalcode"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="postalcode"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Postal Code
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="occupation"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="occupation"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="occupation"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Occupation
                  </label>
                </div>
                <div className="pb-2 w-3/4 relative">
                  <input
                    type="text"
                    id="provlicence"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="provlicence"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="provlicence"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Provisional Licence Number
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fees;
