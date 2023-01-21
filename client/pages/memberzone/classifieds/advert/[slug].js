import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import HeroSmall from "../../../../components/Hero/HeroSmall.jsx";
import AtributeCard from "../../../../components/Race/AtributeCard.jsx";
import heroImg from "../../../../assets/adverthero.jpg";
const RaceView = () => {
  // get the slug from the url theory
  const router = useRouter();
  const { slug } = router.query;
  // get the race details from the api
  const [data, setData] = useState(null);
  const getData = async () => {
    const url = `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22race%22%20%26%26%20slug.current%20%3D%3D%20%24slug%20%5D&%24slug=%22${slug}%22`;
    axios.get(url).then((res) => {
      setData(res.data.result[0]);
    });
  };

  // useEffect(() => {
  //   if (!data) {
  //     getData();
  //   }
  // }, [data]);

  return (
    <>
      <HeroSmall
        heading={"Adidas Ultraboost 23 UK 12"}
        message="Selling my Adidas Ultraboost 23 UK 12. "
        image={heroImg}
      />
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-row rounded-lg shadow-lg m-4 w-full bg-white">
          <div className="w-full">
            <h2 className="text-2xl text-center text-strong m-4">
              Adidas Ultraboost 23 UK 12
            </h2>
            {/* add the price */}
            <p className="text-center text-xl text-strong m-4">£200</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-row rounded-lg shadow-lg m-4 w-full bg-white">
          <div className="w-full">
            <h2 className="text-2xl text-center text-strong m-4">
              {/*  add an image and center it in the div */}
              <img
                src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b021aabd9254426f99e3ad2000309d0e_9366/adidas_Ultraboost_DNA_x_LEGOr_Colors_Laufschuh_Schwarz_H67953_01_standard.jpg"
                alt="Adidas Ultraboost 23 UK 12"
                className="mx-auto w-1/2 h-1/2"
              />
            </h2>
          </div>
        </div>
      </div>
      {/* create a description card */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-row rounded-lg shadow-lg m-4 w-full bg-white">
          <div className="w-full">
            <h2 className="text-2xl text-center text-strong m-4">
              Description
            </h2>
            <p className="text-center text-strong m-4">
              Selling my Adidas Ultraboost 23 UK 12. I have only worn them a few
              times and they are in great condition. I am selling them as I have
              bought a new pair. They are a size 12 and are in black. They are
              very comfortable and have a great design. They are a great pair of
              running shoes and are perfect for the gym. They are a great pair
              of shoes and are in great condition. I am selling them for £100.
              If you are interested please contact me on 07777777777.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <AtributeCard name="Seller" value={"Geoff"} />
        <AtributeCard name="Email" value={"info@example.com"} />
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <AtributeCard name="Phone Number" value={"0123456789"} />
        <AtributeCard name="Whatsapp" value={"01234567890"} />
      </div>
    </>
  );
};

export default RaceView;
