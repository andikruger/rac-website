import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import RacePage from "../../components/Race/RacePage";
const RaceView = () => {
  // get the slug from the url theory
  const router = useRouter();
  const { slug } = router.query;
  // get the race details from the api
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      const url = `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%20%26%26%20slug.current%20%3D%3D%20%24slug%20%5D&%24slug=%22${slug}%22`;
      axios.get(url).then((res) => {
        console.log("called");
        setData(res.data.result[0]);
      });
    }
  }, [data]);

  // const google_maps_url = `https://maps.google.com/maps?q=${raceData.startLocation.lat},${raceData.startLocation.lng}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  //add a "km to every distance in the array"

  return data && <RacePage data={data} />;
};
export default RaceView;