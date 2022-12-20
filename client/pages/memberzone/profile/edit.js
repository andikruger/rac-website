import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { BsInstagram } from "react-icons/bs";
import { toast } from "react-toastify";
import heroImg from "../../../assets/toughone22.jpg";
import jwt from "jsonwebtoken";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

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
        setForm_data({
          name: res.data.result[0].name,
          email: res.data.result[0].email,
          dateofjoining: res.data.result[0].dateofjoining,
          phone: res.data.result[0].phone,
          license: res.data.result[0].licenseNumber,
        });
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

  const [form_data, setForm_data] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForm_data({ ...form_data, [e.target.name]: e.target.value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form_data);

    try {
      axios
        .put(`/api/users/editProfile/${user._id}`, form_data)
        .then((res) => {
          if (res.data.success) {
            toast.success(res.data.message);
          }
        })
        .catch((err) => {
          const errors = err.response.data.message;
          console.log(errors);
          // error is in the form of {type: "message"} use toasts to display
          toast.error(errors);
        });
    } catch (err) {
      console.log("in catch");
      console.log(err);
    }
  }

  return (
    data && (
      <>
        <Head>
          <title>Edit Profile | Rand Athletic Club</title>
        </Head>
        <div
          style={styling}
          className="flex items-center justify-center  h-screen mb-12 bg-fixed bg-center bg-cover"
        >
          {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 " /> */}
          <div className="p-5 text-white  z-[2] mt-[-10rem]">
            {/* glassmorphism card start */}
            {/* create a profile card with avatar in glassmorphism */}
            <div className="Card flex flex-col pt-4 items-center pt-6 w-96 h-120 bg-white rounded-3xl shadow-2xl glass-nav">
              {/* add personal information */}

              <form
                className="rounded pt-6 p-4 pb-8 mb-4 w-full max-w-sm"
                onSubmit={handleSubmit}
              >
                <div className="pb-2 relative">
                  <input
                    type="text"
                    id="name"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="name"
                    value={form_data.name}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Name
                  </label>
                </div>
                <div className="pb-2 relative">
                  <input
                    type="date"
                    id="dateofjoining"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="dateofjoining"
                    value={form_data.dateofjoining}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="dateofjoining"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Date of Joining
                  </label>
                </div>
                <div className="pb-2 relative">
                  <input
                    type="email"
                    id="email"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="email"
                    value={form_data.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Email
                  </label>
                </div>

                <div className="pb-2 relative">
                  <input
                    type="text"
                    id="phone"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="phone"
                    value={form_data.phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your Phone
                  </label>
                </div>

                <div className="pb-2 relative">
                  <input
                    type="text"
                    id="license"
                    className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                    placeholder=" "
                    name="license"
                    value={form_data.license}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="license"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Your License Number
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="w-full mt-4 py-2 px-4 rounded-lg text-white bg-[#67162c] hover:bg-[#67162c] focus:outline-none focus:ring-2 focus:ring-[#67162c] focus:ring-opacity-50"
                  >
                    Save
                  </button>
                </div>
              </form>

              {/* add an edit button  */}
            </div>

            {/* glassmorphism end */}
          </div>
        </div>
      </>
    )
  );
};

export default Profile;
