import { useEffect } from "react";
import { useRouter } from "next/router";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    sessionStorage.setItem("logout", true);
    router.push("/");
  }, []);

  return null;
};

export default Logout;
