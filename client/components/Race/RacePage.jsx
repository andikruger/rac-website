import React from "react";
import Head from "next/head";
import HeroSmall from "../Hero/HeroSmall";
import moment from "moment";
import heroImg from "../../assets/racepage.jpg";
import AtributeCard from "./AtributeCard";
const RacePage = ({ data }) => {
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
          <AtributeCard
            name="Date"
            value={moment(data.date).format("Do MMMM YYYY")}
          />
          <AtributeCard
            name="Start Time"
            value={moment(data.startTime).format("HH:mm")}
          />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">
                {"Distance"}
              </h2>
              {data.distance.map((distance) => (
                <p
                  key={Math.random()}
                  className="text-xl text-center text-strong m-4"
                >
                  {distance} km
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <AtributeCard name="Venue" value={data.venue} />
          <AtributeCard name="Province" value={data.province} />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-row rounded-lg shadow-lg m-4 lg:w-full bg-white">
            <div className="w-full">
              <h2 className="text-2xl text-center text-strong m-4">Location</h2>
              <iframe
                src={`https://maps.google.com/maps?q=${data.startLocation.lat},${data.startLocation.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <AtributeCard name="Club" value={data.club.clubName || "N/A"} />
          <AtributeCard
            name="Contact"
            value={data.club.contactPerson || "N/A"}
          />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <AtributeCard name="Email" value={data.club.contactEmail || "N/A"} />
          <AtributeCard
            name="Phone Number"
            value={data.club.contactNumber || "N/A"}
          />
        </div>
      </div>
    </>
  );
};

export default RacePage;
