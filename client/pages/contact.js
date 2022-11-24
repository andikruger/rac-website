import Head from "next/head";
import Hero from "../components/Hero/Hero";
import ContactForm from "../components/Contact/Contact";
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Get hold of us" message="" />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0 rac-colour">
          Our Contact Details
        </h1>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-center p-4 m-4 py-0">
              Vreni Welch
            </h2>
            <p className="text-lg font-bold text-center p-4 m-4 py-0">
              Tel: 011 234 5678
            </p>
            <p className="text-lg font-bold text-center p-4 m-4 py-0">
              Email:{" "}
              <a
                href="mailto:randathletic@iafrica.com
                "
                className="text-blue-500 hover:text-blue-700"
              >
                randathletic@iafrica.com
              </a>
            </p>
            {/* phisical address */}
            <p className="text-lg font-bold text-center p-4 m-4 py-0">
              Address: 1 Garden Road Bordeaux Johannesburg 2194
            </p>

            {/* google map */}
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.6823478764945!2d28.016354315101506!3d-26.109285966462213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9574a9d5760a8b%3A0x33736db6b8547d53!2s1%20Garden%20Rd%2C%20Bordeaux%2C%20Johannesburg%2C%202194%2C%20S%C3%BCdafrika!5e0!3m2!1sde!2sat!4v1668080577385!5m2!1sde!2sat"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: "1rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;