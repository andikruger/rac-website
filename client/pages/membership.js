import React from "react";
import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import heroImg from "../assets/toughone22.jpg";

const Membership = () => {
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
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            {/* create a section where membership fees are listed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
