import Head from "next/head";
import Hero from "../components/Hero/Hero";

const Privacy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Rand Athletic Club</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Privacy Policy" message="" />

      <div>
        <h1 className="text-2xl font-bold text-center p-4 m-4 py-0">
          The "POPIA" Act. (Protection of Personal Information Act, No.4 of
          2013)
        </h1>
      </div>
      {/* create a text section with styling */}
      <div className="flex flex-col items-center p-4">
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          The Rand Athletic Club (RAC) is obliged to comply with the above Act.
          We now require members consent for the Club to use and store their
          Personal information on the Club Data Base.
          <br />
          <br />
          <b>The Personal Information we keep is:</b>
        </p>
        <ul className="list-disc list-inside text-center">
          <li>First name</li>
          <li>Last Name</li>
          <li>Mobile Phone Number </li>
          <li>Subscriptions paid or due</li>
          <li>ID Number</li>
          <li>Email Number</li>
          <li>License Number</li>
          <li>Date of Joining the Club</li>
        </ul>
        <p className="text-lg text-gray-900  text-center p-4 py-0">
          <br />
          <br />
          This information is updated, where necessary, on receipt of the
          Members annual Licence Renewal Form. The licence renewal form is
          relayed to our Provincial office for transfer to the National Athletic
          Parent body who in turn use it to update the Athlete Insurance Policy
          and their own records. RAC use the members personal addresses to
          publish communications such as the NewsFlash and other relevant
          information via the Internet or posts on Social Media pages like
          Facebook, Instagram and Twitter. Members photographs are, at times,
          also included in these communications.
          <br />
          <br />
          If you do NOT wish to continue receiving our communications, please
          inform RAC of your wishes. This you can do by mailing:
          randathletic@iafrica.com If no message to the contrary is received, we
          will assume that you DO wish to continue receiving our communications.
          If you are a non member and are currently receiving communications
          from RAC please would you confirm ifyou wish to continue receiving
          them. Do this by mailing your request to:{" "}
          <a href="mailto:randathletic@iafrica.com">
            {" "}
            randathletic@iafrica.com
          </a>
          <br />
          <br />
          RAC is obliged to delete any information for which we have not been
          given permission to keep. The information RAC does retain is never
          sold. It is used exclusively for the administration of the Club, the
          dissemination of information and the verification of members ages and
          status.
          <br />
          <br />
          Thank you for your cooperation. Dick Welch, Chairman RAC.
        </p>
      </div>
    </>
  );
};

export default Privacy;
