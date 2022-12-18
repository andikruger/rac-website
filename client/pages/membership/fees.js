import React, { useEffect, useState } from "react";
import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import heroImg from "../../assets/toughone22.jpg";
import axios from "axios";

const Fees = () => {
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
        <title>Fees | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="Membership Fees" message="" image={heroImg} />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0 rac-colour">
          Membership Fees
        </h1>

        {/* create a full width card with lorem ipsum*/}
        <div className="flex flex-row rounded-lg shadow-lg m-4 bg-white">
          <div className="w-full">
            <h2 className="text-3xl font-bold rac-colour text-center text-bold text-strong m-4">
              Early Bird Discount
            </h2>
            <p className="text-center text-lg text-gray-500 m-4">
              Subscription payments made during December and January pay only R
              500 plus R 140 license fee
            </p>
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
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>

                <p className="text-strong">Base Fee: R 600</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 740</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">26-59 years</p>
                </div>
                <p className="text-strong">Base Fee: R 100</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 240</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Child</p>
                  <p className="text-sm text-gray-500">under 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 100</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 240</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">under 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 50</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 190</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Additional Child</p>
                  <p className="text-sm text-gray-500">over 19 years</p>
                </div>
                <p className="text-strong">Base Fee: R 100</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 240</p>
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
                  <p className="text-sm text-gray-500">60 - 69 years</p>
                </div>

                <p className="text-strong">Base Fee: R 450</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 590</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">60 - 69 years</p>
                </div>
                <p className="text-strong">Base Fee: R 50</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 190</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* column one */}
          {/* column one */}
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white">
            <div className="w-full">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Student/Youth Membership
              </h2>

              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Student/Youth</p>
                  <p className="text-sm text-gray-500">under 25 years</p>
                </div>
                <p className="text-strong">Base Fee: R 110</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 250</p>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-row m-4 lg:w-1/2">
            <div className="w-full p-4  rounded-lg shadow-lg bg-white">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Grand Masters Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500">70 - 79 years</p>
                </div>

                <p className="text-strong">Base Fee: R 100</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 240</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                {/* <div className="flex flex-col">
                  <p className="text-strong">Member Spouse</p>
                  <p className="text-sm text-gray-500">70 - 79 years</p>
                </div>
                <p className="text-strong">Base Fee: R 500</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 640</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center  items-center">
          {/* column one */}
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-1/2 bg-white ">
            <div className="w-full">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Honorary Life Membership
              </h2>

              <div className="flex flex-row justify-between m-4">
                <div className="flex flex-col">
                  <p className="text-strong">Honorary Life Member</p>
                  <p className="text-sm text-gray-500"></p>
                </div>
                <p className="text-strong">Base Fee: nil</p>
                <p className="text-strong">License fee: R 140</p>
                <p className="text-strong">Total fee: R 140</p>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="flex flex-row m-4 lg:w-1/2">
            <div className="w-full p-4  rounded-lg shadow-lg bg-white">
              <h2 className="text-xl text-center text-bold text-strong m-4">
                Social Membership
              </h2>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Primary Member</p>
                  <p className="text-sm text-gray-500"></p>
                </div>

                <p className="text-strong">Base Fee: R 400</p>
                <p className="text-strong">License fee: No License</p>
                <p className="text-strong">Total fee: R 400</p>
              </div>
              <div className="flex flex-row justify-between m-4">
                {/* create a text with "Primary Member" and secondary text underneath with 26-59 years */}
                <div className="flex flex-col">
                  <p className="text-strong">Grand Master Social</p>
                  <p className="text-sm text-gray-500"></p>
                </div>

                <p className="text-strong">Base Fee: R 100</p>
                <p className="text-strong">License fee: No License</p>
                <p className="text-strong">Total fee: R 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fees;
