import { useEffect, useState } from "react";
import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import heroImg from "../../assets/wildones.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleCard from "../../components/Memberzone/ArticleCard";
import { isProtected } from "../../utils/auth";
import { useRouter } from "next/router";
import axios from "axios";

const Memberzone = () => {
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
        setData(res.data.result);
      });
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Rand Athletic Club</title>
        <meta name="description" content="An excellent Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSmall heading="One of us" message="" image={heroImg} />

      {/* iterate over the data array */}
      {data &&
        data.map((article) => {
          return <ArticleCard key={article._id} data={article} />;
        })}
    </>
  );
};

export default Memberzone;
