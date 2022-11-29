import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ResetPassword = () => {
  const router = useRouter();
  const { resetToken } = router.query;

  const [form_data, setForm_data] = useState({
    password: "",
    confirmPassword: "",
  });
  function confirmPassword() {
    if (form_data.password !== form_data.confirmPassword) {
      return false;
    }
    return true;
  }
  function handleChange(e) {
    setForm_data({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(form_data);
    if (confirmPassword()) {
      try {
        axios
          .put(`/api/users/resetpassword/${resetToken}`, form_data)
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
    } else {
      toast.error("Passwords do not match");
      setForm_data({
        ...form_data,
        password: "",
        confirmPassword: "",
      });
    }
  }

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

  return (
    <>
      <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover resetpassword-img">
        {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 " /> */}
        <div className=" absolute p-5 text-white z-[2] mt-[-10rem]">
          {/* glassmorphism card start */}
          <div className="Card animated z-10 rounded-xl backdrop-blur-lg border-[1px] border-[#5353532c] shadow-2xl shadow-black bg-[#1414143d] w-[330px] h-auto md:w-[500px] md:h-auto flex flex-col overflow-hidden">
            <div className="text-3xl text-white  font-bold text-center py-5 text-xl font-mono">
              Reset Password
            </div>
            {/* Reset Password form start */}
            <form
              className="rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit}
            >
              <div className="pb-2 relative">
                <input
                  type="password"
                  id="password"
                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                  placeholder=" "
                  name="password"
                  value={form_data.password}
                  onChange={handleChange}
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Your new Password
                </label>
              </div>
              <div className="pb-2 relative">
                <input
                  type="password"
                  id="confirmPassword"
                  className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#67162c] peer"
                  placeholder=" "
                  name="confirmPassword"
                  value={form_data.confirmPassword}
                  onChange={handleChange}
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#67162c] peer-focus:dark:text-[#67162c] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Confirm new Password
                </label>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full mt-4 py-2 px-4 rounded-lg text-white bg-[#67162c] hover:bg-[#67162c] focus:outline-none focus:ring-2 focus:ring-[#67162c] focus:ring-opacity-50"
                >
                  Reset Password
                </button>
              </div>
            </form>
            <div className="pb-2">
              <div className="text-center text-white text-sm font-mono">
                Already have an account?{" "}
                <Link href="/auth/login" legacyBehavior>
                  <a className="text-[#67162c] hover:text-[#67162c]">Login</a>
                </Link>
              </div>

              {/* reset password */}
              <div className="text-center text-white text-sm font-mono">
                New here?{" "}
                <Link href="/auth/register" legacyBehavior>
                  <a className="text-[#67162c] hover:text-[#67162c]">
                    Reset Password
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Reset Password form end */}
        </div>

        {/* glassmorphism end */}
      </div>
    </>
  );
};

export default ResetPassword;
