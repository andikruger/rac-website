import Image from "next/image";
import Link from "next/link";

import React from "react";

const LatestNews = () => {
  return (
    <div id="portfolio" className="max-w-[1240px] mx-auto pb-8 text-center">
      <h1 className="font-bold text-2xl p-4">Latest news</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Image
            src="https://cdn.sanity.io/images/yavqngwf/production/07b629e0a15b61c854e51ed456bb5e5d988277c3-5568x3712.jpg?w=3000"
            alt="Happy New Year"
            width={500}
            height={500}
          />
          <h1 className="font-bold text-xl p-4">Happy new Year</h1>
          <p className="text-gray-500 p-4">
            2023 is here. It is going to be a great year.
          </p>
          <Link legacyBehavior href="article/happy-new-year-happy-2023">
            <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
              Read more
            </a>
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Image
            src="https://cdn.sanity.io/images/yavqngwf/production/5386fa13e43d894a3ac6910816d17699c6cb8bef-1769x1181.png?w=3000"
            alt="Year end message"
            width={500}
            height={500}
          />
          <h1 className="font-bold text-xl p-4">Year end message</h1>
          <p className="text-gray-500 p-4">
            A year like no other, but we are still here.
          </p>
          <Link legacyBehavior href="article/year-end-message-2022">
            <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
              Read more
            </a>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-4">
          <Image
            src="https://images.unsplash.com/photo-1590333748338-d629e4564ad9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1849&q=80"
            alt="New website"
            width={500}
            height={500}
          />
          <h1 className="font-bold text-xl p-4">2023 Subscriptions</h1>
          <p className="text-gray-500 p-4">
            Information regarding the membership fees can be found here
          </p>
          <Link legacyBehavior href="membership/fees">
            <a className="bg-[#67162c] hover text-white font-bold py-2 px-4 rounded">
              Read more
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
