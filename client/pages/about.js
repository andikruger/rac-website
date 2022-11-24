import Head from "next/head";
import Hero from "../components/Hero/Hero";
import History from "../components/About/History";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact/Contact";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="About RAC" message="Lets go for a run" />
      <History />
    </>
  );
};

export default About;
