import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import Image from "next/image";
import timetrial5km from "../../assets/timetrial5km.jpg";
import timetrial8km from "../../assets/timetrial8km.jpg";
import heroImg from "../../assets/timetrial.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Time Trials</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="Club Activities" message="" image={heroImg} />
      <div className="bg-gray-200">
        {/* start */}
        <div className="">
          <h1 className="text-3xl font-bold text-center p-4 m-4 py-0 rac-colour">
            Time Trials
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-full p-4 m-4">
            <p className="text-lg">
              Time trials are held every Tuesday evening at 17:45, throughout
              summer and winter. Time Trials are an excellent training tool to
              gauge your level of fitness.
              <br /> <br />
              Non-RAC members are welcome. Runners can choose between the 5km
              and 8km route, and walkers can walk a 4km or 7km route.
              <br /> <br />
              After time trials, runners usually get together for a light meal
              and a few drinks at the café at the clubhouse, which brings a nice
              social element to the club.
              <br /> <br />
              Tuesdays are also our club admin evening, for taking on new
              members, answering queries or issuing licenses. In the months
              leading up to Comrades, we host informative talks and interactive
              sessions for runners, sharing advice, tips and trends with
              experienced runners and novices
            </p>
          </div>
        </div>
        {/* place the two timetrial images next to each other */}
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 p-4 m-4">
            <Image
              src={timetrial5km}
              alt="5km Time Trial"
              width={500}
              height={500}
            />
            <p className="text-lg text-center rac-colour">
              <br />5 Km Time Trial Route
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 m-4">
            <Image
              src={timetrial8km}
              alt="8km Time Trial"
              width={500}
              height={500}
            />
            <br />

            <p className="text-lg text-center rac-colour">
              8 Km Time Trial Route
            </p>
          </div>
        </div>
        {/* end */}

        {/* start */}
      </div>
    </>
  );
};

export default About;
