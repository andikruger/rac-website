import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
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
        <title>Membership | Rand Athletic Club</title>
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
          Membership
        </h1>

        {/* create a full width card with lorem ipsum*/}
        {/* <div className="flex flex-row rounded-lg shadow-lg m-4 bg-white">
          <div className="w-full">
            <h2 className="text-3xl font-bold rac-colour text-center text-bold text-strong m-4">
              Early Bird Discount
            </h2>
            <p className="text-center text-lg text-gray-500 m-4">
              Subscription payments made during December and January pay only R
              500 plus R 140 license fee
            </p>
          </div>
        </div> */}

        <div className="flex flex-col md:flex-row justify-center  items-center">
          <div className="flex flex-row rounded-lg shadow-lg m-4 bg-white ">
            <div className="w-full">
              <p className="text-lg text-center  text-strong m-4">
                RAC Memberships run from 1 January to 31 December each year.
              </p>
              <p className="text-lg text-center  text-strong m-4">
                As a member you are entitled to participate in all club
                activities as well as all club facilities and club house.
              </p>
              <p className="text-lg text-center  text-strong m-4">
                The Membership fees include the ASA and CGA license fee, which
                means you recive a license number and are not required to pay
                the temporary fee on a race day.
              </p>

              <p className="text-lg text-center  text-strong m-4">
                Members are encouraged to help out at club events at least once
                a year. (Especialy at Tough One)
              </p>

              <p className="text-lg text-center  text-strong m-4">
                Memberships can be found here
              </p>
              <div className="flex flex-row justify-center pb-4 items-center">
                <Link legacyBehavior href="/membership/fees">
                  <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
                    Fees
                  </a>
                </Link>
              </div>

              {/* create a secondary title saying "join RAC" */}
              <h2 className="text-xl font-bold rac-colour text-center text-bold text-strong m-4">
                Join RAC
              </h2>
              <p className="text-lg text-center  text-strong m-4">
                To join RAC, please complete the{" "}
                <span className="font-bold rac-colour">RAC membership</span>{" "}
                {"  "}
                form as well as the{" "}
                <span className="font-bold rac-colour">
                  CGA/ASA license application form
                </span>{" "}
                and hand it in at the club house on tuesday from 16:30 to 18:30.
              </p>
              <div className="flex flex-row justify-center pb-4 items-center">
                {/* create a div that adds a space between each element */}
                <Link
                  legacyBehavior
                  href="/documents/RAC_registration_form.pdf"
                >
                  <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
                    RAC Membership Form
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center pb-4 items-center">
                {/* create a div that adds a space between each element */}

                <Link legacyBehavior href="/documents/ASA_Licence_Form.pdf">
                  <a className="pr-4 bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
                    ASA/CGA License Application Form
                  </a>
                </Link>
              </div>
              <p className="text-lg text-center  text-strong m-4">
                Alternatively, you can fill out the{" "}
                <span className="font-bold rac-colour">
                  RAC membership form
                </span>{" "}
                online and print it out.
              </p>

              <div className="flex flex-row justify-center pb-4 items-center">
                {/* create a div that adds a space between each element */}
                <Link legacyBehavior href="membership/join">
                  <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
                    Online RAC Membership Form
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fees;
