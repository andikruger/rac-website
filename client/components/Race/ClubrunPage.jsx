import React from "react";
import Head from "next/head";
import HeroSmall from "../Hero/HeroSmall";
import moment from "moment";
import heroImg from "../../assets/clubrun.png";
import AtributeCard from "./AtributeCard";
const ClubRunPage = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.name} | Rand Athletic Club</title>
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
      <HeroSmall heading={data.name} message="" image={heroImg} />
      {/* create a full width container in which are two half width AtributeCard */}
      <div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">{"Date"}</h2>
              <p
                key={Math.random()}
                className="text-xl text-center text-strong m-4"
              >
                {moment(data.date).format("DD MMMM YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">
                {"Start Time"}
              </h2>
              {data.time.map((item) => (
                <p
                  key={Math.random()}
                  className="text-xl text-center text-strong m-4"
                >
                  {moment(item).format("HH:mm")}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">
                {"Distance"}
              </h2>
              {data.distance.map((item) => (
                <p
                  key={Math.random()}
                  className="text-xl text-center text-strong m-4"
                >
                  {item} km
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">Map</h2>
              {data.map ? (
                <iframe
                  src={`https://www.plotaroute.com/embedmap/${data.map}?units=km`}
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "1rem" }}
                  allowFullScreen=""
                  overflow="hidden"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <p
                  key={Math.random()}
                  className="text-xl text-center text-strong m-4"
                >
                  {"No map available"}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClubRunPage;
