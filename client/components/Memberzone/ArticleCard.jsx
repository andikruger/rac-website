import React from "react";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-6  bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div
          className="flex items-center sm:p-4 justify-center w-full h-56 mb-8 bg-cover rounded-lg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80Z')",
          }}
        >
          <h1 className="text-4xl font-bold text-white">Article Title</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Article Title
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptates.
          </p>
          <div className="flex items-center justify-center w-full mt-4">
            <Link legacyBehavior href="/articles/1">
              <a className="px-4 mb-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Read More
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
