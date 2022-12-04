import { useEffect } from "react";
import Head from "next/head";
import HeroSmall from "../../components/Hero/HeroSmall";
import heroImg from "../../assets/wildones.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ArticleCard from "../../components/Memberzone/ArticleCard";
import { isProtected } from "../../utils/auth";
import { useRouter } from "next/router";

const Memberzone = () => {
  const router = useRouter();

  // check if a logout vallue is in session storage
  useEffect(() => {
    if (!isProtected()) {
      router.push("/");
    }
    if (sessionStorage.getItem("login")) {
      toast.success(sessionStorage.getItem("login"));
      sessionStorage.removeItem("login");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Rand Athletic Club</title>
        <meta name="description" content="An excellent Club" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSmall heading="One of us" message="" image={heroImg} />

      <ArticleCard />
      <ArticleCard />
    </>
  );
};

export default Memberzone;
