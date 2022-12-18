import { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import Races from "../components/Races";
import Instagram from "../components/InstagramGallery/Instagram";
import LatestNews from "../components/LatestNews/LatestNews";
import Calendar from "../components/Calandar";
import { toast } from "react-toastify";
import heroImg from "../assets/memberphoto.jpg";
import "react-toastify/dist/ReactToastify.css";

// test
import { scheduleData } from "../pages/test/dummy";

const Home = () => {
  return (
    <>
      <div className="bg-gray-200">
        <Head>
          <title>Rand Athletic Club</title>
          <meta name="description" content="An excellent Club" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero heading="Rand Athletic Club" message="" image={heroImg} />
        {/* <Slider slides={SliderData} /> */}

        <Instagram />
        <div className="flex flex-col items-center justify-center p-4">
          <Races />
        </div>

        <LatestNews />
        {/* <ContactForm /> */}
      </div>
    </>
  );
};

export default Home;
