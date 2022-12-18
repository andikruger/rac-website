import React from "react";
import Link from "next/link";
const Races = () => {
  return (
    <>
      <div className="shadow-xl animate Card w-full m-4 mx-auto text-center py-4 bg-white rounded-lg">
        <p className="text-2xl font-bold">Fancy a Run? 🏃</p>
        <div className="m-2 md:m-10 mt-32 p-2 md:p-10 bg-white rounded-3xl">
          <p className="text-xl pb-4 font-bold text-center">
            All upcoming races can be found
          </p>
          <Link legacyBehavior href="races">
            <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
              Here
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Races;
