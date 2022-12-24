import { useEffect, useState } from "react";
import Head from "next/head";
import HeroSmall from "../../../components/Hero/HeroSmall";
import heroImg from "../../../assets/wildones.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdvertCard from "../../../components/Memberzone/AdvertCard";
import { isProtected } from "../../../utils/auth";
import { useRouter } from "next/router";
import axios from "axios";

const Classifieds = () => {
  const router = useRouter();
  const [data, setData] = useState(null);

  // check if a logout vallue is in session storage
  useEffect(() => {
    if (!isProtected()) {
      router.push("/");
    }
    if (sessionStorage.getItem("login")) {
      toast.success(sessionStorage.getItem("login"));
      sessionStorage.removeItem("login");
    }
    if (!data) {
      const url = `https://yavqngwf.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D`;
      axios.get(url).then((res) => {
        // reverse res.data.result to show latest first
        let reversed = res.data.result.reverse();
        setData(reversed);
      });
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Rand Athletic Club | Classifieds</title>
        <meta name="description" content="An excellent Club" />
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

      <HeroSmall heading="One of us" message="" image={heroImg} />

      {/* iterate over the data array and place the AdvertCards in a grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.map((item) => {
              return <AdvertCard key={item._id} data={item} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Classifieds;
