import { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Portfolio from "../components/Portfolio/Portfolio";
import Calendar from "../components/Calandar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// test
import { scheduleData } from "../pages/test/dummy";

const Home = () => {
  const [data, setData] = useState([]);
  const [isDataSet, setIsDataSet] = useState(false);

  // create a function to fetch the data from the API
  const fetchData = async () => {
    const response = await fetch(
      "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%5D"
    );
    const result = await response.json();

    const dateObj = result.result.map((item) => {
      // auto increment the id
      // set endtime to 1 hour after start time

      let endTime = new Date(item.startTime);
      endTime.setHours(endTime.getHours() + 3);

      return {
        // id auto increments
        Id: item._id,
        Subject: item.name,
        StartTime: item.startTime,
        EndTime: endTime,
        IsAllDay: false,
        CategoryColor: "#67162c",
        Location: item.venue,
        Description: `You can get more information on the <a class="hover rac-colour text-bold" href="http://randathleticclub.co.za/race/${item.slug.current}" target="_blank">Race Page</a>`,
      };
    });
    console.log(dateObj);
    setData(dateObj);
  };

  // check if a logout vallue is in session storage
  useEffect(() => {
    if (!isDataSet) {
      fetchData();
      setIsDataSet(true);
    }

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
          <Calendar data={data} />
        </div>

        <Portfolio />
        {/* <ContactForm /> */}
      </div>
    </>
  );
};

export default Home;
