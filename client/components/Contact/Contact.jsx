import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";

const contactForm = () => {
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    captchaRef.current.reset();
    console.log(token);

    // axios.post (https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${token})

    // axios
    //   .post("/api/contact", formData)
    //   .then((res) => {
    //     toast.success(res.data.message);
    //     setFormData({
    //       name: "",
    //       email: "",
    //       subject: "",
    //       message: "",
    //     });
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Send us a 🏃 message
      </h1>
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInputChange}
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2"
          type="text"
          placeholder="Subject"
          name="subject"
          onChange={handleInputChange}
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols={30}
          rows={10}
          placeholder="Message"
          name="message"
          onChange={handleInputChange}
        ></textarea>
        <ReCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          onChange={handleInputChange}
          ref={captchaRef}
        />

        <button className="bg-[#67162c] text-white hover:bg-[#470819] border shadow-lg p-3 w-full mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default contactForm;
