import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Calendar from "../components/Calandar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // check if a logout vallue is in session storage
  useEffect(() => {
    if (sessionStorage.getItem("logout")) {
      toast.info("You have been logged out");
      sessionStorage.removeItem("logout");
    }
  }, []);

  return (
    <>
      <div className="bg-gray-200">
        <Head>
          <title>Rand Athletic Club</title>
          <meta name="description" content="An excellent Club" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Hero heading="Rand Athletic Club" message="Running afta criminaals" />
        {/* <Slider slides={SliderData} /> */}

        <Instagram />
        <div className="flex flex-col items-center justify-center p-4">
          <Calendar />
        </div>

        <Portfolio />
        {/* <ContactForm /> */}
      </div>
    </>
  );
};

export default Home;
