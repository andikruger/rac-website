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
        <link rel="icon" href="/favicon.ico" />
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
