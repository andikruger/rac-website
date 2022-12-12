import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import heroImg from "../assets/toughone22.jpg";
import axios from "axios";

const Membership = () => {
  const [data, setData] = useState(null);
  // useEffect(() => {
  //   if (!data) {
  //     const url = `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22fees%22%5D`;
  //     axios.get(url).then((res) => {
  //       console.log("called");
  //       setData(res.data.result);
  //     });
  //   }
  // }, [data]);
  return (
    <>
      <Head>
        <title>Membership | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="Membership" message="" image={heroImg} />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0 rac-colour">
          Membership Fees
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* column one */}
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
            <div className="w-full">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Family Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Child</p>
                  <p className="text-sm text-gray-500">under 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">under 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">over 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-row m-4 lg:w-1/2">
            <div className="w-full p-4  rounded-lg shadow-lg bg-white">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Masters Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* column one */}
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
            <div className="w-full">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Social Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-row m-4 lg:w-1/2">
            <div className="w-full p-4  rounded-lg shadow-lg bg-white">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Masters Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* column one */}
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
            <div className="w-full">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Family Membership
              </h2>

              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">under 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">over 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-row m-4 lg:w-1/2">
            <div className="w-full p-4  rounded-lg shadow-lg bg-white">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Masters Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
