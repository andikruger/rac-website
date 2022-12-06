import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import heroImg from "../../assets/toughone22.jpg";
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const Hero = ({ heading, message }) => {
  // create a client instance
  const client = sanityClient({
    projectId: "yavqngwf",
    dataset: "production",
    useCdn: true,
  });

  // create a function to build the image url
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    // let url = urlFor(
    //   "image-0da4e8c76f625ad78280a2283caf4a4f9582d33b-5472x3648-jpg"
    // )
    //   .auto("format")
    //   .fit("max")
    //   .width(720)
    //   .focalPoint(0.5, 0.5)
    //   .toString();

    // console.log(url);
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

  // const styling = {
  //   //backgroundImage: `url(${heroImg.src})`,
  //   backgroundImage: `url(https://cdn.sanity.io/images/yavqngwf/production/0da4e8c76f625ad78280a2283caf4a4f9582d33b-5472x3648.jpg?fp-x=0.5&fp-y=0.5&w=5000&fit=max&auto=format)`,
  //   backgroundPosition: `50% 55%`,
  //   backgroundSize: `cover`,
  // };

  return (
    <>
      <div
        // style={styling}
        className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover hero-img"
      >
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 " /> */}
        <div className="p-5 text-white  z-[2] mt-[-10rem]">
          {/* glassmorphism card start */}
          <div className="Card mt-20 animated z-10 rounded-xl backdrop-blur-lg border-[1px] border-[#5353532c] shadow-2xl shadow-black bg-[#1414143d] w-[330px] h-[300px] md:w-[500px] md:h-[250px] flex flex-col overflow-hidden">
            <div className="text-white flex justify-between mx-auto w-[80%] h-[35%]">
              <div className="flex flex-row gap-1 items-center">
                <div className="text-3xl text-white font-bold">{heading}</div>
              </div>
            </div>

            <div className="text-center py-5 text-xl font-mono">{message}</div>

            <div className="mx-auto flex flex-row justify-around w-[18em] h-[25%] hoverable">
              <BsInstagram
                className="w-[1.15em] media"
                onClick={() =>
                  window.open("https://www.instagram.com/randathleticclub/")
                }
              />
              <FaFacebookSquare
                className="w-[1.5] media"
                onClick={() =>
                  window.open("https://www.facebook.com/randathleticclub/")
                }
              />
            </div>
          </div>

          {/* glassmorphism end */}
        </div>
      </div>
    </>
  );
};

export default Hero;
