import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import Image from "next/image";
import timetrial5km from "../../assets/timetrial5km.jpg";
import timetrial8km from "../../assets/timetrial8km.jpg";
import heroImg from "../../assets/memberphoto.jpg";

const About = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Head>
        <title>About Us | Club Runs</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="Club Runs" message="" image={heroImg} />
      <div className="bg-gray-200">
        {/* start */}
        <div className="">
          <h1 className="text-3xl font-bold text-center p-4 m-4 py-0 rac-colour">
            Club Runs
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-full p-4 m-4">
            <p className="text-lg">
              RAC offers a selection of well-planned Club Run routes, that
              showcase our beautiful Joburg suburbs, while providing some
              excellent and varied training runs. Runners of all speeds and
              abilities take part, and there is always a cut-off option at
              approximately halfway for those who don’t want to run the full
              route. The routes start and end at our RAC clubhouse, with regular
              water stops or garages along the way. ​
            </p>

            {/* center text in a div */}
            <div className="text-center items-center">
              <p className="text-lg font-bold rac-colour pt-8">
                Everyone is welcome
              </p>
              {/* center all items left align them */}
              <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="w-full md:w-1/2 p-4 m-4">
                  <p className="text-lg pt-4">
                    <span className="font-bold">Day:</span> Sunday Morning{" "}
                    <br />
                    <span className="font-bold">Time:</span> Summer 5:00am and
                    6:00am / Winter 6:00am and 7:00am <br />
                    <span className="font-bold">Distance:</span> Approximately
                    23km to 28km, with cut-off options <br />
                    <span className="font-bold">Venue:</span> RAC clubhouse, Old
                    Parks, Bordeaux <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* place the two timetrial images next to each other */}

        {/* end */}
      </div>
    </>
  );
};

export default About;
