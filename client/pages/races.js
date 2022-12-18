import Head from "next/head";
import { useState, useEffect } from "react";
import HeroSmall from "../components/Hero/HeroSmall";
import ContactForm from "../components/Contact/Contact";
import heroImg from "../assets/toughone22.jpg";

import Calendar from "../components/Calandar";
const Races = () => {
  const [data, setData] = useState([]);
  const [isDataSet, setIsDataSet] = useState(false);
  const [clubruns, setClubruns] = useState([]);
  const [combined, setCombined] = useState([]);
  const [isCombined, setIsCombined] = useState(false);

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
        Description: `You can get more information on the <a class="hover rac-colour text-bold" href="/race/${item.slug.current}" target="_blank">Race Page</a>`,
      };
    });

    setData(dateObj);
  };
  const fetchClubRuns = async () => {
    const response = await fetch(
      "https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22clubrun%22%5D"
    );
    const result = await response.json();

    const dateObj = result.result.map((item) => {
      // auto increment the id
      // set endtime to 1 hour after start time

      let endTime = new Date(item.time[0]);
      endTime.setHours(endTime.getHours() + 3);

      return {
        // id auto increments
        Id: item._id,
        Subject: item.name,
        StartTime: item.time[0],
        EndTime: endTime,
        IsAllDay: false,
        CategoryColor: "#246635",
        Location: item.name,
        Description: `You can get more information on the <a class="hover rac-colour text-bold" href="/race/" target="_blank">Race Page</a>`,
      };
    });

    setClubruns(dateObj);
  };
  // check if a logout vallue is in session storage
  useEffect(() => {
    if (!isDataSet) {
      fetchData();
      fetchClubRuns();

      // add the clubruns to the data
      setCombined([...data, ...clubruns]);

      setIsDataSet(true);
    }

    // push the clubrun items to the data array
    let temp = [];
    data.forEach((item) => {
      temp.push(item);
    });
    clubruns.forEach((item) => {
      temp.push(item);
    });

    setCombined(temp);
    setIsCombined(true);
  }, []);
  return (
    <>
      <Head>
        <title>Races | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="Races through the year" message="" image={heroImg} />
      <div className="flex flex-col items-center justify-center p-4">
        {<Calendar data={data} />}
      </div>
    </>
  );
};

export default Races;
