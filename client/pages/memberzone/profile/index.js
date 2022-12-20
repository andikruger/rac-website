import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import heroImg from "../../../assets/toughone22.jpg";
import jwt from "jsonwebtoken";
import axios from "axios";
import moment from "moment";

const Profile = ({ heading, message }) => {
  const [user, setUser] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decoded = jwt.decode(token);
    setUser(decoded);
    if (!data) {
      const url = `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22user%22%20%26%26%20_id%20%3D%3D%20%24_id%20%5D&%24_id=%22${decoded._id}%22`;
      axios.get(url).then((res) => {
        setData(res.data.result[0]);
      });
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
        } else {
          entry.target.classList.remove("shown");
        }
      });
    });

    let x, i;
    x = document.querySelectorAll(".blogimg");
    for (i = 0; i < x.length; i++) {
      x[i].classList.add("animated");
    }

    const animated = document.querySelectorAll(".animated");
    animated.forEach((el) => observer.observe(el));

    const Card = document.querySelector(".Card");

    const cardFlip = () => {
      const first = Card.getBoundingClientRect();

      showMenu();

      const last = Card.getBoundingClientRect();

      const deltaX = first.left - last.left;
      const deltaY = first.top - last.top;
      const deltaW = first.width / last.width;
      const deltaH = first.height / last.height;

      Card.animate(
        [
          {
            transformOrigin: "top left",
            transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
    `,
          },
          {
            transformOrigin: "top left",
            transform: "none",
          },
        ],
        {
          duration: 300,
          easing: "ease-in-out",
          fill: "both",
        }
      );
    };
  }, []);

  const styling = {
    backgroundImage: `url(${heroImg.src})`,
  };

  console.log(data);

  return (
    data && (
      <>
        <Head>
          <title>Profile | Rand Athletic Club</title>
        </Head>
        <div
          style={styling}
          className="flex items-center justify-center  h-screen mb-12 bg-fixed bg-center bg-cover"
        >
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 " /> */}
          <div className="p-5 text-white  z-[2] mt-[-10rem]">
            {/* glassmorphism card start */}
            {/* create a profile card with avatar in glassmorphism */}
            <div className="Card flex flex-col items-center pt-6 w-96 h-96 bg-white rounded-3xl shadow-2xl glass-nav">
              <div className="flex flex-col items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl">
                <img
                  src={`https://ui-avatars.com/api/?name=${user.name}&rounded=true&size=256`}
                  alt="avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center mt-4">
                <h1 className="text-2xl font-semibold">{user.name}</h1>
                <h2 className="text-xl font-medium text-gray-500">
                  Member since{" "}
                  {data.dateofjoining
                    ? moment(data.dateofjoining).format("MMMM YYYY")
                    : "N/A"}
                </h2>
              </div>
              {/* add personal information */}
              <div className="flex flex-col items-center justify-center mt-4">
                <h2 className="text-xl font-medium text-gray-500">
                  <p>Email: {user.email}</p>
                </h2>
                <h2 className="text-xl font-medium text-gray-500">
                  <p>Phone: {data.phone || "N/A"}</p>
                </h2>

                <h2 className="text-xl font-medium text-gray-500">
                  <p>License Number: {data.licenseNumber || "N/A"}</p>
                </h2>
              </div>
              {/* add an edit button  */}
              <div className="flex flex-col items-center justify-center mt-4">
                <Link legacyBehavior href="/memberzone/profile/edit">
                  <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#67162c] rounded-md shadow-md hover:bg-[#470819] focus:outline-none focus:ring-2 focus:ring-[#470819] dark-hover focus:ring-offset-2 focus:ring-offset-white">
                    Edit
                  </a>
                </Link>
              </div>
            </div>

            {/* glassmorphism end */}
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
