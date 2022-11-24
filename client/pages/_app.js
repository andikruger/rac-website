import "../styles/globals.css";
import NavBar from "../components/NavigationBar/NavBar";
import Footer from "../components/Footer";
import { createContext } from "react";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";
export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;