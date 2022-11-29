import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/Contact/Contact";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // check if a logout vallue is in session storage
  useEffect(() => {
    if (sessionStorage.getItem("logout")) {
      toast.info("You have been logged out");
      sessionStorage.removeItem("logout");
    }
    if (sessionStorage.getItem("login")) {
      toast.success(sessionStorage.getItem("login"));
      sessionStorage.removeItem("login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rand Athletic Club</title>
        <meta name="description" content="An excellent Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading="Rand Athletic Club" message="Running afta criminaals" />
      {/* <Slider slides={SliderData} /> */}

      <Instagram />

      <Portfolio />
      {/* <ContactForm /> */}
    </>
  );
};

export default Home;
