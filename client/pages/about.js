import Head from "next/head";
import HeroSmall from "../components/Hero/HeroSmall";
import Image from "next/image";
import casper from "../assets/about/CasparGreef.jpg";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSmall heading="About RAC" message="" />
      <div>
        <h1 className="text-3xl font-bold text-center p-4 m-4 py-0">
          It started nearly 50 years ago, in September 1972
        </h1>
      </div>

      {/* start */}
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-3/4 p-4 m-4">
          <p className="text-lg">
            Rand Athletic Club was founded in 1972 by a group of like-minded
            individuals who wanted to create a club that would cater for the
            needs of the community. The club was originally situated in the Rand
            Club in Randburg, hence the name Rand Athletic Club. The club was
            founded by a group of like-minded individuals who wanted to create a
            club that would cater for the needs of the community. The club was
            originally situated in the Rand Club in Randburg, hence the name
            Rand Athletic Club.
          </p>
        </div>
        <div className="md:w-1/4 p-4 m-4">
          <Image
            src={casper}
            alt="Casper Greef"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <p className="text-center text-strong">
            Bruce Clark picking up a badly cramping Richard Cohen some 40 yards
            from the Comrades finishing line. They finished in time for both to
            win their 1997 Silver Medals.
          </p>
        </div>
      </div>
      {/* end */}
    </>
  );
};

export default About;
