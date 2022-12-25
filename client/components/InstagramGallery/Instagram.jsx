import React, { useState } from "react";
import IgImg1 from "../../assets/instagram/instagram_preview1.png";
import IgImg2 from "../../assets/instagram/instagram_preview2.png";
import IgImg3 from "../../assets/instagram/instagram_preview3.png";
import IgImg4 from "../../assets/instagram/instagram_preview4.jpg";
import IgImg5 from "../../assets/instagram/instagram_preview5.jpg";
import IgImg6 from "../../assets/instagram/instagram_preview6.jpg";
import InstagramImg from "./InstagramImg";
import axios from "axios";

const Instagram = () => {
  // make a get request to the instagram api
  // get the data and store it in a variable

  //const url "https://api.instagram.com/v1/users/self/media/recent/?access_token=ACCESS-TOKEN";
  const url = "https://feeds.behold.so/q5mTtvctgvraVhPu2CYm";
  const [data, setData] = useState([]);
  let done = false;

  let response = undefined;

  return (
    <div className="shadow-xl animate Card max-w-[1240px] mx-auto text-center py-4 bg-white rounded-lg">
      <p className="text-2xl font-bold">Follow us on Instagram 📸</p>
      <p className="pb-4 hover rac-colour"><a href="https://instagram.com/randathleticclub" target="_blank">@randathleticclub</a></p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg socialImg={IgImg1} />
        <InstagramImg socialImg={IgImg2} />
        <InstagramImg socialImg={IgImg3} />
        <InstagramImg socialImg={IgImg4} />
        <InstagramImg socialImg={IgImg5} />
        <InstagramImg socialImg={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
