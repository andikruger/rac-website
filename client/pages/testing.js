import Head from "next/head";
import { useState, useEffect } from "react";
import HeroSmall from "../components/Hero/HeroSmall";
import ContactForm from "../components/Contact/Contact";
import heroImg from "../assets/toughone22.jpg";
import Calendar from "../components/Calandar";
const Races = () => {
  const [data, setData] = useState([]);
  async function getApiResponse(apiUrl) {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // for every element in the array, add the element test to the object which has the value of the slug.current

      setData(data.result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    getApiResponse(
      "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%5D"
    );
  }, []);

  const dateObj = data.map((item) => {
    let endTime = new Date(item.startTime);
    endTime.setHours(endTime.getHours() + 3);
    if (!item.slug.current) {
      item.slug.current = "test";
    }

    return {
      Id: item._id,
      Subject: item.name,
      StartTime: item.startTime,
      EndTime: endTime,
      IsAllDay: false,
      CategoryColor: "#67162c",
      Location: item.venue,

      Description: `You can get more information on the <a class="hover rac-colour text-bold" href="/race/${item.slug.current}" target="_blank">Race Page</a>`,
    };
  });
  // log the first three elements of the array;
  console.log(data.slice(0, 3));

  return (
    <>
      <Head>
        <title>Races | Rand Athletic Club</title>
      </Head>
      <HeroSmall heading="Races through the year" message="" image={heroImg} />
      <div className="flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-6xl">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            This is a testing page
          </h1>
        </div>
        {<Calendar data={dateObj} />}
      </div>
    </>
  );
};

export default Races;
