import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import heroImg from "../../assets/toughone22.jpg";

const Hero = ({ heading, message }) => {
  useEffect(() => {
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
    //backgroundImage: `url(${heroImg.src})`,
    backgroundImage: `url(https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80)`,
  };

  return (
    <>
      <div
        style={styling}
        className="flex items-center justify-center  h-screen mb-12 bg-fixed bg-center bg-cover"
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

          {/* HEADING */}
          {/* <h2 className="text-5xl text-white font-bold">{heading}</h2> */}
          {/* <p className="py-5 text-xl">{message}</p>
          <Link href="/#portfolio" passHref>
            <button className="px-8 py-2 border">Here</button>
          </Link> */}
        </div>
      </div>

      {/* <div className="absolute bottom-0 z-10 w-full h-auto -mb-1 header-shape">
        <Image src={shape} alt="shape" width={"100%"} />
      </div> */}
    </>
  );
};

export default Hero;
