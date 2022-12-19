import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import Image from "next/image";
import timetrial5km from "../../assets/timetrial5km.jpg";
import timetrial8km from "../../assets/timetrial8km.jpg";
import heroImg from "../../assets/crosscountry.jpg";

const About = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>Cross Country | Cross Country</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <HeroSmall heading="Cross Country" message="" image={heroImg} />
      <div className="bg-gray-200">
        {/* start */}
        <div className="">
          <h1 className="text-3xl font-bold text-center p-4 m-4 py-0 rac-colour">
            Cross Country
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-full p-4 m-4">
            <p className="text-lg">
              Access the CGA Cross Country page here:
              <br /> <br />
              <a
                className="rac-colour hover"
                href="https://cgacrosscountry.wixsite.com/home"
                target="_blank"
                rel="noreferrer"
              >
                https://cgacrosscountry.wixsite.com/home
              </a>
              <br /> <br />
              Entries for each league will close at midnight on the Tuesday
              prior to each league. Select the event you wish to enter and
              complete the form. You must wear your {year} license number at all
              times.
            </p>
          </div>
        </div>
        {/* place the two timetrial images next to each other */}

        {/* end */}
        <p className="text-lg p-4">
          Please contact us if you have any questions or if you need assistance.
        </p>

        <p className="text-lg p-4">
          Meshak Ndhlovu:{" "}
          <a href="tel:+27826713518" className="rac-colour hover">
            {" "}
            082 671-3518
          </a>{" "}
          (RAC Cross Country Captain)
        </p>

        <p className="text-lg p-4">
          Dick Welch:{" "}
          <a href="tel:+27828537330" className="rac-colour hover">
            {" "}
            082 853-7330
          </a>{" "}
          (RAC Chairman)
        </p>

        {/* start */}
      </div>
    </>
  );
};

export default About;
