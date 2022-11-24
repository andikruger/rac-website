import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import ContactForm from "../components/Contact/Contact";

const Home = () => {
  return (
    <>
      <Head>
        <title>Rand Athletic Club</title>
        <meta name="description" content="An excellent Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Rand Athletic Club" message="Lets go for a run" />
      {/* <Slider slides={SliderData} /> */}
      
      <Instagram />

      <Portfolio />
      {/* <ContactForm /> */}
    </>
  );
};

export default Home;
