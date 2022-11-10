import "../styles/globals.css";
import NavBar from "../components/NavigationBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
